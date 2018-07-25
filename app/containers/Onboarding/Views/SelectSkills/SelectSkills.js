import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { styles, headings } from 'assets/styles/variables';

// urban array logo
import logo from 'assets/img/logo.png';

export default class SelectSkills extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

      // 3 step graphic here

      <div>
        { /* <img src={logo} alt="Urban Array logo" /> */}

        <h1>Urban Array is all about skills</h1>
        <h3>Tell us the skills you have and the skills you want to learn and we'll help you reach your goals.</h3>

        <form type="text" placeholder="Search other skills here.">
          <button>Magnifying glass icon</button>
        </form>

        <h4>Filters</h4>
        <button>Construction</button>
        <button>Activism</button>
        <button>Design</button>

        <div>
          <a href="#">Back</a>
          <p>Don't see your skills? <a href="#">Skip for now.</a> </p>
          <button>Next</button>
        </div>

      </div>

    )
  }
}