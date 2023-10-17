/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formField: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8bezxog', 'template_jmsk313', form.current, 'knwNTK4YU4K30HYMd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="small"
                  variant="filled"
                  autoComplete="on"
                  name="name"
                  className={classes.formField}
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  autoComplete="on"
                  name="email"
                  className={classes.formField}
                />
                <TextField
                  id="outlined-message-input"
                  label="Message"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className={classes.formField}
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                  <Typography component='span'> Send Message</Typography>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <TextDecrypt text={greetings}/>
            </h1>
          </div>
        </Container>
      </section>
  );
};
