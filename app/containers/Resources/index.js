/**
 *
 * Resources
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { Button, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import { FormGroup, Label, Grid, Table, Row, Col, Input, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';
import Select from 'react-select';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectResources from './selectors';
import reducer from './reducer';
import saga from './saga';
import ResourcesDisplay from '../ProjectView/ResourcesDisplay/index.js'
import './style.css';
import 'react-select/dist/react-select.css';
import { createCommunicationsAction, listCommunication } from "./actions";
import {styles} from '../../assets/styles/variables';
import { addResourcesAction } from './actions'


export class Resources extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        date: this.state.date,
        place: this.state.place

        
      }
   );
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

  render() {
    const { selectedOption } = this.state;
    return (
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
                  <h4 style={{ color: 'white', fontWeight: '100', letterSpacing: '2.0px', textTransform: 'uppercase' }}>Resources</h4>
                  </Col>
                
                  <Col md={6}>
                    <button onClick={this.open} className="btn btn-success pull-right" style={{}}> Add Resources </button>
                  </Col>
                </Row>
              </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: '120px' }}>Name</th>
                            <th style={{ width: '120px' }}>Document</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <label className="col-sm-2 col-sm-offset-1 control-label mb">Item</label>
                        <Col sm={8}>
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
                        <label className="col-sm-2 col-sm-offset-1 control-label mb">Quantity</label>
                        <Col sm={8}>
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
                        <label className="col-sm-2 col-sm-offset-1 control-label mb">Location</label>
                        <Col sm={8}>
                          <select 
                            name="place"
                            value={this.state.place} 
                            className="form-control"
                            >
                            <option value={1}>Urban Farming</option>
                            <option value={2}>Building Rehab</option>
                          </select>
                        </Col>

                      </div>
                      <div className="form-group mb">
                        <label className="col-sm-2 col-sm-offset-1 control-label mb">Date</label>
                        <Col sm={8}>
                          <input
                            type="date"
                            name="date"
                            value={this.state.date}
                            className="form-control"
                            placeholder="date"
                          />
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
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(addResourcesAction(payload))
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
