/**
 *
 * YourRole
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectYourRole from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Row, Col } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles, headings } from 'assets/styles/variables';
import YourRoleTable from './YourRoleTable';

export class YourRole extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  render() {
    return (
      <Col md={4}>
        <div id="panelDemo8" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <Row>
              <Col md={12}>
                <h4 style={headings.tableHeading}>YOUR ROLES</h4>
            </Col>
            </Row>
          </div>

          <YourRoleTable windowWidth={this.props.windowWidth} yourRoles={this.props.yourrole.yourRoles} />


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
