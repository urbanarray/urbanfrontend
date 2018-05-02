/**
 *
 * Dashboard
 *
 */

import React from 'react';
import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col } from 'react-bootstrap';

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
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import Clock from './Clock';
import HoursWorked from './HoursWorked';
import PointsDisplay from './PointsDisplay';
import CoinDisplay from './CoinDisplay';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1
    };
  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  handleSelect(key) {
    console.log('Tab selected ' + key);
    this.setState({
      key
    });
  }

  render() {
    return (
      <ContentWrapper>
        <Helmet>
          <title>DASHBOARD</title>
          <meta name="description" content="Description of Dashboard" />
        </Helmet>

        <h3>DASHBOARD
          <small>

          </small>

        </h3>

        <Grid fluid>

          { /* START widgets box */}
          <Row>
            <HoursWorked />
            <PointsDisplay />
            <CoinDisplay />
            <Clock />
          </Row>
          { /* END widgets box */}
          
          <Row>
            
            <Col md={8}>
              <Roles />
            </Col>
    
            
            <Col md={4}>
              <YourRole />
            </Col>
    
          </Row>

          <Row>

            <Col md={8}>
              <NeededResources />
            </Col>


            <Col md={4}>
              <PledgedResources />
            </Col>

          </Row>

          { /* END row */}
          
        </Grid>

      </ContentWrapper>
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
