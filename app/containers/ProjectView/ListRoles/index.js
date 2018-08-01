/**
 *
 * ListRoles
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import RolesDisplay from './RolesDisplay';

export class ListRoles extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentWrapper>
        <Helmet>
          <title>ListRoles</title>
          <meta name="description" content="Description of ListRoles" />
        </Helmet>
        <h3>TeamDisplay
          <small>List of TeamDisplay</small>
        </h3>
      </ContentWrapper>
    );
  }
}

ListRoles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listroles: makeSelectListRoles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listRoles', reducer });
const withSaga = injectSaga({ key: 'listRoles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListRoles);
