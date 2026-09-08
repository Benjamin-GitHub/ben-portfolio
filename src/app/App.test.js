import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import { App } from './App';

jest.mock('../pages/Home', () => ({ Home: () => <h1>Portfolio home</h1> }));
jest.mock('../utils/logCredits', () => ({ logCredits: jest.fn() }));

afterEach(cleanup);

test('renders unknown routes and lets the visitor return home', async () => {
  window.history.replaceState({}, '', '/missing-page');
  const view = render(<App />);
  expect(view.getByText('Page not found')).toBeTruthy();
  await wait(() => expect(document.title).toBe('Page not found | Benjamin Mehrdad'));
  expect(document.querySelector('meta[name="robots"]').content).toBe('noindex');
  fireEvent.click(view.getByText('Back to home'));
  expect(window.location.pathname).toBe('/');
  expect(view.getByText('Portfolio home')).toBeTruthy();
  await wait(() => expect(document.title).toBe('Benjamin Mehrdad | AI/ML Programmer & Researcher'));
  expect(document.querySelector('meta[name="robots"]')).toBeNull();
});
