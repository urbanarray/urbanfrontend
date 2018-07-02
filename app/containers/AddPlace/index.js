/**
 *
 * AddPlace
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormGroup, Label, Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddPlace from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import {createPlaceAction} from "./actions";

export class AddPlace extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context){
    super(props, context);

    this.state = {
      addModel: false,
      name: '',
      description: '',
      city: '',
      streetAddress: '',
      zipcode: '',
      googleMap: '',
      photoUpload: '',
      userId:(this.props.currentUser && this.props.currentUser.user)?this.props.currentUser.user.id : '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.create({

      name: this.state.name,
      description: this.state.description,
      city: this.state.city,
      streetAddress: this.state.streetAddress,
      zipcode: this.state.zipcode,
      googleMap: this.state.googleMap,
      userId: this.state.userId,

    });
    setTimeout(() => {
      this.setState(
        {
          'name': '',
          'description': '',
          'city': '',
          'streetAddress': '',
          'zipcode': '',
          'googleMap': '',
          'addModel': false,
        }
      )
      this.props.listPlaces
    }, 500);


  }



  handleChange = (e) => {

    const { name, value } = e.target;
    this.setState({ [name]: value });

  }

  open = () => {
    this.setState({
      addModel: true,
    })
  }

  close = () => {
    this.setState({
      addModel: false,
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>AddPlace</title>
          <meta name="description" content="Description of AddPlace" />
        </Helmet>

        <button onClick={this.open} className="btn btn-primary btn-success"> Add Place </button>

        <Modal show={this.state.addModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Place</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal"  onChange={this.handleChange} onSubmit={this.handleSubmit} >
              <fieldset>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Name</label>
                  <Col sm={8}>
                    <input className="form-control" type="name" name="name" value={this.state.name}  placeholder="name" required />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Description</label>
                  <Col sm={8}>
                    <textarea rows="3" className="form-control" type="text" value={this.state.description} name="description" placeholder="Description" required />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Street Address</label>
                   <Col sm={8}>
                        <textarea rows="3" className="form-control" type="text" value={this.state.streetAddress} name="streetAddress" placeholder="Street Address" required />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">City</label>
                  <Col sm={8}>
                    <input className="form-control" type="text" name="city" value={this.state.city} placeholder="City" required />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Zip Code</label>
                  <Col sm={8}>
                    <input className="form-control" type="number" name="zipcode" value={this.state.zipcode} placeholder="Zip Code" required />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Google Location</label>
                  <Col sm={8}>
                    <input className="form-control" type="number" name="googleMap" value={this.state.googleMap} placeholder="Map Location"  />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Upload Photo</label>
                  <Col sm={8}>
                    <input className="form-control" type="file"  name="photoUpload" />
                  </Col>
                </div>


              </fieldset>

              <button className="btn-block btn btn-success">Add Place</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-danger" onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>


      </div>
    );
  }
}

AddPlace.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addplace: makeSelectAddPlace(),
  currentUser: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) =>  dispatch(createPlaceAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addPlace', reducer });
const withSaga = injectSaga({ key: 'addPlace', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddPlace);
