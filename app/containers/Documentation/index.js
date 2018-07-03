/**
 *
 * Documentation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormGroup, Label, Grid, Table, Row, Col, Input, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDocumentation from './selectors';
import reducer from './reducer';
import saga from './saga';
import { createDocumentAction, listDocumentAction } from "./actions";
import { styles, headings } from '../../assets/styles/variables';

export class Documentation extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
    this.state = {
      name: '',
      attachments: [],
      openModel: false,
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

  componentDidMount = () => {
   this.props.listDocs(this.props.projectId);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.attachments) {
      Array.from(this.state.attachments).forEach((attachment) => {
        formData.append('attachments', attachment, attachment.name)
      });
    }
    formData.append('projectId', this.props.projectId)
    formData.append('name', this.state.name)
    this.props.create(

        formData,


    );
    setTimeout(() => {
      this.setState({
        'name': ''
      })
      this.close();
    }, 500);

    setTimeout(() => {
      this.props.listDocs(this.props.projectId);
    }, 1000);
  }

  changeAll = (e) => {
    if (e.target.files && e.target.files.length) {
      const name = e.target.name;
      const files = e.target.files;

      this.setState({
        [name]: files,
      });
    }
    else {
      const { name } = e.target;
      const { value } = e.target;
      this.setState({
        [name]: value,

      });
    // this.props.history.push('dashboard');
  }
  }

  docs = (document) => {
    if (document && document.length > 0) {
      return document.map((a) => {
        return (
          <ul key={Math.random()}  style={{textDecoration: 'none', listStyleType: 'none'}}>
            <li>
              <a className="btn btn-info" target="blank" href={`http://mvp.urbanarray.org:3000/v1/uploads/documents/` + a}>View Document </a>

            </li>
          </ul>
        )
      }
    )}
  }

  listD = () => {
    if (this.props.documentation && this.props.documentation.list_document && this.props.documentation.list_document.document && this.props.documentation.list_document.document.length > 0) {
      return this.props.documentation.list_document.document.map((c) => {
        return (
          <tr key={Math.random()}>
            <td>
              {c.name}
            </td>
            <td>
              {this.docs(c.document)}
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
          <title>Documentation</title>
          <meta name="description" content="Description of Documentation" />
        </Helmet>
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary" >
              <div className="panel-heading" style={styles.primaryDark} >
                <Row>
                  <Col md={6}>
                  <h4 style={headings.tableHeading}>Documentation</h4>
                  </Col>

                  <Col md={6}>
                    <button onClick={this.open} className="btn btn-success pull-right" style={{marginTop: '3.0px'}}> Add Documentation </button>
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
                      {this.listD()}
                    </tbody>
                </Table>
                { /* END table-responsive */}
                {/* <div className="panel-footer">Panel Footer</div> */}
          </div>
        </col>
        <Modal show={this.state.openModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Documentation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onChange={this.changeAll} onSubmit={this.handleSubmit} >
              <fieldset>
                <Row>
                  <Col md={10}>
                      <label className=" col-md-offset-1 control-label mb">Methods of Communications</label>
                  </Col>
                  <Col sm={10}>
                    <Row>
                    </Row>
                    <div className="col-md-offset-1">
                      <div className="form-group mb">
                        <label className="col-sm-2  control-label mb" style={{paddingTop: '0'}}>Special Instructions</label>
                        <Col sm={10}>
                          <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="form-control"
                            placeholder="Please Add Document Name"
                          />
                        </Col>
                      </div>
                      <div className=" form-group mb">
                        <input
                          type="file"
                          name="attachments"
                          value={this.state.document}
                          style={{marginLeft: '14px'}}
                        />
                      </div>


                    </div>

                  </Col>
                </Row>
              </fieldset>
              <button className="btn-block btn btn-success">Add Documentation</button>
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

Documentation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentation: makeSelectDocumentation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create : (payload) => dispatch(createDocumentAction(payload)),
    listDocs : (payload) => dispatch(listDocumentAction(payload))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'documentation', reducer });
const withSaga = injectSaga({ key: 'documentation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Documentation);
