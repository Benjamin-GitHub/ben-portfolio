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
  const aboutme = `I'm ${FirstName} ${LastName}, an AI/ML programmer and researcher pursuing my Master's degree in Artificial Intelligence at London South Bank University (LSBU). 

My focus lies in Retrieval-Augmented Generation (RAG) architectures, machine learning, and real-world AI applications—especially in healthcare and scientific research. I enjoy bridging academic research with practical innovation, contributing to papers and open-source work that explore trustworthy AI systems.

Currently based in London, I'm always open to meaningful collaborations that combine research with social impact.`;

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
