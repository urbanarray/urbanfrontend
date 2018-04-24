/**
 *
 * UserSkills
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
import makeSelectUserSkills from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class UserSkills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>UserSkills</title>
          <meta name="description" content="Description of UserSkills" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserSkills.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userskills: makeSelectUserSkills(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userSkills', reducer });
const withSaga = injectSaga({ key: 'userSkills', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserSkills);
