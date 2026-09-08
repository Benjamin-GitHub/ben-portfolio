import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, cleanup } from '@testing-library/react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Contact } from './Contact';

jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));
jest.mock('sweetalert2', () => ({ fire: jest.fn() }));
jest.mock('../content/TextDecrypt', () => ({ TextDecrypt: ({ text }) => <span>{text}</span> }));

afterEach(() => { cleanup(); jest.clearAllMocks(); });

const fillForm = () => {
  const view = render(<Contact />);
  fireEvent.change(view.getByLabelText(/Name/), { target: { value: 'Visitor' } });
  fireEvent.change(view.getByLabelText(/Email/), { target: { value: 'visitor@example.com' } });
  fireEvent.change(view.getByLabelText(/Message/), { target: { value: 'Hello Ben' } });
  return { ...view, form: view.container.querySelector('form') };
};

test('waits for the provider, blocks repeat submissions, and clears only after success', async () => {
  let resolve;
  emailjs.sendForm.mockReturnValue(new Promise(done => { resolve = done; }));
  const view = fillForm();
  fireEvent.submit(view.form);
  fireEvent.submit(view.form);
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
  expect(Swal.fire).not.toHaveBeenCalled();
  expect(view.getByText('Sending…').closest('button').disabled).toBe(true);
  expect(view.getByLabelText(/Message/).value).toBe('Hello Ben');
  await act(async () => { resolve({ status: 200 }); });
  expect(Swal.fire).toHaveBeenCalledWith(expect.objectContaining({ icon: 'success' }));
  expect(view.getByLabelText(/Message/).value).toBe('');
  expect(view.getByText('Send Message').closest('button').disabled).toBe(false);
});

test('preserves inputs on failure and allows retry', async () => {
  emailjs.sendForm.mockRejectedValueOnce(new Error('Offline')).mockResolvedValueOnce({ status: 200 });
  const view = fillForm();
  await act(async () => { fireEvent.submit(view.form); });
  expect(Swal.fire).toHaveBeenCalledWith(expect.objectContaining({ icon: 'error' }));
  expect(view.getByLabelText(/Message/).value).toBe('Hello Ben');
  expect(view.getByLabelText(/Email/).value).toBe('visitor@example.com');
  expect(view.getByText('Send Message').closest('button').disabled).toBe(false);
  await act(async () => { fireEvent.submit(view.form); });
  expect(emailjs.sendForm).toHaveBeenCalledTimes(2);
  expect(view.getByLabelText(/Message/).value).toBe('');
});

test('does not send an empty or invalid form', () => {
  const view = render(<Contact />);
  fireEvent.submit(view.container.querySelector('form'));
  expect(emailjs.sendForm).not.toHaveBeenCalled();
  fireEvent.change(view.getByLabelText(/Name/), { target: { value: 'Visitor' } });
  fireEvent.change(view.getByLabelText(/Email/), { target: { value: 'invalid' } });
  fireEvent.change(view.getByLabelText(/Message/), { target: { value: 'Hello' } });
  fireEvent.submit(view.container.querySelector('form'));
  expect(emailjs.sendForm).not.toHaveBeenCalled();
});
