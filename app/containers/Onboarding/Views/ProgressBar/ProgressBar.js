import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards, images } from 'assets/styles/variables';
import '../OnboardingStyles.css';

// active color: #91c63f (secondary)
// inactive color: #lightgrey

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    const currentStep = this.props.currentStep;
    this.state = {
      currentStep: currentStep
    }
  }

  render() {
    // currentStep is passed down as a prop from each component's view
    const currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return (
        <div className="center progress-container">
          <h2 className="activestep">1</h2>
            <div className="inactivebar"></div>
          <h2 className="inactivestep">2</h2>
            <div className="inactivebar"></div>
          <h2 className="inactivestep">3</h2>
        </div>
      )
    } else if (currentStep === 2) {
      return (
        <div className="center progress-container">
          <h2 className="activestep">1</h2>
            <div className="activebar"></div>
          <h2 className="activestep">2</h2>
            <div className="inactivebar"></div>
          <h2 className="inactivestep">3</h2>
        </div>
      )
    } else if (currentStep === 3) {
      return (
        <div className="center progress-container">
          <h2 className="activestep">1</h2>
            <div className="activebar"></div>
          <h2 className="activestep">2</h2>
            <div className="activebar"></div>
          <h2 className="activestep">3</h2>
        </div>
      )
    }

    
  }
}
