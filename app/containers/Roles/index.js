/**
 *
 * Roles
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
import makeSelectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {From, Input} from 'reactstrap';
import './style.css';


export class Roles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="inner-body">
        <Helmet>
          <title>Roles</title>
          <meta name="description" content="Description of Roles" />
        </Helmet>

        <div className="box">
          <div className="box-header">
            
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <p>
                   OPEN ROLES
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-12" >
                <Input type='select' >
                  <option> value </option>
                </Input>
              </div>
              <div className="col-md-4 col-sm-6 col-12 ">
                <p>
                  Miles to Chicago
                </p>
              </div>

            </div>

          </div>

          <div className="box-body">
             <h3>Roles</h3>
          </div>

        </div>

      </div>
    );
  }
}

Roles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  roles: makeSelectRoles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'roles', reducer });
const withSaga = injectSaga({ key: 'roles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Roles);
