import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';
import '../OnboardingStyles.css';
import colorLogo from 'assets/img/colorLogo.png';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="center">
          <div className="nav-buttons">
            <div className="clearfix"></div>
            <a href="https://urbanarray.org/donate/" target="_blank"><button className="btn" style={styles.primary} >Donate</button></a>
            <Link
              to="/get-involved"
              type="button"
              className="btn"
              style={styles.secondary}>Get Involved
            </Link>
            <Link
              to="/signup"
              type="button"
              className="btn"
              style={styles.primaryLight}>Sign In
            </Link>
          </div>
          <br/>
          <img src={colorLogo} style={logo.landingPageLogo}/>
        </header>

        <Row className="center">
          <h1> Welcome to Urban Array's Volunteer Platform </h1>
          <h3 style={{marginBottom: '10vh'}}> Build yourself, grow your community </h3>

          <iframe width="784" height="441" src="https://www.youtube.com/embed/k15z2UuCnDQ" frameBorder="0" allowFullScreen></iframe>
        </Row>

        <h3 style={headings.landingPageHeading}> Current Projects </h3>

        <div className="center card-layout">

          <div className="project-container">
            <div className="project-image">Image Placeholder</div>
            <div className="project-text-container">
              <h4 className="project-title"> Housing Project on 63rd </h4>
              <p className="project-description"> Urban Array is working on renovating a block of buildings in the beautiful, historic neighborhood of Englewood. Members are encouraged to come and help out! </p> <br />
              <a className="learn-more-projects"> Learn More </a>
            </div>
          </div>
          <div className="project-container">
            <div className="project-image">Image Placeholder</div>
              <div className="project-text-container">
                <h4 className="project-title"> Urban Garden on 97th </h4>
                <p className="project-description"> Community members broke soil at the beginning of June. Local community members will enjoy kale, tomatoes, beets, and potatoes at the end of the summer. Spare hands welcome.</p>
                <a className="learn-more-projects"> Learn More </a>
              </div>
            </div>
          </div>



        <a href="/get-involved"><button className="btn" style={{marginTop: '5vh', marginLeft: '45%', marginRight: '45%', backgroundColor: '#4a99cb', color: 'white'}}> Get Involved </button></a>


        <h3 style={headings.landingPageHeading}> Our Mission </h3>
        <a className="learn-more-mission"> Learn More </a>

        <div className="card-layout">
          <div style={cards.greenCard}>
            <h4 className="card-headline"> Education, Training, and Information</h4>
            <p className="card-text">Urban Array provides skills building and hands-on training for members.</p>
          </div>
          <div style={cards.greenCard}>
            <h4 className="card-headline"> Member's Economic Participation</h4>
            <p className="card-text"> Members participation is key. The benefits match the amount of effort.</p>
          </div>
          <div style={cards.greenCard}>
            <h4 className="card-headline"> Concern for Community </h4>
            <p className="card-text"> Members help make decisions on sustainable development in their own community.</p>
          </div>
        </div>

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
