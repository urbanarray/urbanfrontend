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
import PanelsRun from 'components/Elements/Panels.run';
import { styles, headings } from '../../assets/styles/variables'
import PledgedResourcesTable from './PledgedResourcesTable';

export class PledgedResources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
              {`${pledgedresource.startTime} - ${pledgedresource.endTime}`}<br />
              {pledgedresource.date}
            </td>

            <td>
              <Link
                to=""
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
                <h4 style={headings.tableHeading}>PLEDGED RESOURCES</h4>
            </Col>
            </Row>
          </div>

          { /* START table-responsive */}
          <PledgedResourcesTable windowWidth={this.state.width} pledgedResources={this.props.pledgedresources.pledgedResources} />
          {/* <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: '175px' }}>Item</th>
                <th style={{ width: '175px' }}>Project </th>
                <th>Date/Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.renderPledgedResources()
              }
            </tbody>
          </Table> */}
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
