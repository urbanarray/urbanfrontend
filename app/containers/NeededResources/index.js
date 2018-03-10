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
import { Row, Col, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';


export class NeededResources extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderNeededResources = () => {
    if (this.props.neededresources.neededResources) {
      return this.props.neededresources.neededResources.map((resource) => {
        return (
          <div className="roles-box" key={Math.random()} >

            <div className="row">

              <div className="col-md-3 col-sm-6 col-xs-12 ">
                <h4> {resource.name} </h4>
                <p> Qty: {resource.quantity} </p>
              </div>


              <div className="col-md-3 col-sm-6 col-xs-12">
                <p> Size: {resource.size} </p>
                <p> Project: {resource.project} </p>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <p> {resource.date} </p>
                <p> {resource.startTime + ' - ' + resource.endTime} </p>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                
             
                  <button type="button" className="btn btn-primary btn-block btn-sm"  > Pledge </button>
                
                  <Link to="/projectView" type="button" className="btn btn-success btn-block btn-sm"  > Details </Link>
              
              </div>

            </div>

          </div>
        );
      });
    }
  }

  render() {
    return (

      <div id="panelDemo8" className="panel panel-primary">
        <div className="panel-heading">
          <Row>
            <Col md={6}>
                Needed Resources
            </Col>

            <Col md={6}>
              <form role="form" className="form-inline">

                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </FormControl>

                <label style={{ margin: '0px 20px' }}> To </label>

                <FormControl style={{ height: '24px' }} componentClass="select" multiple="" className="input-sm">
                  <option>Option 4</option>
                  <option>Option 3</option>
                  <option>Option 2</option>
                  <option>Option 1</option>
                </FormControl>

              </form>
            </Col>
          </Row>
        </div>

        <div className="panel-body">
          {this.renderNeededResources()}
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
