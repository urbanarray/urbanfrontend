/**
 *
 * AcceptInvitation
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
import makeSelectAcceptInvitation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { findUserAction, acceptInvitationAction } from './actions';

export class AcceptInvitation extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {

    }

  }

  componentDidMount(){
    this.props.findUser(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Accept Invitation</title>
          <meta name="description" content="Description of AcceptInvitation" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

AcceptInvitation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  acceptinvitation: makeSelectAcceptInvitation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    findUser : (payload) => dispatch(findUserAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'acceptInvitation', reducer });
const withSaga = injectSaga({ key: 'acceptInvitation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AcceptInvitation);
