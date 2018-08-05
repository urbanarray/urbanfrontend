import React, { Component } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';
import '../OnboardingStyles.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import ProgressBar from '../ProgressBar';

import colorLogo from 'assets/img/colorLogo.png';

export default class GetInvolved extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentStep: 1
    }
  }


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.history.push('signup');
  // }


  render() {
    return (

      <div>
        <img src={colorLogo} style={logo.onboardingLogo} />  
        <ProgressBar currentStep={this.state.currentStep} />  
        <div className="container center">
          <h1>Get Involved in Three Steps</h1>
          <h3>Before viewing the opportunities in your community, complete the following steps:</h3>

          <div className="card-layout">
              <div>
                <h3 className="card-headline">First Step</h3>
                <h4>Sign Up</h4>
                <p className="card-text">Let's get this process started by entering in some basic information.</p>
              </div>

              <div>
                <h3 className="card-headline">Second Step</h3>
                <h4>Select Skills</h4>
                <p className="card-text">Everybody has skills they can offer or want to learn! Tell us how we can help you gain skills and contribute to your community.</p>
              </div>

              <div>
                <h3 className="card-headline">Third Step</h3>
                <h4>Interview with a Member</h4>
                <p className="card-text">We want to ensure that we're a good fit for each other. We hope that we can help you and your community.</p>
              </div>
          </div>

          <div className="three-step-nav-container">
            <Link
              to="/welcome"
              type="button"
              className="three-step-nav"
              style={styles.primary}>Back
            </Link>
            <Link
              to="/signup"
              type="button"
              className="three-step-nav"
              style={styles.secondary}>Sign Up
            </Link>
          </div>
          <br />
          <div className="social-icon-container">
            Follow us and check out what's happening in your community: &nbsp; 
            <SocialIcon className="social-icons" url="https://www.facebook.com/urbanarray/" target="_blank" />
            <SocialIcon className="social-icons" url="https://twitter.com/urbanarray" target="_blank" />
            <SocialIcon className="social-icons" url="https://www.instagram.com/urbanarray/" target="_blank" />
            <SocialIcon className="social-icons" url="https://www.linkedin.com/company/urban-array/" target="_blank" />
            <SocialIcon className="social-icons" url="https://www.youtube.com/channel/UCicgBg_6lVqWBgqkur2S9vg" target="_blank" />
          </div>
          
        </div>
      </div>

    )
  }
}
