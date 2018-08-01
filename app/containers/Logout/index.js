/**
 *
 * Logout
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { logout } from 'containers/App/actions';

export class Logout extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    const logout = this.props.logout();
   this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Logout</title>
          <meta name="description" content="Description of Logout" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  logout: makeSelectLogout()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logout:() => dispatch(logout())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'logout', reducer });
const withSaga = injectSaga({ key: 'logout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Logout);
