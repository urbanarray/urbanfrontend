/**
 *
 * YourRole
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
import makeSelectYourRole from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class YourRole extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderYourRoles = () => {
    if (this.props.yourrole.yourRoles) {
      return this.props.yourrole.yourRoles.map((roles) => {
        return (
          <div className="roles-box" key={Math.random()} >

            <div className="row ">

              <div className="col-md-8 col-sm-12 col-12 ">
                <p> {roles.role} </p>
                <p> {roles.address} </p>
              </div>


              <div className="col-md-4 col-sm-12 col-12">
                <p> {roles.date} </p>
                <p> {roles.startTime + ' - ' + roles.endTime} </p>
              </div>


            </div>


          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="inner-body">
        <Helmet>
          <title>Your Roles</title>
          <meta name="description" content="Description of Your Roles" />
        </Helmet>

        <div className="box">
          <div className="box-header">

            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
                <p className="heading">
                  your roles
                </p>
              </div>

            </div>

          </div>

          <div className="box-body">
            {this.renderYourRoles()}
          </div>

        </div>
      </div>
    );
  }
}

YourRole.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  yourrole: makeSelectYourRole(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'yourRole', reducer });
const withSaga = injectSaga({ key: 'yourRole', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(YourRole);
