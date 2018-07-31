import React, { Component } from 'react';

import { Button, Col, Row, DropdownButton, MenuItem } from 'react-bootstrap';
import { styles, headings, logo, cards } from 'assets/styles/variables';
import '../OnboardingStyles.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import colorLogo from 'assets/img/colorLogo.png';
// import search from 'assets/img/search.png';

export default class SelectSkills extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCategory: "",
      constructionSkills: ["Painting", "Sanding", "HVAC", "Electrical", "Carpentry", "Plumbing", "Roofing"],
      want: [],
      have: []
    }
  }

  searchSkills = (e) => {
    e.preventDefault();
    // search function here.
  }

  selectCategory = (e) => {
    e.preventDefault();
    let selected = e.currentTarget.text
    this.setState({
      selectedCategory: selected
    })
    // this component should also trigger the toggle class effect to indicate that this has been selected
    // or, potentially, this should go into its own function
  }

  renderDropdownButton = (i) => {
    // TODO - get the dropdown text to change once a skill category has been selected
    // const title = () => {
    //   if (this.state.selectedCategory) {
    //     return this.state.selectedCategory
    //   } else {
    //     return "Select Skill"
    //   }
    // }
    return (
      <DropdownButton
        title="Select Skills"
        key={i}
        id={`dropdown-basic=${i}`}
        style={{marginTop: '5vh'}}
      >
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
    const skill = e.currentTarget.id
    this.setState({
      want: [...this.state.want, skill]
    })
    console.log(e.currentTarget.id)
  }

  renderSkills = () => {
    if (this.state.selectedCategory != "") {
      // get the skills from that category from the back end
      return this.state.constructionSkills.map((skill, i) => {
        return (
          <div className="skill-card" key={i}>
            <h3 className="card-headline">{skill}</h3>
            <button onClick={this.wantClick} id={skill} className="skill-button skill-button-left">Want</button>
            <button className="skill-button skill-button-right">Have</button>
          </div>
        )
      })
    }
  }

  render() {
    console.log(this.state, 'this is state')
    return (
      <div>

        <img src={colorLogo} style={logo.onboardingLogo}/>

        <div>
          <div className="center">
            <h1 className="card-headline">Urban Array is all about skills</h1>
            <h3 className="card-text">Tell us the skills you have and the skills you want to learn, and we'll help you reach your goals.</h3>
          </div>

          <br/>

          <div className="center">
            <h4 className="card-headline">Search or select a category to get started</h4>
            <div className="center">
                <input className="search-field" onClick={this.searchSkills} placeholder="Search other skills here."></input>
                { /* <img src={search} alt="Search Icon" /> */ }
            </div>

            {this.renderDropdownButton()}
            <div className="skill-card-holder">
              {this.renderSkills()}
            </div>

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
