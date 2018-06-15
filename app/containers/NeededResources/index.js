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

import { Grid, Row, Col, Panel, Button, Table, Pagination, HelpBlock, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles } from '../../assets/styles/variables'


export class NeededResources extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      zip: '',
      miles: ''
    }
  }
  
  componentDidMount() {
    PanelsRun();
    TableExtendedRun();
  }

  componentDidUpdate(){
    console.log(this.state);

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

  handleMilesChange(e){
    this.setState({miles: e})

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
              <Link
                to="/projectView"
                type="button"
                className="btn btn-success btn-block btn-sm"
                style={styles.primary}>Details/Claim
              </Link>
            </td>

          </tr>

        );
      });
    }
  }

  render() {
    return (
      <Col md={8}>
        <div id="panelDemo8" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <Row>
              <Col md={6}>
                NEEDED RESOURCES
            </Col>

              <Col md={6}>
              <form role="form" className="form-inline" >

<DropdownButton
  bsSize="small"
  title="Miles"
  id="dropdown-size-extra-small"
  onSelect={(e)=>this.handleMilesChange(e)}
>
  <MenuItem eventKey="5">5</MenuItem>
  <MenuItem eventKey="15">15</MenuItem>
  <MenuItem eventKey="25">25</MenuItem>
  <MenuItem eventKey="50">50</MenuItem>
  <MenuItem eventKey="100">100</MenuItem>
</DropdownButton>

<span style={{ margin: '0 10px' }}> From </span>

<FormGroup
  controlId="formZip"
  validationState={this.getValidationState()}
>
  <FormControl
    type="text"
    value={this.state.zip}
    placeholder="Zip"
    onChange={this.handleZipChange.bind(this)}
    style={{padding: '0', paddingLeft: '5px', marginTop: '10px', height: '30px', maxWidth: '150px', border: 'none'}}
  />
  <FormControl.Feedback />
  <HelpBlock></HelpBlock>
</FormGroup>

</form>
              </Col>
            </Row>
          </div>

          { /* START table-responsive */}
          <Table id="table-ext-2" responsive striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: '150px' }}>Item</th>
                <th style={{ width: '100px' }}>Quantity </th>
                <th style={{ width: '150px' }}>Project</th>
                <th style={{ width: '150px' }}>Location Needed</th>
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
      </Col>
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
