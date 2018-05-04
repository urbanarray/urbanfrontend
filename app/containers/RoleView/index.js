/**
 *
 * RoleView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoleView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import RoleDisplay from './RoleDisplay';

export class RoleView extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

  
  renderTasks = () => {
    if (this.props.roleview.tasks && this.props.roleview.tasks.length) {
      return this.props.roleview.tasks.map((task) => {
        return (
          <tr key={Math.random()} >
            <td> {task.title} </td>
            <td> {task.description} </td>
            <td>{task.date+' '+task.startTime+' '+task.endTime} </td>
            <td>
              <Button className="btn btn-sm btn-primary" style={{marginRight: '10px'}} > Details </Button>
              <Button className="btn btn-sm btn-success" style={{marginRight: '10px'}} > Resources </Button>
            </td>
          
          </tr>
        );
      });
    }
  }

  renderResources = () => {
    if (this.props.roleview.resources && this.props.roleview.resources.length) {
      return this.props.roleview.resources.map((resource) => {
        return (
          <tr key={Math.random()}>
            <td>
              {resource} 
            </td>

            <td>
              <Button className="btn btn-primary btn-xs " style={{ marginLeft: '30px' }} > Details </Button>            
            </td>

          </tr>
      
        );
      });
    }
  }

  renderSimilarRoles = () => {
    if (this.props.roleview.similarRoles && this.props.roleview.similarRoles.length > 0) {
        return this.props.roleview.similarRoles.map((similarRole) => {
          return (
            <tr key={Math.random()} >
              <td> {similarRole.role} </td>
              <td> {similarRole.description} </td>
        
              <td> {similarRole.date+' '+similarRole.startTime + ' ' + similarRole.endTime} </td>

              <td className="col-md-3">
                <Button className="btn btn-sm btn-primary" > Claim </Button>
              </td>

            </tr>
          );
        });
    }
  }

  
  render() {
    return (
      <ContentWrapper>
          <h3>Role View
          <small>

          </small>
          </h3>
        <Row>
            
          <Helmet>
            <title>RoleView</title>
            <meta name="description" content="Description of RoleView" />
          </Helmet>
          
          <RoleDisplay {...this.props}/>

        </Row>

        <Row>
          <Col md={8}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Tasks
              </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description </th>
                      <th>Date/Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderTasks()}
                  </tbody>
                </Table>
                { /* END table-responsive */}
               
              <div className="panel-footer">
                <div className="text-right">
                  <Link to="#" >View All</Link>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Resources/Tools Needed
              </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Resource</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderResources()}
                  </tbody>
                </Table>
                { /* END table-responsive */}

              <div className="panel-footer">
                <div className="text-right">
                  <Link to="#" >View All</Link>
                </div>
              </div>

            </div>
          </Col>
          
        </Row>
        
        <Row>
          <Col md={8}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Similar Roles
              </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Description</th>
                      <th>Date/Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderSimilarRoles()}
                  </tbody>
                </Table>
                { /* END table-responsive */}

              <div className="panel-footer">
                <div className="text-right">
                  <Link to="#" >View All</Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>


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
