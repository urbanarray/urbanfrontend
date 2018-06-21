/**
 *
 * Landing
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Button} from 'reactstrap';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const LandingWraper = styled.div`
  position: absolute;
  width: 100% !important;
  height: 100% !important;
  color:white;

  .container{
    padding : 50px;
  }

  .padding_20{
    padding: 20px;
  }

  .margin_10{
    margin: 10px;
  }


  `;



export class Landing extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
  render() {
 
    return (
      <LandingWraper>
        <div className= 'container text-center' >
            <div className= 'row' >
              <div className= 'col-md-12' >
              <h1 style={{color: 'black'}}>Welcome to the Urban Array MVP Demo App.</h1>
              <h3 style={{color: 'black'}}>This website is for testing and design purposes only.  THIS IS NOT A LIVE SITE.  Your data will NOT be saved.</h3>
              <h3 style={{color: 'black'}}>Please Enter your Invitation PASSPHRASE to the right to begin.</h3>
              <p style={{color: 'black'}}>For more info about Urban Array, <a href="https://urbanarray.org/">please click here to visit our website</a></p>
              </div>
            </div>
        </div>

      </LandingWraper>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Landing);
