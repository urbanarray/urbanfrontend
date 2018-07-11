/**
 *
 * ListHealthSafety
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Row, Col, Button, Modal } from 'react-bootstrap';

import HealthSafety from '../HealthSafety';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectListHealthSafety } from './selectors';
import reducer from './reducer';
import saga from './saga';
import {listHealthSafetyAction } from "./actions";

export class ListHealthSafety extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    this.props.listHealthSafetys(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>ListHealthSafety</title>
          <meta name="description" content="Description of ListHealthSafety" />
        </Helmet>
        <Col sm={12}>
          <h1>headings</h1>
        </Col>
      </div>
    );
  }
}

ListHealthSafety.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listhealthsafety: makeSelectListHealthSafety(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
     listHealthSafetys : (id) => dispatch(listHealthSafetyAction(id))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listHealthSafety', reducer });
const withSaga = injectSaga({ key: 'listHealthSafety', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListHealthSafety);
