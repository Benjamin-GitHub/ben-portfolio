/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile2 from '../../assets/profile2.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, an AI/ML programmer and researcher based in London, pursuing my Master's degree in Artificial Intelligence at London South Bank University (LSBU).

My recent work spans computer vision, deep learning, and natural language processing. I'm developing a Workforce Digital Twin that combines activity recognition, camera streams, and Android sensor data in a live monitoring dashboard. I've also built applications for Bangla cyberbullying detection and fake news classification.

I enjoy turning model experiments into working applications, combining Python, machine learning, and full-stack development. I'm open to collaborations that connect AI research with practical challenges and meaningful social impact.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img">
            <img 
              src={profile2} 
              alt={`${FirstName} ${LastName}`}
              className="profile-image"
            />
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
