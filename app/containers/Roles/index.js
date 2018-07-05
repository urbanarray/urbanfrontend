/**
 *
 * Roles
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
import makeSelectRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import { Row, Col, FormControl, HelpBlock, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles, headings } from '../../assets/styles/variables';
import RolesTable from './RolesTable';

export class Roles extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      zip: '',
      miles: '',
    }
  }

  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  getValidationState() {
    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.zip)) return 'success';
    else if (length < 5) return 'warning';
    else if (length > 5) return 'Must return a 5 digit zip code';
    return null;
  }

  handleZipChange(e) {
    this.setState({ zip: e.target.value });
  }

  handleMilesChange(e) {
    this.setState({ miles: e })

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

              <Col md={6}>
                <form role="form" className="form-inline" >

                  <DropdownButton
                    bsSize="small"
                    title="Miles"
                    id="dropdown-size-extra-small"
                    onSelect={(e) => this.handleMilesChange(e)}
                  >
                    <MenuItem eventKey="5">5</MenuItem>
                    <MenuItem eventKey="15">15</MenuItem>
                    <MenuItem eventKey="25">25</MenuItem>
                    <MenuItem eventKey="50">50</MenuItem>
                    <MenuItem eventKey="100">100</MenuItem>
                  </DropdownButton>

                  <span style={[{ margin: '0 10px' }, headings.tableHeading]}> From </span>

                  <FormGroup
                    controlId="formZip"
                    validationState={this.getValidationState()}
                  >
                    <FormControl
                      type="text"
                      value={this.state.zip}
                      placeholder="Zip"
                      onChange={this.handleZipChange.bind(this)}
                      style={{ padding: '0', paddingLeft: '5px', marginTop: '10px', height: '30px', maxWidth: '150px', border: 'none' }}
                    />
                    <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
                  </FormGroup>

                </form>
              </Col>
            </Row>
          </div>

          <RolesTable roles={this.props.roles.openRoles} windowWidth={this.props.windowWidth} />


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
