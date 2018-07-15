/**
 *
 * Resources
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectResources, makeSelectListPlaces } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import 'react-select/dist/react-select.css';
import { styles, headings } from 'assets/styles/variables';
import { addResourcesAction, listPlacesAction, listResourcesAction } from './actions';
import UpdateResources from './UpdateResources';
 
export class Resources extends Component {
  constructor(props){
    super(props)

    this.state = {
      item: '',
      quantity: '',
      date: '',
      place: '',
      openModel: false

    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.create(
      {

        item: this.state.item,
        quantity: this.state.quantity,
        placeId: this.state.place,
        dateId: this.state.date,
        projectId: this.props.projectId,


      },
      this.props.listResource(this.props.projectId)
      
   );
    setTimeout(() =>{
      this.close();
      this.props.listResource(this.props.projectId);
    },800);

  }

  componentDidMount(){
    this.props.listPlace();
    this.props.listResource(this.props.projectId);

  }
  updateModelOpen = () => {
    this.props({
      updateModel : true,
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }
  open = () => {
    this.setState({
      openModel : true,
    })
  }

  close = () => {
    this.setState({
      openModel : false,
    });
  }

  renderListPlaces = () =>{
    if (this.props.resources && this.props.resources.listedPlaces && this.props.resources.listedPlaces.length > 0) {
      return this.props.resources.listedPlaces.map(places => {
        return(
           <option key={Math.random()} value={places._id}>{places.name}</option>
           )
      })
    }
  }

  listResources = () => {
    
    if (this.props.resources && this.props.resources.listedResources && this.props.resources.listedResources.length > 0) {
        
      return this.props.resources.listedResources.map((res) => {

        return (
              <tr key={Math.random()}>
                <td>
                  {res.item}
                </td>
                <td>
                  {res.quantity}
                </td>
                <td>
                  {(res.placeId) ? res.placeId.name : ''}
                </td>
                <td>
                  {res.dateId}
                </td>
                <td>
                  <UpdateResources/>
                </td>
              </tr>
            );
          });
        }
      }

  render() {
    return(
      <div>
        <Helmet>
          <title>Resources</title>
          <meta name="description" content="Description of Resources" />
        </Helmet>
          <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary" >
              <div className="panel-heading" style={styles.primaryDark} >
                <Row>
                  <Col md={6}>
                  <h4 style={headings.tableHeading}>Resources</h4>
                  </Col>
                  <Col md={6}>
                    <button onClick={this.open} className="btn btn-success pull-right" style={{marginTop: '3.0px'}}> Add Resources </button>
                  </Col>
                </Row>
              </div>

              { /* START table-responsive */}
              <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                      <tr>
                          <th>Item</th>
                          <th>Quantity </th>
                          <th>Location Needed</th>
                          <th>date/Time</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>

                    {this.listResources()}
                  </tbody>
                  <tbody>
                    <tr style={{width: '100%'}}>
                      <Link to={"/list-Resources/"+this.props.projectId} style={{float: 'right'}}>See all</Link>
                    </tr>
                  </tbody>
              </Table>
              { /* END table-responsive */}
              {/* <div className="panel-footer">Panel Footer</div> */}
          </div>
        </Col>
        <Modal show={this.state.openModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Resources</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit} >
              <fieldset>
                <Row>
                  <Col sm={10}>
                    <div className="col-md-offset-1">
                      <div className="form-group mb">
                        <label className="col-sm-2 control-label mb">Item</label>
                        <Col sm={10}>
                          <input
                            type="text"
                            name="item"
                            value={this.state.item}
                            className="form-control"
                            placeholder="Please Add item"
                          />
                        </Col>
                      </div>
                      <div className="form-group mb">
                        <label className="col-sm-2 control-label mb">Quantity</label>
                        <Col sm={10}>
                          <input
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            className="form-control"
                            placeholder="Quantity number"
                          />
                        </Col>
                      </div>
                      <div className="form-group mb">
                        <label className="col-sm-2 control-label mb">date</label>
                        <Col sm={10}>
                          <input
                            type="date"
                            name="date"
                            value={this.state.date}
                            className="form-control"
                            placeholder="date"
                          />
                        </Col>
                      </div>
                      <div className="form-group mb">
                        <label className="col-sm-2 control-label mb">Place</label>
                        <Col md={10}>
                          <p style={{
                            color: 'red'
                          }}>
                            {/* {this.state.projectname} */}
                          </p>
                            <select value={this.state.place} name="place" className="form-control">
                              {this.renderListPlaces()}
                            </select>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <button className="btn-block btn btn-success">Add Resources</button>
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

Resources.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({

  resources: makeSelectResources(),
  listPlaces: makeSelectListPlaces(),

});

function mapDispatchToProps(dispatch){
  return{
    dispatch,
    create: (payload) =>dispatch(addResourcesAction(payload)),
    listPlace: () => dispatch(listPlacesAction()),
    listResource: (id) => dispatch(listResourcesAction(id)),
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'resources', reducer });
const withSaga = injectSaga({ key: 'resources', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Resources);
