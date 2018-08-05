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
import { Row, Col, Panel, Button, Modal } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import ProjectDetails from './ProjectDetails';
import LocationDisplay from './LocationDisplay';
import ProjectTime from './ProjectTime';
import TeamDisplay from './ListTeamDisplay/TeamDisplay';
import RolesDisplay from './ListRoles/RolesDisplay';
import TimelineRoles from './TimelineRoles';
import { viewProject } from './actions';
import AddCommunications from './ListCommunications/AddCommunications';
import AddExecution from './ListExecution/AddExecution';
import HealthSafety from './ListHealthSafety/HealthSafety';
import Documentation from './Documentation';
import Resources from './Resources';
import { styles, headings } from 'assets/styles/variables';
import './ProjectView.css';

export class ProjectView extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 1,
      width: 0,
      //Modal booleans
      showCom: false,
      showHealth: false,
      showExec: false,
      showDoc: false
    };

  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.props.viewProjects(this.props.match.params.id);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // copied this from the Dashboard component. eventually should be moved into redux
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth })
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

  renderProjectDetails = () => {
    if (this.props.projectview.projectDetail) {
          return <ProjectDetails projectId={this.props.match.params.id} projectDetail = {this.props.projectview.projectDetail} />
    }
  }

  // Modal handlers
  handleCom = () => {
    this.setState({showCom: !this.state.showCom})
  }

  handleHealth = () => {
    this.setState({showHealth: !this.state.showHealth})
  }

  handleExec = () => {
    this.setState({showExec: !this.state.showExec})
  }

  handleDoc = () => {
    this.setState({showDoc: !this.state.showDoc})
  }


  // handleModal = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = event.target;
  //   console.log(event)
  //   console.log(name) // showCom
  //   console.log(value)
  //   console.log(typeof value) //string
  //   let newState;
  //   if (value == "true"){
  //     newState = (value == "true")
  //   } else {
  //     newState = (value == "false")
  //   }
  //   // Updating the input's state
  //   console.log(`newState - ${newState}`)
  //   this.setState({
  //     [name]: newState
  //   });
  //   console.log(`after name - ${this.state.showCom}`)
  // };



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
          <Col md={12}>
            <Resources
              projectId={this.props.match.params.id} resources={this.props.projectview.projectResources} windowWidth={this.state.width}
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <RolesDisplay roles={this.props.projectview.projectRoles} windowWidth={this.state.width}/>
          </Col>
          <Col md={6}>
            <TimelineRoles />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
          <div id="projectview_btn_container">
          {this.state.showCom}
            <Button bsStyle="primary" 
                    bsSize="large" 
                    id="modal_button" 
                    name="showCom" 
                    value={!this.state.showCom}
                    onClick={this.handleCom}>
              Communications
            </Button>
         
            <Modal show={this.state.showCom} 
                    name="showCom" 
                    onHide={this.handleCom}>
              <AddCommunications
                projectId={this.props.match.params.id}
              />
            </Modal>

            <Button bsStyle="primary" bsSize="large" id="modal_button" onClick={this.handleHealth}>
              Health & Safety
            </Button>

            <Modal show={this.state.showHealth} onHide={this.handleHealth}>
                <HealthSafety
                  projectId={this.props.match.params.id}
                />
            </Modal>

            <Button bsStyle="primary" bsSize="large" id="modal_button" onClick={this.handleExec}>
              Execution
            </Button>

            <Modal show={this.state.showExec} onHide={this.handleExec}>
              <AddExecution
                projectId={this.props.match.params.id}
              />
            </Modal>

            <Button bsStyle="primary" bsSize="large" id="modal_button" onClick={this.handleDoc}>
              Documentation
            </Button>

            <Modal show={this.state.showDoc} onHide={this.handleDoc}>
              <Documentation
                projectId={this.props.match.params.id}
              />
            </Modal>
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
