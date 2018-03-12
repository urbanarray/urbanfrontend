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
import { Grid, Row, Col, Panel, Button, Table, Pagination, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';

export class Roles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    TableExtendedRun();
  }

  renderOpenRoles = ()=>{
    // console.log(this.props.roles.openRoles.lenght);
    if (this.props.roles.openRoles) {
      return this.props.roles.openRoles.map((roles) => {
        return (
          <tr key={Math.random()}>
            <td>
            {roles.title} 
            </td>
          
            <td>
            {roles.project} 
            </td>
          
            <td>
              {roles.date +' '+roles.startTime + ' - ' + roles.endTime}
            </td>
            <td>
              {roles.duration}
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

  render() {
    return (

      <div id="panelDemo8" className="panel panel-primary">
        <div className="panel-heading"> 
          <Row>
              <Col md={6}>
                  OPEN ROLES (Suggested)
              </Col>
              
              <Col md={6}>
              <form role="form" className="form-inline" >

                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                  <option>Miles</option>
                </FormControl>
                
                <label style={{ margin: '0px 20px'}}> To </label>
            
                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                  <option>Zip</option>
                </FormControl>
              
                </form>
              </Col>
          </Row>
        </div>
        <div className="panel-body text-uppercases">
          { /* START table-responsive */}
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>         
                <th>Role</th>
                <th>Project </th>
                <th>Date/Time</th>
                <th>Duration</th>
                <th>PTS</th>
                <th>AC</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.renderOpenRoles()
                }
            </tbody>
          </Table>
          { /* END table-responsive */}
        </div>
        
        <div className="panel-footer">
          <div className="text-right">
          <Link to="#" >View All</Link>
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
