/**
 *
 * Roles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {From, Input, Button} from 'reactstrap';
import './style.css';


export class Roles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderOpenRoles = ()=>{
    // console.log(this.props.roles.openRoles.lenght);
    if (this.props.roles.openRoles) {
      return this.props.roles.openRoles.map((roles) => {
        return (
          <div className="roles-box" key={Math.random()} >
           
            <div className="row">    
              <div className="col-md-9 col-sm-12 col-12">
                <h4> {roles.title} </h4>
              </div>
              <div className="col-md-3 col-sm-12 col-12">
                <Button className="btn btn-outline-secondary btn-sm" color="default" >Claim</Button>
              </div>
            </div>
 
            <div className="row"> 
              <div className="col-md-12">
                <p> {roles.description} </p>
              </div>
            </div>
 
            <div className="row "> 
              
              <div className="col-md-5 col-sm-12 col-12 ">
                <p> {roles.frame} </p>
                <p> {roles.role} </p>
              </div>
           
              
              <div className="col-md-4 col-sm-12 col-12">
                <p> {roles.date} </p>
                <p> {roles.startTime+' - '+roles.endTime} </p>
              </div>
              
              <div className="col-md-3 col-sm-12 col-12">
                <p> PTS:  {roles.pts} </p>
                <p> AC:  {roles.ac} </p>
              </div>
           
            </div>
 

          </div>
        );
      });
    }
  }

  render() {
    return (

      <div className="inner-body">
        <Helmet>
          <title>Roles</title>
          <meta name="description" content="Description of Roles" />
        </Helmet>

        <div className="box">
          <div className="box-header">
            
            <div className="row">
              <div className="col-md-4 col-sm-12 col-12">
                <p className="heading">
                  open roles
                </p>
              </div>
              <div className="col-md-5 col-sm-12 col-12" >
                <Input type='select' >
                  <option> value </option>
                </Input>
              </div>
              <div className="col-md-3 col-sm-12 col-12 ">
                <p className="right-heading">
                  Miles to Chicago
                </p>
              </div>

            </div>

          </div>

          <div className="box-body">

              {this.renderOpenRoles()}

          </div>

        </div>

      </div>
       
    );
  }
}

Roles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  roles: makeSelectRoles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'roles', reducer });
const withSaga = injectSaga({ key: 'roles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Roles);
