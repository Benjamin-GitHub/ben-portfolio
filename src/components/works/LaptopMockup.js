import React from 'react';
import frame from '../../assets/projects/macbook-pro-frame.svg';

// Keep the supplied SVG frame and each original screenshot as separate layers.
export const LaptopMockup = ({ image, alt }) => (
  <svg className="project-laptop" viewBox="425 420 2401 1420" role="img" aria-label={alt}>
    <image href={frame} width="3250" height="2250" />
    <image href={image} x="679" y="490" width="1904" height="1190" preserveAspectRatio="xMidYMid meet" />
  </svg>
);
