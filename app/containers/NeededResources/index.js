/**
 *
 * NeededResources
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
import makeSelectNeededResources from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Row, Col, HelpBlock, FormControl, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TableExtendedRun from 'components/Tables/TableExtended.run';
import PanelsRun from 'components/Elements/Panels.run';
import { styles, headings } from '../../assets/styles/variables'
import ResourcesTable from './ResourcesTable';
import MilesZip from './MilesZip';

export class NeededResources extends Component { // eslint-disable-line react/prefer-stateless-function
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
    this.setState({ miles: miles })

  }

  render() {
    return (
      <Col md={8}>
        <div id="panelDemo8" className="panel panel-primary">
          <div className="panel-heading" style={styles.primaryDark}>
            <Row>
              <Col md={6}>
                <h4 style={headings.tableHeading}>NEEDED RESOURCES</h4>
            </Col>

              <MilesZip 
                zip={this.state.zip} 
                miles={this.state.miles} 
                handleZipChange={this.handleZipChange} 
                handleMilesChange={this.handleMilesChange} 
              />  

            </Row>
          </div>

          <ResourcesTable windowWidth={this.props.windowWidth} neededResources={this.props.neededresources.neededResources}  />

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
