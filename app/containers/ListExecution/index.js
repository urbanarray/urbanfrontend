/**
 *
 * ListExecution
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col,Table, Button, Modal } from 'react-bootstrap';

import AddExecution from '../AddExecution';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectListExecution } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { styles, headings } from 'assets/styles/variables';
import { listExecutionAction } from "./actions";


export class ListExecution extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount (){
    this.props.listexecutions(this.props.match.params.id);
  } 
 listExc = () => {
    if (this.props.listExecution && this.props.listExecution.execution_list  && this.props.listExecution.execution_list.length > 0) {
      return this.props.listExecution.execution_list.map((c) => {
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
  render() {
    return (
      <div>
        <Helmet>
          <title>ListExecution</title>
          <meta name="description" content="Description of ListExecution" />
        </Helmet>
        <Col md={12}>
          <div id="panelDemo8" className="panel panel-primary" >
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
              </Table>
              { /* END table-responsive */}
              {/* <div className="panel-footer">Panel Footer</div> */}
          </div>
        </Col>
      </div>
    );
  }
}

ListExecution.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ListExecution: makeSelectListExecution(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listexecutions: (id) => dispatch(listExecutionAction(id))
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listExecution', reducer });
const withSaga = injectSaga({ key: 'listExecution', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListExecution);
