/**
 *
 * ProjectRoles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProjectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ProjectRoles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Project Roles</title>
          <meta name="description" content="Description of ProjectRoles" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ProjectRoles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectroles: makeSelectProjectRoles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'projectRoles', reducer });
const withSaga = injectSaga({ key: 'projectRoles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectRoles);
