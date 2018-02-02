/**
 *
 * Dashboard
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
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Roles from 'containers/Roles';
import YourRole from 'containers/YourRole';
import NeededResources from 'containers/NeededResources';
import PledgedResources from 'containers/PledgedResources';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of Dashboard" />
        </Helmet>
        
        {/* ROLES */}
        <div className="container-fluid" >
         
          <div className="row" >

            <div className="col-md-12 col-lg-8">
              <Roles/>
            </div>

            <div className="col-md-12 col-lg-4">
              <YourRole/>
            </div>

          </div>
        
          {/* NEEDED RESOURCES  */}
          
          <div className="row" >

            <div className="col-md-12 col-lg-8">
              <NeededResources/>
            </div>

            <div className="col-md-12 col-lg-4">
              <PledgedResources/>
            </div>

          </div>
        
        
        </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
