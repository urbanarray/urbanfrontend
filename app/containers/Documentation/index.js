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
import { FormGroup, Label, Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDocumentation from './selectors';
import reducer from './reducer';
import saga from './saga';
import { createDocumentAction } from "./actions";

export class Documentation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props)
    this.state = {
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
   
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.attachments) {
      Array.from(this.state.attachments).forEach((attachment) => {
        formData.append('attachments', attachment, attachment.name)
      });
    }
    this.props.create(formData);
    setTimeout(() => {
      this.close();
    }, 500);
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
        [name]: value
      });
    // this.props.history.push('dashboard');
  }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Documentation</title>
          <meta name="description" content="Description of Documentation" />
        </Helmet>

        <button onClick={this.open} className="btn btn-primary btn-block" style={{}}> Documentation </button>

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
                    <div className="col-md-offset-1">
                      <div className=" form-group mb">
                        <input 
                          type="file"
                          name="attachments"
                          value={this.state.document}
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
    create : (payload) => dispatch(createDocumentAction(payload))
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
