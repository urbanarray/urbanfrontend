/**
 *
 * NeededResources
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
import makeSelectNeededResources from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Grid, Row, Col, Panel, Button, Table, Pagination, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';


export class NeededResources extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  renderNeededResources = () => {
    if (this.props.neededresources.neededResources) {
      return this.props.neededresources.neededResources.map((resource) => {
        return (
          <tr key={Math.random()}>
            <td>
              {resource.name} 
            </td>

            <td>
              {resource.quantity}
            </td>
            <td>
              {resource.project}
            </td>
            <td>
              {resource.locationNeeded}
            </td>
            <td>
              {`${resource.startTime} - ${resource.endTime}`}<br />
              {resource.date}
            </td>
            <td>
              {/* <button type="button" className="btn btn-primary btn-block btn-sm"  > Pledge </button> */}
              <Link to="/projectView" type="button" className="btn btn-success btn-block btn-sm blue"  > Details/Claim </Link>
            </td>

          </tr>
    
        );
      });
    }
  }

  render() {
    return (

      <div id="panelDemo8" className="panel panel-primary">
        <div className="panel-heading" style={{backgroundColor: '#006b9a'}}>
          <Row>
            <Col md={6}>
                NEEDED RESOURCES
            </Col>

            <Col md={6}>
              <form role="form" className="form-inline">

                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                  <option>Miles</option>
                </FormControl>

                <label style={{ margin: '0px 20px' }}> To </label>

                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                  <option>Zip</option>
                </FormControl>

              </form>
            </Col>
          </Row>
        </div>

          { /* START table-responsive */}
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>
                <th style={{width: '150px'}}>Item</th>
                <th style={{width: '100px'}}>Quantity </th>
                <th style={{width: '150px'}}>Project</th>
                <th style={{width: '150px'}}>Location Needed</th>
                <th>Date/Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderNeededResources()}
            </tbody>
          </Table>
          { /* END table-responsive */}
        <div className="panel-footer">
          <div className="text-right">
            <Link to="#" >View All</Link>
          </div>
        </div>
      </div>

    );
  }
}

NeededResources.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  neededresources: makeSelectNeededResources(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'neededResources', reducer });
const withSaga = injectSaga({ key: 'neededResources', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NeededResources);
