import React, { Component } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';
import '../OnboardingStyles.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import colorLogo from 'assets/img/colorLogo.png';
// import search from 'assets/img/search.png';

export default class SelectSkills extends Component {

  constructor(props){
    super(props);
  }

  searchSkills = (e) => {
    e.preventDefault();
    // search function here.
  }

  render() {
    return (

      // 3 step graphic here

      <div>

        <img src={colorLogo} style={logo.onboardingLogo}/> 

        <div>
          <div className="center">
            <h1 className="card-headline">Urban Array is all about skills</h1>
            <h3 className="card-text">Tell us the skills you have and the skills you want to learn, and we'll help you reach your goals.</h3>
          </div>

          <br/>

          <div className="center">
              <input className="search-field" onClick={this.searchSkills} placeholder="Search other skills here."></input>
              { /* <img src={search} alt="Search Icon" /> */ }
          </div>

          <div className="center">
            <h4 className="card-headline">Filters</h4>
            <Button style={styles.secondaryDark}>Construction</Button>
            <Button style={styles.secondaryDark}>Activism</Button>
            <Button style={styles.secondaryDark}>Design</Button>
          </div>
          <h4 className="center">Don't see your skills?</h4> 

          <div className="three-step-nav-container">
            <Link
              to="/get-involved"
              type="button"
              className="three-step-nav"
              style={styles.primary}>Back
            </Link>
            <Link
              to="/interview-member"
              type="button"
              className="three-step-nav"
              style={styles.primaryLight}>Skip for now
            </Link>
            <Link
              to="/interview-member"
              type="button"
              className="three-step-nav"
              style={styles.secondary}>Next
            </Link>
          </div>
        </div>

        <br/>

        <div className="social-icon-container">
          Follow us and check out what's happening in your community: &nbsp; 
          <SocialIcon className="social-icons" url="https://www.facebook.com/urbanarray/" target="_blank" />
          <SocialIcon className="social-icons" url="https://twitter.com/urbanarray" target="_blank" />
          <SocialIcon className="social-icons" url="https://www.instagram.com/urbanarray/" target="_blank" />
          <SocialIcon className="social-icons" url="https://www.linkedin.com/company/urban-array/" target="_blank" />
          <SocialIcon className="social-icons" url="https://www.youtube.com/channel/UCicgBg_6lVqWBgqkur2S9vg" target="_blank" />
        </div>

      </div>

    )
  }
}