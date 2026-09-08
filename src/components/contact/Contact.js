import React, { useRef, useState } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";

  const form = useRef();
  const sending = useRef(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending.current || !form.current.reportValidity()) return;

    const submittedForm = form.current;
    sending.current = true;
    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_8bezxog',
        'template_jmsk313',
        submittedForm,
        { publicKey: 'knwNTK4YU4K30HYMd' }
      );
      submittedForm.reset();
      Swal.fire({
        icon: 'success',
        title: 'Message sent',
        text: 'Thank you for getting in touch.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Message could not be sent',
        text: 'Your message is still here. Please try again, or email benjaminmhrdd@gmail.com directly.',
      });
    } finally {
      sending.current = false;
      setIsSending(false);
    }
  };


    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className={classes.form} aria-busy={isSending}>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  required
                  InputProps={{ readOnly: isSending }}
                  className={classes.formfield}
                />
                <TextField
                  id="contact-email"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  required
                  InputProps={{ readOnly: isSending }}
                  className={classes.formfield}
                />
                <TextField
                  id="contact-message"
                  label="Message"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  required
                  InputProps={{ readOnly: isSending }}
                  className={classes.formfield}
                />
                <button type="submit" value="Send" className="submit-btn" disabled={isSending}>
                <i className="fas fa-terminal"></i>
                  <Typography component='span' role='status'>{isSending ? 'Sending…' : 'Send Message'}</Typography>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <TextDecrypt text={greetings}/>
            </h1>
          </div>
          <div className="footer-attribution">
            <p>
              © 2025 Benjamin Mehrdad. All rights reserved.
            </p>
            <p>
              Background animation by{' '}
              <a 
                href="https://github.com/CodyJasonBennett" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Cody Jason Bennett
              </a>
            </p>
            
          </div>
        </Container>
      </section>
  );
};
