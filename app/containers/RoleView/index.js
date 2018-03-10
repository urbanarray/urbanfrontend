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
import {Button} from 'reactstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import ContentWrapper from 'components/Layout/ContentWrapper';

export class RoleView extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

  
  renderTasks = () => {
    if (this.props.roleview.tasks && this.props.roleview.tasks.length) {
      return this.props.roleview.tasks.map((task) => {
        return (
          <div key={Math.random()} className="roles-box" >
            <p> {task.title} </p>
            <p> Description: {task.description} </p>
            
            <div className="row">
              <div className="col-md-5">
                <p>Time: {task.startTime+' '+task.endTime} </p>
              </div>
            
              <div className="col-md-7">
                <Button className="btn btn-sm btn-primary" style={{marginRight: '10px'}} > Details </Button>
                <Button className="btn btn-sm btn-success" style={{marginRight: '10px'}} > Resources </Button>
              </div>
            
            </div>

          </div>
        );
      });
    }
  }

  renderResources = () => {
    if (this.props.roleview.resources && this.props.roleview.resources.length) {
      return this.props.roleview.resources.map((resource) => {
        return (
          <div key={Math.random()} className="roles-box" >
   
            <span> 
              {resource} 
              <Button className="btn btn-primary btn-xs " style={{ marginLeft: '30px' }} > Details </Button>            
            </span>
          </div>
        );
      });
    }
  }

  renderSimilarRoles = () => {
    if (this.props.roleview.similarRoles && this.props.roleview.similarRoles.length > 0) {
        return this.props.roleview.similarRoles.map((similarRole) => {
          return (
            <div key={Math.random()} className="roles-box" >

              <div className="row">

                <div className="col-md-7">
                  <p> {similarRole.title} </p>
                  <p> Description: {similarRole.description} </p>
                </div>

                <div className="col-md-2">
                  <p>Time: {similarRole.date} </p>
                  <p>Time: {similarRole.startTime + ' ' + similarRole.endTime} </p>
                </div>

                <div className="col-md-3">
                  <Button className="btn btn-sm btn-primary" > Claim </Button>
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
          <h3>Role View
          <small> Role view details are mentioned here.</small>
          </h3>
        <Row>
            
          <Helmet>
            <title>RoleView</title>
            <meta name="description" content="Description of RoleView" />
          </Helmet>
          
          <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Role: {this.props.roleview.roleDetail.title}
              </div>
              
              <div className="panel-body">
                <p>Location: {this.props.roleview.roleDetail.project} </p>
                <p>Date: {this.props.roleview.roleDetail.date} </p>
                <p>Time: {this.props.roleview.roleDetail.startTime + ' to ' + this.props.roleview.roleDetail.endTime} </p>

              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>

        </Row>

        <Row>
          <Col md={8}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Tasks
              </div>

              <div className="panel-body">
                {this.renderTasks()}
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>

          <Col md={4}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Resources/Tools Needed
              </div>

              <div className="panel-body">
                {this.renderResources()}
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
          </Col>
          
        </Row>
        
        <Row>
          <Col md={8}>
            <div id="panelDemo8" className="panel panel-primary">
              <div className="panel-heading">
                  Similar Roles
              </div>

              <div className="panel-body">
                {this.renderSimilarRoles()}
              </div>
              {/* <div className="panel-footer">Panel Footer</div> */}
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
