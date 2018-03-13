/**
 *
 * ProjectView
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
import makeSelectProjectView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Avatar from '../../../assets/images/avatar.jpg';
import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';

export class ProjectView extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1
    };
  }

  componentDidMount() {
    TableExtendedRun();
  }

  handleSelect(key) {
    console.log('Tab selected ' + key);
    this.setState({
      key
    });
  }


  renderLeadership = () => {
    
    if (this.props.projectview.leadership && this.props.projectview.leadership.length > 0) {      
        return this.props.projectview.leadership.map((leadership) => {
          return(
            <div key={Math.random()} className="col-md-6">
                <img style={{width:'50px', height:'50px', borderRadius:'50%' }} src={Avatar} />
                <span> {leadership.firstName} </span>
            </div>
          ) 
        });
    }
  }
  
  renderTeam = () => {
    
    if (this.props.projectview.team && this.props.projectview.team.length > 0) {      
        return this.props.projectview.team.map((team) => {
          return(
            <div key={Math.random()} className="col-md-4">
              <img style={{width:'50px', height:'50px', borderRadius:'50%' }} src={Avatar} />
              <span> {team.firstName} </span>
            </div>
          ) 
        });
    }
  }

  renderRoles = () => {
    if (this.props.projectview.projectRoles && this.props.projectview.projectRoles.length > 0) {
      return this.props.projectview.projectRoles.map((roles) => {
          return (
            <tr key={Math.random()}>
              <td>
                {roles.title}
              </td>

              <td>
                {roles.project}
              </td>

              <td>
                {roles.date + ' ' + roles.startTime + ' - ' + roles.endTime}
              </td>
              <td>
                {roles.pts}
              </td>
              <td>
                {roles.ac}
              </td>
              <td>
                <Link to="/roleView" className="btn btn-primary btn-sm" color="default" >Details</Link>
              </td>

            </tr>
   
          );
        });
    }  
    
  }


  renderProjectResources = () => {
    if (this.props.projectview.projectResources) {
      return this.props.projectview.projectResources.map((resource) => {
        return (
          <tr key={Math.random()}>
            <td>
              {resource.name}
            </td>

            <td>
              {resource.quantity}
            </td>
            <td>
              {resource.project}
            </td>
            <td>
              {resource.locationNeeded}
            </td>
            <td>
              {resource.date + ' ' + resource.startTime + ' - ' + resource.endTime}
            </td>
            <td>
              {/* <button type="button" className="btn btn-primary btn-block btn-sm"  > Pledge </button> */}
              <Link to="/projectView" type="button" className="btn btn-success btn-block btn-sm"  > Details/Claim </Link>
            </td>

          </tr>
        );
      });
    }
  }

  renderProjectGoals = () => {
    if (this.props.projectview.projectView && this.props.projectview.projectView.goals.length > 0) {
      return this.props.projectview.projectView.goals.map((goal, index) => {
        return <li key={Math.random()} > {goal} </li>
      });
    }
  }

  render() {
    return (
      <ContentWrapper>
          <Helmet>
            <title>Project View</title>
            <meta name="description" content="Description of ProjectView" />
          </Helmet>

          <h3>{(this.props.projectview.projectView.name.toUpperCase())}
            <small>
              Project Details
            </small>
        </h3>
        
        <Row>
          <Col md={6}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Project: {(this.props.projectview.projectView.name.toUpperCase())}
              </div>

              <div className="panel-body">
                
                <div className="row">

                  <div className="col-md-12">
                    <h4>Project Description</h4>
                    <p>{this.props.projectview.projectView.description} </p>
                    <br/>
                    <br/>
                    <h4>Project Goals</h4>
                      {this.renderProjectGoals()}
                      <br />
                      <br />

                    <Row>
                      <hr/>
                      <Col md={6}>
                        <Link to="/projectView" type="button" className="btn btn-primary btn-block "  > Communication </Link>
                        <Link to="/projectView" type="button" className="btn btn-success btn-block "  > Documentation </Link>
                        
                      </Col>
                      <Col md={6}>
                        <Link to="/projectView" type="button" className="btn btn-success btn-block "  > Execution </Link>
                        <Link to="/projectView" type="button" className="btn btn-primary btn-block "  > AEO/Safe/Weath </Link>
                      </Col>
                    </Row>

                  </div>
 
                </div>
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>
          
          <Col md={6}>
           <Row>
              <Col lg={6}>
                { /* START panel */}
                <div id="panelDemo2" className="panel panel-default panel-demo">
                  <div className="panel-heading">
                    
                  </div>
                  <div className="panel-body text-center">
                    <h4>Location</h4>
                    <p>
                      {
                        this.props.projectview.projectView.address                       
                      }
                    </p>

                  </div>
                </div>
                { /* END panel */}
              </Col>
              
              <Col lg={6}>
                { /* START panel */}
                <div id="panelDemo2" className="panel panel-default panel-demo">
                  <div className="panel-heading">
                  </div>
                  <div className="panel-body text-center">
                    <h4>Date Time</h4>
                    <p>
                      {
                        this.props.projectview.projectView.date + ' ' +
                        this.props.projectview.projectView.startTime + ' ' +
                        this.props.projectview.projectView.endTime 
                      }
                    </p>


                  </div>
                </div>
                { /* END panel */}
              </Col>


           </Row>
           
           <Row>
              <Col md={12}>
                <div id="panelDemo8" className="panel panel-primary">
                  <div className="panel-heading">
                    Leadership & Team
              </div>

                  <div className="panel-body">

                    <p> Leadership</p>
                    <div className="row">
                      {this.renderLeadership()}
                    </div>
                    <hr />
                    <p> Team</p>
                    <div className="row">
                      {this.renderTeam()}
                    </div>

                  </div>
                  <div className="panel-footer">
                    <div className="text-right">
                      <Link to="#" >View All</Link>
                    </div>
                  </div>
                </div>
              </Col>
           </Row>

          </Col>

        </Row>

        <Row>
          <Col md={6}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                   Roles
              </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Project </th>
                      <th>Date/Time</th>
                      <th>PTS</th>
                      <th>AC</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderRoles()}
                    
                  </tbody>
                </Table>
                { /* END table-responsive */}
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>

          <Col md={6}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                    Resources
              </div>
              { /* START table-responsive */}
              <Table id="table-ext-2" responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity </th>
                    <th>Project</th>
                    <th>Location Needed</th>
                    <th>Date/Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderProjectResources()}                
                </tbody>
              </Table>
              { /* END table-responsive */}
  
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                    Roles on Timeline
              </div>

              <div className="panel-body">
                <p>Role 1</p>            
                <p>Role 2</p>            
                <p>Role 3</p>            
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>
        </Row>

        

      </ContentWrapper>
    );
  }
}

ProjectView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectview: makeSelectProjectView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'projectView', reducer });
const withSaga = injectSaga({ key: 'projectView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectView);
