/**
 *
 * ResendEmail
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

export class ResendEmail extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    console.log(this.props)
  }

  renderMessge = () => {
    return (
      <div className="text-center" style={{ margin: '0 auto', padding: '40px' }}>
        <p>Confirmation Email has been sent to your registered email, 
        Please go to your email and verify your account.</p>
      
        <button style={{margin: '10px'}} className="btn btn-danger" > Go Back </button>
        <button style={{margin: '10px'}} className="btn btn-success" > Resend Email </button>
        
    </div>
    
    );
  }

  render() {
    return (
      <div>
        {(this.props.match.params.id)? this.renderMessge(): ''}
      </div>
    );
  }
}

ResendEmail.propTypes = {
  dispatch: PropTypes.func.isRequired
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'resendEmail', saga });

export default compose(
  withSaga,
  withConnect
)(ResendEmail);
