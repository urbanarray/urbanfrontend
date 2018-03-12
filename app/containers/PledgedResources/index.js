/**
 *
 * PledgedResources
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
import makeSelectPledgedResources from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Grid, Row, Col, Panel, Button, Table, Pagination, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';

export class PledgedResources extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    TableExtendedRun();
  }

  renderPledgedResources = () => {
    if (this.props.pledgedresources.pledgedResources) {
      return this.props.pledgedresources.pledgedResources.map((pledgedresource) => {
        return (
          <tr key={Math.random()}>
            <td>
              {pledgedresource.item}
            </td>

            <td>
              {pledgedresource.project} 
            </td>
            <td>
              {pledgedresource.date + ' '+pledgedresource.startTime + '-' + pledgedresource.endTime}
            </td>

            <td>
              <button type="button" className="btn btn-primary btn-xs" style={{ float: 'right' }} >Details</button>
            </td>

          </tr>

        );
      });
    }
  }

  render() {
    return (

      <div id="panelDemo8" className="panel panel-primary">
        <div className="panel-heading">
          <Row>
            <Col md={12}>
                PLEDGED RESOURCES
            </Col>
          </Row>
        </div>

        <div className="panel-body">
          { /* START table-responsive */}
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Project </th>
                <th>Date/Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.renderPledgedResources()
              }
            </tbody>
          </Table>
          { /* END table-responsive */}

        </div>
        <div className="panel-footer">
          <div className="text-right">
            <Link to="#" >View All</Link>
          </div>
        </div>
      </div>

    );
  }
}

PledgedResources.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pledgedresources: makeSelectPledgedResources(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'pledgedResources', reducer });
const withSaga = injectSaga({ key: 'pledgedResources', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PledgedResources);
