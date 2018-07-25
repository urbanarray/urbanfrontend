import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';


export default class InterviewMember extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      // 3 step graphic here
      <div>
        { /* <img src={logo} alt="Urban Array logo" /> */}
        
        <h1>Meet with a Member</h1>
        <h3>Thanks for taking the time to fill out your information! You're almost there.</h3>

        <h4>Ready to Take the Next Step?</h4>
        <button>Meet with a Member</button>

        <h4>Not quite ready yet?</h4>
        <button>Continue to Dashboard</button>

        <a href="#">Back</a>

      </div>
    )
  }
}