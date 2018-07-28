import React, { Component } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';
import { Link } from 'react-router-dom';

import colorLogo from 'assets/img/colorLogo.png';
// import search from 'assets/img/search.png';

export default class SelectSkills extends Component {

  constructor(props){
    super(props);
  }

  searchSkills = (e) => {
    e.preventDefault();
  }

  interviewMember = (e) => {
    e.preventDefault();
    this.props.history.push('interview-member');
  }

  render() {
    return (

      // 3 step graphic here

      <div>
        <img src={colorLogo} style={logo.onboardingLogo}/>        
        <div className="container text-center">
          <Col xs={12} sm={10}>
            <h1>Urban Array is all about skills</h1>
            <h3>Tell us the skills you have and the skills you want to learn and we'll help you reach your goals.</h3>
          </Col>

          <Col xs={12} sm={10}>
              <input onClick={this.searchSkills} placeholder="Search other skills here."></input>
              { /* <img src={search} alt="Search Icon" /> */ }
          </Col>

          <Col xs={12} sm={10}>
            <h4>Filters</h4>
            <Button style={styles.secondaryDark}>Construction</Button>
            <Button style={styles.secondaryDark}>Activism</Button>
            <Button style={styles.secondaryDark}>Design</Button>
          </Col>

          <Col xs={12} sm={10}>
            <Link
              to="/get-involved"
              type="button"
              className="btn"
              style={styles.primary}>Back
            </Link>
            <h4>Don't see your skills?</h4> 
            <Link
              to="/interview-member"
              type="button"
              className="btn"
              style={styles.primaryLight}>Skip for now.
            </Link>
            <Link
              to="/interview-member"
              type="button"
              className="btn"
              style={styles.secondaryLight}>Next
            </Link>
          </Col>
        </div>

      </div>

    )
  }
}