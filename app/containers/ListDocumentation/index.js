/**
 *
 * ListDocumentation
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Row, Col, Button, Modal } from 'react-bootstrap';

import ContentWrapper from 'components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { listDocumentAction } from './actions';
import makeSelectListDocumentation from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ListDocumentation extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    this.props.listDocs(this.props.match.params.id);
  }
  docs = (document) => {
    if (document && document.length > 0) {
      return document.map((a) => {
        return (
          <ul key={Math.random()} style={{ textDecoration: 'none', listStyleType: 'none' }}>
            <li>
              <a className="btn btn-info" target="blank" href={`http://mvp.urbanarray.org:3000/v1/uploads/documents/` + a}>View Document </a>

            </li>
          </ul>
        )
      }
      )
    }
  }

  listD = () => {
    if (this.props.listDocumentation && this.props.listDocumentation.list_document && this.props.listDocumentation.list_document && this.props.listDocumentation.list_document.length > 0) {
      return this.props.listDocumentation.list_document.map((c) => {
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
      <ContentWrapper>
        <Helmet>
          <title>ListDocumentation</title>
          <meta name="description" content="Description of ListDocumentation" />
        </Helmet>
        <h3>Documentation
            <small>List of Documentation</small>
        </h3>
         <Col md={12}>
          <div id="panelDemo8" className="panel panel-primary" >

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
        </Col>
      </ContentWrapper>
    );
  }
}

ListDocumentation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listDocumentation: makeSelectListDocumentation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listDocs: (id) => dispatch(listDocumentAction(id))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listDocumentation', reducer });
const withSaga = injectSaga({ key: 'listDocumentation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListDocumentation);
