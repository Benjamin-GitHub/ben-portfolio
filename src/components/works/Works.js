/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/projects/
import FakeNewsDetector from '../../assets/projects/Fake-News-Detector.png';
import Portfolio from '../../assets/projects/react-portfolio.png';
import LogicGatesApp from '../../assets/projects/Logic-Gates-App.png';
import Deskeando from '../../assets/projects/deskeando.png';
import Quiz from '../../assets/projects/quiz.png';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Fake News Detector', 
      description: `A machine learning web application that detects fake news using NLP techniques and pre-trained models. Users can input news articles through a Flask web interface to receive predictions with confidence scores, sentiment analysis, and highlighted suspicious content. Built with Python, scikit-learn, and TF-IDF vectorization for real-time fake news detection.`,
      alter: 'Fake News Detector',
      image: `${FakeNewsDetector}`,
    },
    { 
      id: 2,
      title: 'Logic Gates App', 
      description: `The Logic Gate Simulator is an interactive drag-and-drop web application that allows users to create, connect, and simulate digital logic circuits. Users can add logic gates to a canvas, move them freely, and connect them with wires to visualize how logical operations work.`,
      alter: 'Logic Gates App',
      image: `${LogicGatesApp}`,
    },
    { 
      id: 3,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 4,
      title: 'Deskeando Project', 
      description: `An booking desk application project built using
      ReactJs, for booking a desk with specified seat and table on the different floors for Avaloq.`,
      alter: 'Deskeando Project',
      image: `${Deskeando}`,
    },
    { 
      id: 5,
      title: 'Quiz App Project', 
      description: `Quiz app designed for asking random questions with ability giving the final score and getting data from an API.`,
      alter: 'Quiz App Project',
      image: `${Quiz}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
