/**
 *
 * AddExecution
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col,Table, Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddExecution from './selectors';
import reducer from './reducer';
import saga from './saga';
import ReactQuill from 'react-quill';
import { createExecutionAction, listExecutionAction } from './actions';
import 'react-quill/dist/quill.snow.css';
import { styles, headings } from 'assets/styles/variables';


const QuillWrapper = styled.div`
.quill{

  height: 100px;
  margin-bottom: 50px;
}

`;

const Textquill = styled.div `

.ql-toolbar {
    display: none;
}

.ql-editor {
    border-top: 1px solid #ccc;

}

`;


export class AddExecution extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      entry: '',
      intent: '',
      conceptOperation: '',
      openModel: false,
      formats: [
                null,
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image'
            ]

    }
  }

  componentDidMount (){
    this.props.listExecution(this.props.projectId);
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
      projectId: this.props.projectId
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
      setTimeout(() => {
        this.props.listExecution(this.props.projectId);
      }, 1000);
    }, 500);
  }

  listExc = () => {
    if (this.props.addexecution && this.props.addexecution.execution_list && this.props.addexecution.execution_list.execution && this.props.addexecution.execution_list.execution.length > 0) {
      return this.props.addexecution.execution_list.execution.map((c) => {
        return (
              <tr key={Math.random()}>
                <td>
                  <Textquill>
                      <ReactQuill
                          name="react_quill"
                          value={c.conceptOperation}
                          readOnly
                          formats={this.formats}
                          />
                  </Textquill>
                </td>
                <td>
                  <Textquill>
                      <ReactQuill
                          name="react_quill"
                          value={c.entry}
                          readOnly
                          formats={this.formats}
                          />
                  </Textquill>
                </td>
                <td>
                  <Textquill>
                      <ReactQuill
                          name="react_quill"
                          value={c.intent}
                          readOnly
                          formats={this.formats}
                          />
                  </Textquill>
                </td>
              </tr>
            );
          });
        }
      }


  render(){
    return (
      <div>
        <Helmet>
          <title>AddExecution</title>
          <meta name="description" content="Description of AddExecution" />
        </Helmet>
        <Col md={12}>
          <div id="panelDemo8" className="panel panel-primary" >
            <div className="panel-heading" style={styles.primaryDark} >
              <Row>
                <Col md={6}>
                  <h4 style={headings.tableHeading}>Execution</h4>
                </Col>

                <Col md={6}>
                    <button onClick={this.open} className="btn btn-success btn-block" style={{marginTop: '3.0px'}}> Add Execution </button>
                </Col>
              </Row>
            </div>

              { /* START table-responsive */}
              <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                      <tr>
                          <th style={{ width: '120px' }}>Concept Operation</th>
                          <th style={{width: '120px'}}>Entry</th>
                          <th style={{width: '120px'}}>intent</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.listExc()}
                  </tbody>
                  <tbody>
                    <tr style={{width: '100%'}}>
                      <Link to={"/list-Execution/"+this.props.projectId} style={{float: 'right'}}>See all</Link>
                    </tr>
                  </tbody>
              </Table>
              { /* END table-responsive */}
              {/* <div className="panel-footer">Panel Footer</div> */}
          </div>
        </Col>

        <Modal show={this.state.openModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Execution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <fieldset>
                <div className="form-group mb">
                  <label className="col-sm-2 control-label mb">Entry</label>
                  <Col sm={9}>
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
                  <Col sm={9}>
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
                  <Col sm={9}>
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
              <button className="btn-block btn btn-success">Add Execution</button>
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
    listExecution: (payload) => dispatch(listExecutionAction(payload))
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
