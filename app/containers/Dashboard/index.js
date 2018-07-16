/**
 *
 * Dashboard
 *
 */

import React, { Component } from 'react';
import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

import Roles from './Roles';
import YourRole from './YourRole';
import NeededResources from './NeededResources';
import PledgedResources from './PledgedResources';
import { Clock, HoursWorked, PointsDisplay, CoinDisplay } from './widgets';

import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';

export class Dashboard extends Component { // eslint-disable-line react/prefer-stateless-function
 
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1,
      width: 0,
      height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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

        <h3>DASHBOARD</h3>

        <Grid fluid>

          { /* START widgets box */}
          <Row>
            <HoursWorked windowWidth={this.state.width} />
            <PointsDisplay windowWidth={this.state.width} />
            <CoinDisplay windowWidth={this.state.width} />
            <Clock windowWidth={this.state.width} />
          </Row>
          { /* END widgets box */}
          
          <Row>
            <Roles windowWidth={this.state.width} />
            <YourRole windowWidth={this.state.width} />
          </Row>

          <Row>
            <NeededResources windowWidth={this.state.width} />
            <PledgedResources windowWidth={this.state.width} />
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
