/**
 *
 * Volunteer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVolunteer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { listVolunteerAction } from './actions';
import AddVolunteer from 'containers/AddVolunteer';

export class Volunteer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    this.props.listVolunteers();
  }

  handleActivate = (email) => {
    alert(email)
  }

  renderUsers = () => {
    const {volunteersList} = this.props.volunteer;
    if (volunteersList && volunteersList.length > 0) {
      return volunteersList.map((volunteer) => {
        return(
          <tr key={Math.random()} >
            <td> <img src={volunteer.picture} alt="avatar" style={{width:'45px', height:'45px', borderRadius: '50%'}}  /> </td>
            <td> {volunteer.name} </td>
            <td> {volunteer.email} </td>
            <td> {(volunteer.status == 1) ? 'Active' : <button onClick={()=>this.handleActivate(volunteer.email)} className='btn btn-primary btn-sm' > Resend Invitation </button>}  </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <ContentWrapper>
      
        <Helmet>
          <title>Volunteer</title>
          <meta name="description" content="Description of Volunteer" />
        </Helmet>
          <h3>Volunteers
            <small>List of all volunteers</small>
          </h3>
          { /* START panel */}
          <div className="panel panel-default">
          <div className="panel-heading">
             
            <div className='pull-right' > 
              <AddVolunteer/>
            </div>
             <br/>   
          </div>
          <hr style={{marginTop: '12px', marginBottom: '0px'}} />
            { /* START table-responsive */}
            <Table id="table-ext-1" responsive bordered hover>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Invite</th>
                  
                </tr>
              </thead>
              <tbody>
              {this.renderUsers()}
              </tbody>
            </Table>
            { /* END table-responsive */}
          
          </div>
          { /* END panel */}
          { /* START panel */}
      
        </ContentWrapper>      


    );
  }
}

Volunteer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({  
  volunteer: makeSelectVolunteer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listVolunteers:() => dispatch(listVolunteerAction())
  };
} 

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'volunteer', reducer });
const withSaga = injectSaga({ key: 'volunteer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Volunteer);
