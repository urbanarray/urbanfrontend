/**
 *
 * AddCommunications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormGroup, Label, Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import Select from 'react-select';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddCommunications from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import 'react-select/dist/react-select.css';
import { createCommunicationsAction } from "./actions";

export class AddCommunications extends React.Component { // eslint-disable-line react/prefer-stateless-function
  

  constructor(props){
    super(props)
    
    this.state = {
      moc: [],
      critialContacts: [],
      specialInstruction: '',
      revelvantUA: '',
      openModel: false,
      selectedOption: '',
      multi: true,

    };

  }

  handleMutiChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ 
      critialContacts : selectedOption
     });
  }

  handleMutiValueChange = (value) => {
    console.log(value);
    this.setState({
      moc: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.create(
      {
        moc: this.state.moc,
        critialContacts: this.state.critialContacts,
        specialInstruction: this.state.specialInstruction,
        revelvantUA: this.state.revelvantUA
      }
    )
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
          <title>AddCommunications</title>
          <meta name="description" content="Description of AddCommunications" />
        </Helmet>
        <button onClick={this.open} className="btn btn-primary btn-block" style={{}}> Communication </button>

        <Modal show={this.state.openModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Communication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit} >
              <fieldset>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Methods of Communications</label>
                  <Col sm={8}>
                    <Select.Creatable
                      name="moc"
                      value={this.state.moc}
                      onChange={this.handleMutiValueChange}
                      multi={true}
                      
                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Critial Contacts</label>
                  <Col sm={8}>
                    <Select
                      name="critialContacts"
                      value={this.state.critialContacts}
                      onChange={this.handleMutiChange}
                      multi
                      options={[
                        { value: 'Pakistan', label: 'Pakistan' },
                        { value: 'Pak', label: 'Pak' },
                        { value: 'India', label: 'India' },
                        { value: 'Asia', label: 'Asia' },
                        { value: 'Afgans', label: 'Afgans' },
                      ]}
                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Special Instructions</label>
                  <Col sm={8}>
                      <textarea 
                        rows="5" 
                        type="text" 
                        name="specialInstruction" 
                        value={this.state.specialInstruction} 
                        className="form-control" 
                        placeholder="Special Instructions" 
                      />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb"> Relevant UA List</label>
                  <Col sm={8}>
                    <textarea
                      rows="5"
                      type="text"
                      name="revelvantUA"
                      value={this.state.revelvantUA}
                      className="form-control"
                      placeholder="List of Revelent UA"
                    />
                  </Col>
                </div>
              </fieldset>
              <button className="btn-block btn btn-success">Add Communication</button>
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

AddCommunications.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addcommunications: makeSelectAddCommunications(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(createCommunicationsAction(payload))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addCommunications', reducer });
const withSaga = injectSaga({ key: 'addCommunications', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddCommunications);
