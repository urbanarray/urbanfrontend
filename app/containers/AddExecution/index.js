/**
 *
 * AddExecution
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormGroup, Label, Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';
import styled from "styled-components";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddExecution from './selectors';
import reducer from './reducer';
import saga from './saga';
import ReactQuill from 'react-quill';
import { createExecutionAction } from "./actions";
import 'react-quill/dist/quill.snow.css';

const QuillWrapper = styled.div`
.quill{

  height: 100px;
  margin-bottom: 50px;
}
  
`;


export class AddExecution extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props)

    this.state = {
      entry: '',
      intent: '',
      conceptOperation: '',
      openModel: false
    }
  }

  open = () => {
    this.setState({
      openModel: true,
    })
  }
  close = () => {
    this.setState({
      openModel: false,
    })
  }
  
  // onChange = (e) => {

   
    
  // }


  handleQuillconceptOperation = (value) => {

    this.setState({
      conceptOperation: value
    });
  }
 
  handleQuillIntent = (value) => {

    this.setState({
      intent: value
    });
  }
  handleQuillEntry = (value) => {

    this.setState({
      entry: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.create({
      entry: this.state.entry,
      intent: this.state.intent,
      conceptOperation: this.state.conceptOperation,
    });

    setTimeout(() => {
      this.setState({
        'entry' : '',
        'intent' : '',
        'conceptOperation' : '',
      });
      setTimeout(() => {
        this.close();
      }, 800);
    }, 500);
  }


  render() {
    return (
      <div>
        <Helmet>
          <title>AddExecution</title>
          <meta name="description" content="Description of AddExecution" />
        </Helmet>
        <button onClick={this.open} className="btn btn-primary btn-block" style={{}}> Execution </button>
        <Modal show={this.state.openModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Execution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <fieldset>

                <div className="form-group mb">
                  <label className="col-sm-2 control-label mb">Entry</label>
                  <Col sm={10}>
                    <QuillWrapper>
                      <ReactQuill
                        name="entry"
                        value={this.state.entry || ''}
                        required="required"
                        placeholder="Add Entry Points"
                        type="text"
                        onChange={this.handleQuillEntry}
                      />
                    </QuillWrapper>
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 control-label mb">Intent</label>
                  <Col sm={10}>
                    <QuillWrapper>
                      <ReactQuill
                        name="intent"
                        value={this.state.intent || ''}
                        required="required"
                        type="text"
                        placeholder="Add Intent Points"
                        onChange={this.handleQuillIntent}
                      />
                    </QuillWrapper>
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 control-label mb">Concept of Operation</label>
                  <Col sm={10}>
                    <QuillWrapper>
                      <ReactQuill
                        name="conceptOperation"
                        value={this.state.conceptOperation || ''}
                        required="required"
                        placeholder="Concept Of Operation"
                        type="text"
                        onChange={this.handleQuillconceptOperation}
                      />
                    </QuillWrapper>
                  </Col>
                </div>

              </fieldset>
              <button className="btn-block btn btn-success">Add Exevution</button>
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

AddExecution.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addexecution: makeSelectAddExecution(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(createExecutionAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addExecution', reducer });
const withSaga = injectSaga({ key: 'addExecution', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddExecution);
