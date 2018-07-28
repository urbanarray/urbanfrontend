import React, { Component } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';

import colorLogo from 'assets/img/colorLogo.png';

export default class InterviewMember extends Component {

  constructor(props){
    super(props);
  }

  meetMember = (e) => {
    e.preventDefault();
    // interview member
  }

  goToDashboard = (e) => {
    e.preventDefault();
    this.props.history.push('dashboard');
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.history.push('select-skills');
  }
 

  render() {
    return (
      // 3 step graphic here
      <div>

        <img src={colorLogo} style={logo.onboardingLogo}/>  

        <div className="container text-center">
          <Col xs={12} sm={10}>
            <h1>Meet with a Member</h1>
            <h3>Thanks for taking the time to fill out your information! You're almost there.</h3>
          </Col>

          <Col xs={12} sm={10}>
            <h4>Ready to Take the Next Step?</h4>
            <Button style={styles.primary} onClick={this.meetMember}>Meet with a Member</Button>
          </Col>

          <Col xs={12} sm={10}>
            <h4>Not quite ready yet?</h4>
            <Button style={styles.secondary} onClick={this.goToDashboard}>Continue to Dashboard</Button>
            <Button style={styles.primary} onClick={this.goBack}>Back</Button>
          </Col>

        </div>
      </div>
    )
  }
}