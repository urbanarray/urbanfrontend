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
import PanelsRun from 'components/Elements/Panels.run';
import {styles} from '../../assets/styles/variables';

export class Roles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    PanelsRun();
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
              {`${roles.startTime} - ${roles.endTime}`}<br />
              {roles.date}
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
              <Link 
                to="/roleView"
                type="button"
                className="btn btn-primary btn-block btn-sm" 
                color="default" 
                style={styles.primary}>Details
              </Link>
            </td>

          </tr>
    
        );
      });
    }
  }

  render() {
    return (

      <div id="" className="panel panel-primary">
        <div className="panel-heading" style={styles.primaryDark}> 
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
          { /* START table-responsive */}
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>         
                <th style={{width: '200px'}}>Role</th>
                <th style={{width: '200px'}}>Project </th>
                <th style={{width: '150px'}}>Date/Time</th>
                <th style={{width: '80px'}}>Duration</th>
                <th style={{width: '80px'}}>PTS</th>
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
