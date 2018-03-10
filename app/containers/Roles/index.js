/**
 *
 * Roles
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
import makeSelectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {From, Input} from 'reactstrap';
import './style.css';
import { Row, Col, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';


export class Roles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderOpenRoles = ()=>{
    // console.log(this.props.roles.openRoles.lenght);
    if (this.props.roles.openRoles) {
      return this.props.roles.openRoles.map((roles) => {
        return (
          <div className="roles-box" key={Math.random()} >
           
            <div className="row">    
              <div className="col-lg-9 col-md-9 col-sm-12">
                <h4> {roles.title} </h4>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <Link to="/roleView" className="btn btn-primary btn-sm" color="default" >Claim</Link>
              </div>
            </div>
 
            <div className="row"> 
              <div className="col-md-12">
                <p> {roles.description} </p>
              </div>
            </div>
 
            <div className="row "> 
              
              <div className="col-md-5 col-sm-12 ">
                <p> {roles.frame} </p>
                <p> {roles.role} </p>
              </div>
           
              
              <div className="col-md-4 col-sm-12">
                <p> {roles.date} </p>
                <p> {roles.startTime+' - '+roles.endTime} </p>
              </div>
              
              <div className="col-md-3 col-sm-12">
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

      <div id="panelDemo8" className="panel panel-primary">
        <div className="panel-heading"> 
          <Row>
              <Col md={6}>
                  Open Roles
              </Col>
              
              <Col md={6}>
              <form role="form" className="form-inline" >

                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </FormControl>
                
                    <label style={{ margin: '0px 20px'}}> To </label>
                
                    <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                      <option>Option 4</option>
                      <option>Option 3</option>
                      <option>Option 2</option>
                      <option>Option 1</option>
                    </FormControl>
              
                </form>
              </Col>
          </Row>
        </div>
        <div className="panel-body">
          {this.renderOpenRoles()}            
        </div>
        {/* <div className="panel-footer">Panel Footer</div> */}
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
