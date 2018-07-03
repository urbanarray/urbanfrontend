/**
 *
 * Places
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination, Modal } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPlaces from './selectors';
import reducer from './reducer';
import saga from './saga';
import { listPlacesAction, deletePlacesAction, updatePlacesAction } from "./actions";
import AddPlace from "containers/AddPlace";
import {makeSelectCurrentUser} from 'containers/App/selectors';
import { styles, headings } from '../../assets/styles/variables';


export class Places extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, content){

    super(props);
    this.state = {
      showDeleteModel: false,
      showUpdateModel: false,

      name: '',
      description: '',
      city: '',
      streetAddress: '',
      zipcode: '',
      googleMap: '',
      photoUpload: '',
      userId: (this.props.currentUser && this.props.currentUser.user) ? this.props.currentUser.user.id : '',
      toedit: {
        name: '',
        description: '',
        city: '',
        streetAddress: '',
        zipcode: '',
        googleMap: '',
        userId: '',
      }


    }
  }

  componentDidMount(){
    this.props.listPlaces();
    // console.log(this.props.places.listPlaces);
  }

  closedelete = () => {
    this.setState({
      showDeleteModel: false
    })
  }

  openDelete = (id) => {
    this.setState({
      showDeleteModel: true,
      modal_delete: id
    });
  }

  closeUpdateModel = () => {
    this.setState({
      showUpdateModel: false,
    });
  }

  openUpdateModel = (id) => {
    this.setState({
      showUpdateModel: true,
      toedit : id
    })
  }

    handleRemove = async (proId) => {
    await this.props.deletePlace(proId);
    await this.props.listPlaces();
    this.closedelete();
  }

  handleUpdateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const toedit = this.state.toedit;

    toedit[name] = value;
    this.setState({
      toedit: toedit,
    });
  }

  handleUpdateSubmit = (e) => {
    e.preventDefault();


    this.props.update(this.state.toedit);
    this.closeUpdateModel();
  }

  changeAll = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  renderPlaces = () => {

    const  placesList  = this.props.places;
    if (placesList.listPlaces && placesList.listPlaces.length > 0) {
      return placesList.listPlaces.map((places) => {
        return (
          <tr key={Math.random()} >

            <td style={{padding: '14px 8px'}}> {places.name} </td>
            <td style={{padding: '14px 8px'}}> {places.city} </td>
            <td style={{padding: '14px 8px'}}> {places.description} </td>
            <td style={{padding: '14px 8px'}}> 
              
              <i title="delete project" style={{marginLeft: '30px'}}  onClick={() => this.openDelete(places._id)} className="fa fa-times"> </i>
              <i title="update project" style={{marginLeft: '30px'}}  onClick={() => this.openUpdateModel(places)} className="fa fa-pencil"></i>
                  
            </td>
          </tr>
        );
      });
    }

  }


  render() {
    return (
      <div>
        <Helmet>
          <title>List Places</title>
          <meta name="description" content="Description of Places" />
        </Helmet>

        <ContentWrapper>

          <Helmet>
            <title>Places</title>
            <meta name="description" content="Description of Places" />
          </Helmet>
          <h3>Places
            <small>List of Places</small>
          </h3>

          { /* START panel */}
          <div className="panel panel-default">
            <div className="panel-heading" style={styles.primaryDark}>
              <h4 style={headings.tableHeading}></h4>
              <div className='pull-right' >
                <AddPlace/>
              </div>
              <br />
            </div>
            <hr style={{ marginTop: '12px', marginBottom: '0px' }} />
            { /* START table-responsive */}
            <Table id="table-ext-1" responsive bordered hover>
              <thead>
                <tr>
                  <th> Full Name</th>
                  <th>City</th>
                  <th>Discription</th>
                  <th>Actions</th>

                </tr>
              </thead>
              <tbody>
                {this.renderPlaces()}
              </tbody>
            </Table>
            { /* END table-responsive */}

          </div>
          { /* END panel */}
          { /* START panel */}

          <Modal show={this.state.showUpdateModel} onHide={this.closeUpdateModel}>
            <Modal.Header closeButton >
              <Modal.Title>Update Place</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-horizontal" onSubmit={this.handleUpdateSubmit} onChange={this.changeAll}  >
                <fieldset>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">Name</label>
                    <Col sm={8}>
                      <input onChange={this.handleUpdateChange} className="form-control" type="name" name="name" value={this.state.toedit.name} placeholder="name" required />
                    </Col>
                  </div>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">Description</label>
                    <Col sm={8}>
                      <textarea onChange={this.handleUpdateChange} rows="3" className="form-control" type="text" value={this.state.toedit.description} name="description" placeholder="Description" required />
                    </Col>
                  </div>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">Street Address</label>
                    <Col sm={8}>
                      <textarea onChange={this.handleUpdateChange} rows="3" className="form-control" type="text" value={this.state.toedit.streetAddress} name="streetAddress" placeholder="Street Address" required />
                    </Col>
                  </div>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">City</label>
                    <Col sm={8}>
                      <input onChange={this.handleUpdateChange} className="form-control" type="text" name="city" value={this.state.toedit.city} placeholder="City" required />
                    </Col>
                  </div>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">Zip Code</label>
                    <Col sm={8}>
                      <input onChange={this.handleUpdateChange} className="form-control" type="number" name="zipcode" value={this.state.toedit.zipcode} placeholder="Zip Code" required />
                    </Col>
                  </div>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">Google Location</label>
                    <Col sm={8}>
                      <input onChange={this.handleUpdateChange} className="form-control" type="number" name="googleMap" value={this.state.toedit.googleMap} placeholder="Map Location" />
                    </Col>
                  </div>

                  <div className="form-group mb">
                    <label className="col-sm-2 col-sm-offset-1 control-label mb">Upload Photo</label>
                    <Col sm={8}>
                      <input className="form-control" type="file" name="photoUpload" />
                    </Col>
                  </div>


                </fieldset>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleUpdateSubmit}>Update</Button>
              <Button onClick={this.closeUpdateModel}>Cancel</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showDeleteModel} onHide={this.closeDelete}>
            <Modal.Body>

              <div className="form-group mb text-center">
                <h3 className="p-v-20 fw-i">Are You Sure To Delete This Place?</h3>
                <button className="btn btn-labeled btn-lg btn-warning mr btn btn-labeled btn-warning mr-default" onClick={this.closedelete}>
                  <span className="btn-label">
                    <i className="fa fa-warning"></i>

                  </span> No
                   </button>
                <button className="btn btn-labeled btn-danger btn-lg mr btn btn-labeled btn-danger  mr-default" onClick={() => this.handleRemove(this.state.modal_delete)}>
                  <span className="btn-label">
                    <i className="fa fa-check">
                    </i>
                  </span>
                  DELETE </button>
              </div>

            </Modal.Body>
          </Modal>
        </ContentWrapper>
      </div>
    );
  }
}

Places.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  places: makeSelectPlaces(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listPlaces: () => dispatch(listPlacesAction()),
    deletePlace : (payload) => dispatch(deletePlacesAction(payload)),
    update : (payload) => dispatch(updatePlacesAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'places', reducer });
const withSaga = injectSaga({ key: 'places', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Places);
