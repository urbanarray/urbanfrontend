import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';

// urban array logo
import logo from 'assets/img/logo.png';

export default class GetInvolved extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

      // 3 step graphic here
      <div>
        { logo }
        <h1>Get Involved in Three Steps</h1>
        <h3>Before viewing the opportunities in your community, complete the following steps:</h3>

        <div>
          <h3>First Step</h3>
          <h4>Sign Up</h4>
          <p>Let's get this process started by entering in some basic information.</p>
        </div>

        <div>
          <h3>Second Step</h3>
          <h4>Select Skills</h4>
          <p>Everybody has skills they can offer or want to learn! Tell us how we can help you gain skills and contribute to your community.</p>
        </div>

        <div>
          <h3>Third Step</h3>
          <h4>Interview with a Member</h4>
          <p>We want to ensure that we're a good fit for each other. We hope that we can help you and your community.</p>
        </div>

        <a href="#">Back</a>

        <button>Sign Up</button>
      </div>

    )
  }
}