/**
 *
 * Roles
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import { Row, Col, FormControl, HelpBlock, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles, headings } from '../../assets/styles/variables';
import RolesTable from './RolesTable';
import MilesZip from './MilesZip';

export class Roles extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      miles: '',
      zip: ''
    }
  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  handleZipChange = (zipcode) => {
    this.setState({ zip: zipcode });
  }

  handleMilesChange = (miles) => {
    this.setState({ miles: miles });
  }
  

  render() {
    return (
      <Col md={8}>
        <div id="" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <Row>
              <Col md={6}>
                <h4 style={headings.tableHeading}>OPEN ROLES (Suggested)</h4>
              </Col>

              <MilesZip 
                zip={this.state.zip} 
                miles={this.state.miles} 
                handleZipChange={this.handleZipChange} 
                handleMilesChange={this.handleMilesChange} 
              />

            </Row>
          </div>

          <RolesTable 
            roles={this.props.roles.openRoles} 
            windowWidth={this.props.windowWidth} 
          />

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

Roles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  roles: makeSelectRoles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'roles', reducer });
const withSaga = injectSaga({ key: 'roles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Roles);
