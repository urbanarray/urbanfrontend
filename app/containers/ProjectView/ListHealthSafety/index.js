/**
 *
 * ListHealthSafety
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
import HealthSafety from './HealthSafety';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectListHealthSafety } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { listHealthSafetyAction } from './actions';

export class ListHealthSafety extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.listHealthSafetys(this.props.match.params.id);
  }
  renderSma = (sma) => {
    if(sma && sma.length > 0 ){
      return sma.map((c) => {
        return (
          <ul key={Math.random()}>
            <li>
              {c.label}
            </li>
          </ul>
        )
      })
    }
  }

  renderMma = (mma) => {
    if (mma && mma.length > 0 ) {
      return mma.map((c) =>{
        return (
          <ul key={Math.random()}>
            <li>{c.label}</li>
          </ul>
        )
      })
    }
  }

  renderEcn = (ecn) => {
    if(ecn && ecn.length > 0) {
      return ecn.map((c) => {
        return (
          <ul key={Math.random()}>
            <li>
              { c.label}
            </li>
          </ul>
        )
      })
    }
  }

  listHealth = () => {
    if (this.props.listHealthSafety && this.props.listHealthSafety.list_healthsafety && this.props.listHealthSafety.list_healthsafety.length > 0) {
      return this.props.listHealthSafety.list_healthsafety.map((c) => {
        return (
          <tr key={Math.random()}>
            <td>
              {c.lmc}
            </td>
            <td>
              {c.location}
            </td>
            <td>
              {c.lsc}
            </td>
            <td>
              {this.renderSma(c.sma)}
            </td>
            <td>
              {this.renderMma(c.mma)}
            </td>
            <td>
              {this.renderEcn(c.ecn)}
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
          <title>ListHealthSafety</title>
          <meta name="description" content="Description of ListHealthSafety" />
        </Helmet>
        <h3>HealthSafety
            <small>List of HealthSafety</small>
        </h3>
        <Col sm={12}>
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
                <tr>
                    <th style={{width: '120px' }}>List of Medical Considerations</th>
                    <th style={{width: '120px'}}>Location of Medical</th>
                    <th style={{width: '120px'}}>Any Safety Considerations</th>
                    <th style={{width: '120px'}}>Security Members Assigned</th>
                    <th style={{width: '120px'}}>Medical Members Assigned</th>
                    <th style={{width: '120px'}}>Emergency Contact Number</th>
                </tr>
            </thead>
            <tbody>
              {this.listHealth()}
            </tbody>
          </Table>
        </Col>
      </ContentWrapper>
    );
  }
}

ListHealthSafety.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listHealthSafety: makeSelectListHealthSafety(),
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
