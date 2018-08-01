/**
 *
 * RoleView
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoleView from './selectors';
import reducer from './reducer';
import saga from './saga';
import ContentWrapper from 'components/Layout/ContentWrapper';
import { Row } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import RoleDisplay from './RoleDisplay';
import TasksDisplay from './TasksDisplay';
import ResourcesNeeded from './ResourcesNeeded';
import SimilarRoles from './SimilarRoles';


export class RoleView extends Component { // eslint-disable-line react/prefer-stateless-function

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
    this.setState({
      key
    });

  }


  render() {
    return (
      <ContentWrapper>
        <h3>Role View</h3>
        <Row>

          <Helmet>
            <title>RoleView</title>
            <meta name="description" content="Description of RoleView" />
          </Helmet>

          <RoleDisplay {...this.props} windowWidth={this.state.width} />

        </Row>

        <Row>
          <TasksDisplay tasks={this.props.roleview.tasks} windowWidth={this.state.width} />
          <ResourcesNeeded resources={this.props.roleview.resources} windowWidth={this.state.width} />
        </Row>

        <SimilarRoles similarRoles={this.props.roleview.similarRoles} windowWidth={this.state.width} />


      </ContentWrapper>
    );
  }
}

RoleView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  roleview: makeSelectRoleView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'roleView', reducer });
const withSaga = injectSaga({ key: 'roleView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RoleView);
