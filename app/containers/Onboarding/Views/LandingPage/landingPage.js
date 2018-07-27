import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';
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
        <header style={{textAlign: 'center'}}>
          <img src={colorLogo} style={logo.landingPageLogo}/>
          <div style={{display: 'inline', float: 'right', paddingRight: '2vw', marginTop: '5vh'}}>
            <a href="https://urbanarray.org/donate/" target="_blank"><button className="btn" style={{marginRight: '1vw'}, styles.primary} >Donate</button></a>
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
        </header>

        <Row style={{textAlign: 'center'}}>
          <h1> Welcome to Urban Array's Volunteer Platform </h1>
          <h3 style={{marginBottom: '10vh'}}> Build yourself, grow your community </h3>

          <iframe width="784" height="441" src="https://www.youtube.com/embed/k15z2UuCnDQ" frameBorder="0" allowFullScreen></iframe>
        </Row>

        <h3 style={headings.landingPageHeading}> Current Projects </h3>

        <div style={{textAlign: 'center', width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-around'}}>


          <div style={{width: '35vw', height: '30vh', border: '1px solid black', backgroundColor: 'white', display: 'flex', borderRadius: '15px'}}>
            <div style={{width: '35%', height: '100%', border: '1px solid black', display: 'inline', borderRadius: '15px 0 0 15px'}}>Image Placeholder</div>
            <div style={{width: '65%'}}>
              <h4 style={{marginTop: '3vh'}}> Housing Project on 63rd </h4>
              <p style={{textAlign: 'left', paddingLeft: '1vw', paddingRight: '1vw'}}> Urban Array is working on renovating a block of buildings in the beautiful, historic neighborhood of Englewood. Members are encouraged to come and help out! </p> <br />
              <a style={{textAlign: 'right', float: 'right', marginRight: '1vw'}}> Learn More </a>
            </div>
          </div>
          <div style={{width: '35vw', height: '30vh', border: '1px solid black', backgroundColor: 'white', display: 'flex', borderRadius: '15px'}}>
            <div style={{width: '35%', height: '100%', border: '1px solid black', display: 'inline', borderRadius: '15px 0 0 15px'}}>Image Placeholder</div>
              <div style={{width: '65%'}}>
                <h4 style={{marginTop: '3vh'}}> Urban Garden on 97th </h4>
                <p style={{textAlign: 'left', paddingLeft: '1vw', paddingRight: '1vw'}}> Community members broke soil at the beginning of June. Local community members will enjoy kale, tomatoes, beets, and potatoes at the end of the summer. Spare hands welcome.</p>
                <a style={{textAlign: 'right', float: 'right', marginRight: '1vw'}}> Learn More </a>
              </div>
            </div>
          </div>



        <a href="/get-involved"><button className="btn" style={{marginTop: '5vh', marginLeft: '45%', marginRight: '45%', backgroundColor: '#4a99cb', color: 'white'}}> Get Involved </button></a>


        <h3 style={headings.landingPageHeading}> Our Mission </h3>
        <a style={{float: 'right', marginTop: '-8vh', marginRight: '10vw'}}> Learn More </a>

        <div style={{display: 'flex', justifyContent: 'space-around', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          <div style={cards.greenCard}>
            <h4 style={{textAlign: 'center', marginTop: '3vh'}}> Education, Training, and Information</h4>
            <p style={{paddingLeft: '2vw', paddingRight: '2vw'}}>Urban Array provides skills building and hands-on training for members.</p>
          </div>
          <div style={cards.greenCard}>
            <h4 style={{textAlign: 'center', marginTop: '3vh'}}> Member's Economic Participation</h4>
            <p style={{paddingLeft: '2vw', paddingRight: '2vw'}}> Members participation is key. The benefits match the amount of effort.</p>
          </div>
          <div style={cards.greenCard}>
            <h4 style={{textAlign: 'center', marginTop: '3vh'}}> Concern for Community </h4>
            <p style={{paddingLeft: '2vw', paddingRight: '2vw'}}> Members help make decisions on sustainable development in their own community.</p>
          </div>
        </div>

        <div style={{marginTop: '10vh', backgroundColor: '#80cafe', width: '90%', borderRadius: '15px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', paddingTop: '3vh', paddingBottom: '3vh', fontWeight: 'bold', fontSize: '1.3em'}}>
          Follow us and check out what's happening in your community: &nbsp; <SocialIcon url="https://www.facebook.com/urbanarray/"/>
          <SocialIcon url="https://twitter.com/urbanarray"/>
          <SocialIcon url="https://www.instagram.com/urbanarray/" />
          <SocialIcon url="https://www.linkedin.com/company/urban-array/" />
          <SocialIcon url="https://www.youtube.com/channel/UCicgBg_6lVqWBgqkur2S9vg" />

        </div>

        <footer style={{marginLeft: '2vw', marginBottom: '1vh', marginTop: '5vh'}}> 	&copy; 2018 Urban Array </footer>
      </div>
    )
  }
}
