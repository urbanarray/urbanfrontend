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
import {Button} from 'reactstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import ContentWrapper from 'components/Layout/ContentWrapper';

export class ProjectView extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1
    };
  }

  componentDidMount() {
    PanelsRun();
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
                <img style={{width:'40px', height:'40px', borderRadius:'50%' }} src={Avatar} />
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
            <div key={Math.random()} className="roles-box">

              <div className="row">
                <div className="col-md-9 col-sm-12 ">
                  <p> {roles.title} </p>
                </div>
                <div className="col-md-3 col-sm-12 ">
                  <Button className="btn btn-primary btn-sm" color="default" >Claim</Button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <p> {roles.description} </p>
                </div>
              </div>

              <div className="row ">

                <div className="col-md-5 col-sm-12  ">
                  <p> {roles.frame} </p>
                  <p> {roles.role} </p>
                </div>


                <div className="col-md-4 col-sm-12 ">
                  <p> {roles.date} </p>
                  <p> {roles.startTime + ' - ' + roles.endTime} </p>
                </div>

                <div className="col-md-3 col-sm-12 ">
                  <p> PTS:  {roles.pts} </p>
                  <p> AC:  {roles.ac} </p>
                </div>

              </div>
            </div>
          );
        });
    }  
    
  }


  renderProjectResources = () => {
    if (this.props.projectview.projectResources) {
      return this.props.projectview.projectResources.map((resource) => {
        return (
          <div className="roles-box" key={Math.random()} >
            
            <div className="row ">

              <div className="col-md-8 col-sm-8  ">
                <p> {resource.name} </p>
                <p> Qty: {resource.quantity} </p>
                <p> Size: {resource.size} </p>
                {/* <p> Project: {resource.project} </p> */}
              </div>


              <div className="col-md-4 col-sm-4 ">

                <p> {resource.date} </p>
                <p> {resource.startTime + ' - ' + resource.endTime} </p>

                <button type="button" className="btn btn-primary btn-xs"  > Pledge </button>


              </div>

            </div>
          </div>
        );
      });
    }
  }


  render() {
    return (
      <ContentWrapper>
        <Row>

          <Helmet>
            <title>Project View</title>
            <meta name="description" content="Description of ProjectView" />
          </Helmet>

          <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Project: {(this.props.projectview.projectView.name.toUpperCase())}
              </div>

              <div className="panel-body">
                <div className="row">

                  <div className="col-md-4 offset-md-1">
                    <p> Time: {this.props.projectview.projectView.startTime + ' ' + this.props.projectview.projectView.endTime} </p>
                    <p> Date: {this.props.projectview.projectView.date} </p>
                  </div>

                  <div className="col-md-7 ">
                    <p> Address: {this.props.projectview.projectView.address} </p>
                    <p> weather: {this.props.projectview.projectView.weather} </p>
                  </div>

                </div>
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>

        </Row>
        
        <Row>
          <Col md={8}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Project Details
              </div>

              <div className="panel-body">
               
                  <p>Description: {(this.props.projectview.projectView.description)} </p>
                  <p>Goals: {(this.props.projectview.projectView.goals)} </p>
                  <p> Project Details </p>
                  <p>Execution: {this.props.projectview.projectView.projectDetails.execution} </p>
                  <p>Aux Groups: {this.props.projectview.projectView.projectDetails.communication} </p>
                
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>

          <Col md={4}>
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
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>
        </Row>



        <Row>
          <Col md={8}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                   Roles
              </div>

              <div className="panel-body">
                {this.renderRoles()}
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>

          <Col md={4}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                    Resources
              </div>

              <div className="panel-body">
                {this.renderProjectResources()}                
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
