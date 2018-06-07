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

export class Documentation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props)
    this.state = {
      document: null,
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
            <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit} >
              <fieldset>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Methods of Communications</label>
                  <input 
                    type="file"
                    name="document"
                    value={this.state.document}
                  />
                </div>

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
