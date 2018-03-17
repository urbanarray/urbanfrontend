
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { isLogin } from 'containers/App/selectors';
import { Redirect } from 'react-router-dom';

export class Auth extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.isLogin !== true) {
      return (
        <Redirect to="/login" />
      );
    }
    return null;
  }

}

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  isLogin: isLogin()
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Auth);