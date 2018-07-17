/**
 *
 * ProjectView
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProjectView from './selectors';
import reducer from './reducer';
import saga from './saga';
import Avatar from '../../../assets/images/avatar.jpg'; // can't start import path with assets here since this file isn't in app directory
import ContentWrapper from 'components/Layout/ContentWrapper';
import { Row, Col } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import ProjectDetails from './ProjectDetails';
import LocationDisplay from './LocationDisplay';
import ProjectTime from './ProjectTime';
import TeamDisplay from './TeamDisplay';
import RolesDisplay from './RolesDisplay';
import TimelineRoles from './TimelineRoles';
import { styles } from 'assets/styles/variables';
import { viewProject } from './actions';
import AddCommunications from '../AddCommunications';
import AddExecution from '../AddExecution';
import HealthSafety from '../HealthSafety';
import Documentation from '../Documentation';
import Resources from '../Resources';

export class ProjectView extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1
    };
  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
    this.props.viewProjects(this.props.match.params.id);
  }

  handleSelect(key) {
    this.setState({
      key
    });
  }


  renderLeadership = () => {

    if (this.props.projectview.leadership && this.props.projectview.leadership.length > 0) {
        return this.props.projectview.leadership.map((leadership) => {
          return(
            <div key={Math.random()} className="col-md-4">
                {/* I'd like better icons so we don't have to have a negative margin */}
                <img style={{width:'50px', height:'50px', borderRadius:'50%', marginLeft: '-6px' }} src={Avatar} />
                <span>{leadership.firstName}</span>
                <div>{leadership.role}</div>
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
              {/* I'd like better icons so we don't have to have a negative margin */}
              <img style={{width:'50px', height:'50px', borderRadius:'50%', marginLeft: '-6px' }} src={Avatar} />
              <span>{team.firstName}</span>
              <div>{team.role}</div>
            </div>
          )
        });
    }
  }

  functionDisplay = () => {
    if(this.props.projectview && this.props.projectview.projectDetail && this.props.projectview.projectDetail.place) {

      return (
        <LocationDisplay location={this.props.projectview.projectDetail.place} />

      )
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
                {roles.date}<br />
                {`${roles.startTime} - ${roles.endTime}`}
              </td>
              <td>
                {roles.pts}
              </td>
              <td>
                {roles.ac}
              </td>
              <td>
                <Link
                  to="/roleView"
                  type="button"
                  className="btn btn-primary btn-sm btn-block"
                  color="default"
                  style={styles.primaryLight}>Details
                </Link>
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
              {resource.locationNeeded}
            </td>
            <td>
              {resource.date}<br />
              {`${resource.startTime} - ${resource.endTime}`}
            </td>
            <td>
              {/* <button type="button" className="btn btn-primary btn-block btn-sm"  > Pledge </button> */}
              <Link
                to="/projectView"
                type="button"
                className="btn btn-success btn-block btn-sm"
                style={styles.primaryLight}>Details/Claim
              </Link>
            </td>

          </tr>
        );
      });
    }
  }

  renderProjectDetails = () => {
    if (this.props.projectview.projectDetail) {
          return <ProjectDetails projectId={this.props.match.params.id} projectDetail = {this.props.projectview.projectDetail} />
    }
  }

  render() {
    return (
      <ContentWrapper>
          <Helmet>
            <title>Project View</title>
            <meta name="description" content="Description of ProjectView" />
          </Helmet>
          <h3>{(this.props.projectview && this.props.projectview.projectDetail)? this.props.projectview.projectDetail.name : ''}

            <small>
              Project Details
            </small>

          </h3>

        <Row>
          {this.renderProjectDetails()}

          <Col md={6}>
           <Row>
              {this.functionDisplay()}
              <ProjectTime {...this.props} />
           </Row>

           <TeamDisplay renderLeadership={this.renderLeadership} renderTeam={this.renderTeam} {...this.props}/>

          </Col>

        </Row>

        <Row>
          <hr />
          <Col md={12}>
            <AddCommunications
              projectId={this.props.match.params.id}
            />

          </Col>


          <Col md={12}>
            <HealthSafety

              projectId={this.props.match.params.id}

            />

          </Col>
          <Col md={6}>
            <AddExecution

              projectId={this.props.match.params.id}

            />
          </Col>

          <Col md={6}>
            <Documentation

              projectId={this.props.match.params.id}

            />
          </Col>
          <Col md={12}>
            <Resources
              projectId={this.props.match.params.id}
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <RolesDisplay renderRoles={this.renderRoles} {...this.props}/>
          </Col>
          <Col md={6}>
            <TimelineRoles />
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
  projectview: makeSelectProjectView()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    viewProjects : (id) => dispatch(viewProject(id)),
    listCommunication : (id) => dispatch(listCommunication(id))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'projectView', reducer });
const withSaga = injectSaga({ key: 'projectView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProjectView);
