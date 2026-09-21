/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/projects/
import FakeNewsDetector from '../../assets/projects/Fake-News-Detector-screen.png';
import Portfolio from '../../assets/projects/react-portfolio-screen.png';
import LogicGatesApp from '../../assets/projects/Logic-Gates-App-screen.png';
import Deskeando from '../../assets/projects/deskeando-screen.jpg';
import WorkforceDigitalTwin from '../../assets/projects/workforce-digital-twin-screen.png';
import { LaptopMockup } from './LaptopMockup';


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
      id: 6,
      title: 'Workforce Digital Twin',
      description: `A research prototype for monitoring worker activity through computer vision and sensor telemetry. Combines a live dashboard, a FastAPI backend, MQTT messaging, and WebSocket updates to display activity, protective equipment status, and persistent event history. Includes an Android sensor app and an ESP32 camera-streaming component.`,
      alter: 'Laptop displaying the Workforce Digital Twin dashboard with worker activity, protective equipment status, and sensor telemetry.',
      image: WorkforceDigitalTwin,
      repository: 'https://github.com/Benjamin-GitHub/workforce-digital-twin',
    },
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
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project, index) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <LaptopMockup image={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ (index + 1) + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
              {project.repository && (
                <a className="project-repository" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub (opens in a new tab)`}>
                  View on GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
