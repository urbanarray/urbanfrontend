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
                
              <iframe width="854" height="480" src="https://www.youtube.com/embed/U5n_FxGmcH8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true"></iframe>

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
