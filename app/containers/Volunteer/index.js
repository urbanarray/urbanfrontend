/**
 *
 * Volunteer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Table } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVolunteer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { listVolunteerAction, resendInvitationAction } from './actions';
import AddVolunteer from './AddVolunteer';
import { styles, headings } from 'assets/styles/variables';


export class Volunteer extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      hide: 'hide',
      show: 'alert alert-success',
    }
  }

  componentDidMount(){
    this.props.listVolunteers();
  }

  handleResendEmail = (email) => {
    this.props.resendEmail({email: email})
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
            <td> {volunteer.role} </td>
            <td> {(volunteer.status == 1) ? 'Active' : <button onClick={()=>this.handleResendEmail(volunteer.email)} className='btn btn-sm' style={styles.primaryLight}> Resend Invitation </button>}  </td>
          </tr>
        );
      });
    }
  }


  handleClick = () => {
    this.setState({
      show: 'hide'
    });
  }

  renderMessage = () => {
    return (
      <div>
        <p className={(this.props.volunteer.email_sent === true) ? this.state.show : this.state.hide} >
          An Invitation has been sent.
          <span className="pull-right" onClick={this.handleClick} > X </span>
        </p>
      </div>
    );
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
          { this.renderMessage() }

          { /* START panel */}
          <div className="panel panel-default">
          <div className="panel-heading" style={styles.primaryDark}>
            <h4 style={headings.tableHeading}>Volunteers</h4>
            <div className='pull-right' >
              <AddVolunteer />
            </div>
             <br/>
          </div>
          <hr style={{marginTop: '12px', marginBottom: '0px'}} />
            { /* START table-responsive */}
            <Table id="table-ext-1" responsive bordered hover>
              <thead>
                <tr>
                <th style={{ width: '60px' }} >Picture</th>
                <th style={{ width: '300px' }} >Username</th>
                <th style={{ width: '300px' }} >Email</th>
                <th style={{ width: '300px' }} >Role</th>
                <th style={{ width: '200px' }} >Invite</th>

                </tr>
              </thead>
              <tbody>
              {this.renderUsers()}
              </tbody>
            </Table>
            { /* END table-responsive */}

          </div>
          { /* END panel */}

        </ContentWrapper>


    );
  }
}

Volunteer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  volunteer: makeSelectVolunteer()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listVolunteers:() => dispatch(listVolunteerAction()),
    resendEmail: (payload) => dispatch(resendInvitationAction(payload))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'volunteer', reducer });
const withSaga = injectSaga({ key: 'volunteer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Volunteer);
