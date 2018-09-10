import React, { Component } from 'react';

// redux stuff
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSelectSkills from './selectors';
import reducer from './reducer';
import saga from './saga';
import axios from 'axios';
import { submitSkillsAction } from './actions';


import { Button, Col, Row, DropdownButton, MenuItem } from 'react-bootstrap';
import { styles, headings, logo, cards, buttons } from 'assets/styles/variables';
import '../OnboardingStyles.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import ProgressBar from '../ProgressBar';

import colorlogo from 'assets/img/colorlogo.png';
// import search from 'assets/img/search.png';

export default class SelectSkills extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCategory: "",
      constructionSkills: ["Painting", "Sanding", "HVAC", "Electrical", "Carpentry", "Plumbing", "Roofing"],
      want: [],
      have: [],
      currentStep: 2
    }
  }

  // component did mount

  searchSkills = (e) => {
    e.preventDefault();
    // search function here.
  }

  selectCategory = (e) => {
    e.preventDefault();
    let selected = e.currentTarget.text;
    this.setState({
      selectedCategory: selected
    })
    // this component should also trigger the toggle class effect to indicate that this has been selected
    // or, potentially, this should go into its own function
  }

  renderDropdownButton = (i) => {

    return (
      <DropdownButton
        title={this.state.selectedCategory === "" ? "Selected Skills" : this.state.selectedCategory }
        key={i}
        id={`dropdown-basic=${i}`}
        style={{marginTop: '5vh'}}
      >
        <MenuItem onClick={this.selectCategory} eventKey="0">Selected Skills</MenuItem>
        <MenuItem onClick={this.selectCategory} eventKey="1">Construction</MenuItem>
        <MenuItem onClick={this.selectCategory} eventKey="2">Activism</MenuItem>
        <MenuItem onClick={this.selectCategory} eventKey="3">Development</MenuItem>
        <MenuItem onClick={this.selectCategory} eventKey="4">Art and Design</MenuItem>
        <MenuItem onClick={this.selectCategory} eventKey="5">Project Management</MenuItem>
        <MenuItem onClick={this.selectCategory} eventKey="6">Gardening and Farming</MenuItem>
      </DropdownButton>
    );
  }

  wantClick = (e) => {
    e.preventDefault();
    const skill = e.currentTarget.id;
    if (skill !== "Selected Skills") {
      this.setState({
        want: [...this.state.want, skill]
      })
    }
  }

  haveClick = (e) => {
    e.preventDefault();
    const skill = e.currentTarget.id;
    if (skill !== "Selected Skills") {
      this.setState({
        have: [...this.state.have, skill]
      })
    }
  }

  renderSkills = () => {
    if (this.state.selectedCategory === "Construction") {
      // get the skills from that category from the back end

      // using html code for heart and checkmark symbols being displayed
      // codes pulled from http://graphemica.com

      // TO DO: make a media query for less than 990 px width or so to fix display here
      return this.state.constructionSkills.map((skill, i) => {
        return (
          <div style={{border: '1px solid black'}} className="skill-card" key={i}>
            <h3 className="card-headline">{skill}</h3>
            <button onClick={this.wantClick} id={skill} className="skill-button skill-button-left want-border">&hearts; Want</button>
            <button onClick={this.haveClick} className="skill-button skill-button-right have-border">&#10004; Have</button>
          </div>
        )
      })
    }
    // add conditions to render other skill categories here
  }

  handleSubmit = async () => {
    console.log('handle submit clicked')
    const wants = this.state.want
    const haves = this.state.have
    const submittedSkills = await fetch('http://mvp.urbanarray.org:3000/v1/skill/create', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        wants: wants,
        haves: haves
      })
    });
    console.log(submittedSkills, 'this is submittedSkills')
    const submittedSkillsParsed = await submitSkills.json();
    // this.props.submitSkills({
    //   wants,
    //   haves
    // })
    // axios.post('http://mvp.urbanarray.org:3000/v1/skill/create', {
    //   wants: wants,
    //   haves: haves
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  }

  render() {
    // console.log(this.state, 'state from select skills component')
    // console.log(this.props, 'here are the props from the select skills component')
    return (
      <div>

        <img src={colorlogo} style={logo.onboardingLogoSmall}/>
        <br/>
        <ProgressBar currentStep={this.state.currentStep} />
        <div>
          <div className="center">
            <h1 className="card-headline">Urban Array is all about skills</h1>
            <h3 className="card-text">Tell us the skills you have and the skills you want to learn, and we'll help you reach your goals.</h3>
          </div>

          <br/>

          <div className="center">
            {/* <h4 className="card-headline">Search or select a category to get started</h4>
            <div className="center">
                {/* <input className="search-field" onClick={this.searchSkills} placeholder="Search other skills here."></input> */}
                { /* <img src={search} alt="Search Icon" /> */ }
            {/* </div> */}
            <h4 className="card-headline">Select a category to get started</h4>
            {this.renderDropdownButton()}
            <div className="skill-card-holder">
              {this.renderSkills()}
            </div>

            <Link
              to="/interview-member"
              type="button"
              className="three-step-nav"
              onClick={this.handleSubmit}
              style={buttons.lightButton}>Submit Skills
            </Link>

          </div>
          <h4 className="center" style={{marginTop: "3vh"}}>Don't see your skills?</h4>

          <div className="three-step-nav-container">
            <Link
              to="/get-involved"
              type="button"
              className="three-step-nav"
              style={buttons.onboardingButton}>Back
            </Link>
            <Link
              to="/interview-member"
              type="button"
              className="three-step-nav"
              style={buttons.greenButton}>Skip for now
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

// SelectSkills.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = createStructuredSelector({
//   selectedSkills: makeSelectSelectSkills(),
// });
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//     submitSkills: (payload) => dispatch(submitSkillsAction(payload)),
//   };
// }
//
// const withConnect = connect(mapStateToProps, mapDispatchToProps);
//
// const withReducer = injectReducer({ key: 'submitSkills', reducer });
// const withSaga = injectSaga({ key: 'submitSkills', saga });
//
// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(SelectSkills);
