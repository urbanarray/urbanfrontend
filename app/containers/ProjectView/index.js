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
import PanelsRun from 'components/Elements/Panels.run';
import ProjectDetails from './ProjectDetails';
import LocationDisplay from './LocationDisplay';
import ProjectTime from './ProjectTime';
import TeamDisplay from './TeamDisplay';
import RolesDisplay from './RolesDisplay';
import ResourcesDisplay from './ResourcesDisplay';
import TimelineRoles from './TimelineRoles';
import {styles} from '../../assets/styles/variables';

export class ProjectView extends React.Component { // eslint-disable-line react/prefer-stateless-function

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


  renderLeadership = () => {
    
    if (this.props.projectview.leadership && this.props.projectview.leadership.length > 0) {      
        return this.props.projectview.leadership.map((leadership) => {
          return(
            <div key={Math.random()} className="col-md-4">
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
                  style={styles.primary}>Details
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
                style={styles.primary}>Details/Claim 
              </Link>
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
          <ProjectDetails renderProjectGoals={this.renderProjectGoals} {...this.props} />
          
          <Col md={6}>
           <Row>
              <LocationDisplay {...this.props}/>
              <ProjectTime {...this.props} />
           </Row>
           
           <TeamDisplay renderLeadership={this.renderLeadership} renderTeam={this.renderTeam} {...this.props}/>
          
          </Col>

        </Row>

        <Row>
          <RolesDisplay renderRoles={this.renderRoles} {...this.props}/>
          <ResourcesDisplay renderProjectResources={this.renderProjectResources} {...this.props}/>
        </Row>

        <TimelineRoles />

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
