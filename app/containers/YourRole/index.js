/**
 *
 * YourRole
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectYourRole from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Grid, Row, Col, Panel, Button, Table, Pagination, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles } from '../../assets/styles/variables'

export class YourRole extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  renderYourRoles = () => {
    if (this.props.yourrole.yourRoles) {
      return this.props.yourrole.yourRoles.map((roles) => {
        return (
          <tr key={Math.random()}>
            <td>
              {roles.role}
            </td>

            <td>
              {roles.project}
            </td>
            <td>
              {`${roles.startTime} - ${roles.endTime}`} <br />
              {roles.date}
            </td>

            <td>
              <Link
                to="/roleView"
                type="button"
                className="btn btn-primary btn-xs btn-block"
                style={styles.primary}>Details
              </Link>
            </td>

          </tr>

        );
      });
    }
  }
  render() {
    return (
      <Col md={4}>
        <div id="panelDemo8" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <Row>
              <Col md={12}>
                YOUR ROLES
            </Col>
            </Row>
          </div>

          { /* START table-responsive */}
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: '175px' }}>Role</th>
                <th style={{ width: '175px' }}>Project </th>
                <th>Date/Time</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {this.renderYourRoles()}
            </tbody>
          </Table>
          { /* END table-responsive */}

          <div className="panel-footer">
            <div className="text-right">
              <Link to="#" >View All</Link>
            </div>
          </div>

        </div>
      </Col>
    );
  }
}

YourRole.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  yourrole: makeSelectYourRole(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'yourRole', reducer });
const withSaga = injectSaga({ key: 'yourRole', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(YourRole);
