/**
 *
 * AddVolunteer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormGroup, Label, Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddVolunteer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {listRolesAction, createAction} from './actions';

export class AddVolunteer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false,
      role:'',
      email:'',
    };
  }


  close = () => {
    this.setState({
      showModal: false
    });
  }

  open = () => {
    this.setState({
      showModal: true
    });
  }

  componentDidMount(){
    this.props.listRoles();
  }
  

  renderRoles = () => {
    const {roles_list} = this.props.addvolunteer;
    if (roles_list && roles_list.length > 0) {
      return roles_list.map((role) => {
        return(
          <option key={Math.random()} value={role.name} >{role.name}</option>
        );
      });
    }   
  }



  changeAll = (e) => {

    if (e.target.files && e.target.files.length) {
      const name = e.target.name;
      const file = e.target.files[0];
      const { type: fileType } = file;
      if (fileType.indexOf("image/") === -1) {
        alert('File not supported');
        e.target.value = '';
        return;
      }

      this.setState({
        [name]: file
      });

    }
    else {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }
    // this.props.history.push('dashboard');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      role: this.state.role
    }
  
    this.props.create(obj);

    setTimeout(() => {
      this.close();
    }, 500);

  }


  render() {
    return (
      <div>
        <Helmet>
          <title>Add Volunteer</title>
          <meta name="description" content="Description of AddVolunteer" />
        </Helmet>

        <button onClick={this.open} className="btn btn-primary" > Add Volunteer </button>


        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Volunteer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.changeAll}  >
              <fieldset>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Email</label>
                  <Col sm={6}>
                    <input className="form-control" type="email" name="email" value={this.state.email} placeholder="Email" required />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Role</label>
                  <Col sm={6}>
                    <select className="form-control" type="select" name="role" value={this.state.role} required>
                      <option>Select Your Role</option>
                      {this.renderRoles()}
                    </select>
                  </Col>
                </div>

                <div className="form-group text-center">
                  <Col sm={3}>
                  </Col>
                  <Col sm={6}>
                    <button className="btn btn-primary btn-block">Save and Inivite</button>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </div>


              </fieldset>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>



      </div>
    );
  }
}

AddVolunteer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addvolunteer: makeSelectAddVolunteer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listRoles: () => dispatch(listRolesAction()),
    create: (payload) => dispatch(createAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addVolunteer', reducer });
const withSaga = injectSaga({ key: 'addVolunteer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddVolunteer);
