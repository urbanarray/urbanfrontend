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

                    </select>
                  </Col>
                </div>

                <div className="form-group text-center">
                  <Col sm={3}>
                  </Col>
                  <Col sm={6}>
                    <button className="btn btn-primary btn-block">Save and Inivte</button>
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
