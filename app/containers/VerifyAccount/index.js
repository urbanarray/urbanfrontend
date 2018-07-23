/**
 *
 * VerifyAccount
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVerifyAccount from './selectors';
import reducer from './reducer';
import saga from './saga';
import { defaultAction } from './actions';

export class VerifyAccount extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    this.props.verify(this.props.match.params.id);
  }
  
  componentDidUpdate(){
    console.log(this.props.verify)
    if (this.props.verifyaccount.isVerified === true) {
      this.props.history.push('/login');
    }  
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

VerifyAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  verifyaccount: makeSelectVerifyAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    verify : (payload) => dispatch(defaultAction(payload)) 
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'verifyAccount', reducer });
const withSaga = injectSaga({ key: 'verifyAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VerifyAccount);
