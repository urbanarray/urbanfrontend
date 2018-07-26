import React, { Component } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';

// urban array logo
import logo from 'assets/img/logo.png';

export default class SelectSkills extends Component {

  constructor(props){
    super(props);
  }

  interviewMember = (e) => {
    e.preventDefault();
    this.props.history.push('interview-member');
  }

  render() {
    return (

      // 3 step graphic here

      <div className="container text-center">
        { /* <img src={logo} alt="Urban Array logo" /> */}
        <Col xs={12} sm={10}>
          <h1>Urban Array is all about skills</h1>
          <h3>Tell us the skills you have and the skills you want to learn and we'll help you reach your goals.</h3>
        </Col>

        <Col xs={12} sm={10}>
          <form type="text" placeholder="Search other skills here.">
            <Button style={styles.primary}>Magnifying glass icon</Button>
          </form>
        </Col>

        <Col xs={12} sm={10}>
          <h4>Filters</h4>
          <Button style={styles.secondaryDark}>Construction</Button>
          <Button style={styles.secondaryDark}>Activism</Button>
          <Button style={styles.secondaryDark}>Design</Button>
        </Col>

        <Col xs={12} sm={10}>
          <a href="#">Back</a>
          <p>Don't see your skills? <a onClick={this.interviewMember} href="#">Skip for now.</a> </p>
          <button style={styles.primary} onClick={this.interviewMember}>Next</button>
        </Col>

      </div>

    )
  }
}