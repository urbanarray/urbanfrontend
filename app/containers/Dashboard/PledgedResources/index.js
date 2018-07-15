/**
 *
 * PledgedResources
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPledgedResources from './selectors';
import reducer from './reducer';
import saga from './saga';

import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles, headings } from 'assets/styles/variables';
import PledgedResourcesTable from './PledgedResourcesTable';

export class PledgedResources extends React.Component {

  componentDidMount() {
    PanelsRun();
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

          <PledgedResourcesTable windowWidth={this.props.windowWidth} pledgedResources={this.props.pledgedresources.pledgedResources} />

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
