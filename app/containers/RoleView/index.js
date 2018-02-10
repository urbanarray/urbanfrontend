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

export class RoleView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderTasks = () => {
    if (this.props.roleview.tasks && this.props.roleview.tasks.length) {
      return this.props.roleview.tasks.map((task) => {
        return (
          <div key={Math.random()} className="roles-box" >
            <h6> {task.title} </h6>
            <p> Description: {task.description} </p>
            
            <div className="row">
              <div className="col-md-5">
                <p>Time: {task.startTime+' '+task.endTime} </p>
              </div>
            
              <div className="col-md-7">
                <Button className="btn btn-sm btn-outline-secondary" style={{marginRight: '10px'}} > Details </Button>
                <Button className="btn btn-sm btn-outline-default" style={{marginRight: '10px'}} > Resources </Button>
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
              <Button className="btn btn-outline-secondary btn-sm" style={{ marginLeft: '30px' }} > Details </Button>            
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
                  <h6> {similarRole.title} </h6>
                  <p> Description: {similarRole.description} </p>
                </div>

                <div className="col-md-2">
                  <p>Time: {similarRole.date} </p>
                  <p>Time: {similarRole.startTime + ' ' + similarRole.endTime} </p>
                </div>

                <div className="col-md-3">
                  <Button className="btn btn-sm btn-outline-secondary" > Claim </Button>
                </div>

              </div>

            </div>
          );
        });
    }
  }

  
  render() {
    return (
      <div className="container-fluid">
        <Helmet>
          <title>RoleView</title>
          <meta name="description" content="Description of RoleView" />
        </Helmet>
        <div className="box-header">
          <div className="box-innerbody">
            <div className="row">
              <div className="col-md-12">
                <h4>Role: {this.props.roleview.roleDetail.title} </h4>
                <p>Location: {this.props.roleview.roleDetail.project} </p>
                <p>Date: {this.props.roleview.roleDetail.date} </p>
                <p>Time: {this.props.roleview.roleDetail.startTime+' to '+this.props.roleview.roleDetail.endTime} </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          
          <div className="col-md-8">
            <div className="box">
              <div className="box-header">
                <p className="heading">
                  tasks
                </p>
              </div>

              <div className="box-body">
                {this.renderTasks()}
              </div>

            </div>
            
          </div>
      
          
          <div className="col-md-4">
            <div className="box">
              <div className="box-header">
                <p className="heading">
                  resources/tools needed
                </p>
              </div>
         
              <div className="box-body">
                {this.renderResources()}
              </div>
         
            </div>

          </div>


        </div>
  

        <div className="row">
          
          <div className="col-md-8">
            <div className="box">
              <div className="box-header">
                <p className="heading">
                  similar roles
                </p>
              </div>

              <div className="box-body">
                {this.renderSimilarRoles()}
              </div>

            </div>
            
          </div>

        </div>
  

      </div>
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
