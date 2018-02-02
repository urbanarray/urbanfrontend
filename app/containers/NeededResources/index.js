/**
 *
 * NeededResources
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import {Input, Button} from 'reactstrap';

export class NeededResources extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderNeededResources = () => {
    if (this.props.neededresources.neededResources) {
      return this.props.neededresources.neededResources.map((resource) => {
        return (
          <div className="roles-box" key={Math.random()} >

            <div className="row ">

              <div className="col-md-3 col-sm-6 col-12 ">
                <h4> {resource.name} </h4>
                <p> Qty: {resource.quantity} </p>
              </div>


              <div className="col-md-3 col-sm-6 col-12">
                <p> Size: {resource.size} </p>
                <p> Project: {resource.project} </p>
              </div>

              <div className="col-md-3 col-sm-6 col-12">
                <p> {resource.date} </p>
                <p> {resource.startTime + ' - ' + resource.endTime} </p>
              </div>

              <div className="col-md-3 col-sm-6 col-12">
                
             
                  <button type="button" className="btn btn-outline-secondary btn-block btn-sm"  > Pledge </button>
                
                  <button type="button" className="btn btn-outline-secondary btn-block btn-sm"  > Details </button>
              
              </div>

            </div>


          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="inner-body">
        <Helmet>
          <title>NeededResources</title>
          <meta name="description" content="Description of NeededResources" />
        </Helmet>

        <div className="box">
          <div className="box-header">

            <div className="row">
              <div className="col-md-4 col-sm-12 col-12">
                <p className="heading">
                  needed resources
                </p>
              </div>
              <div className="col-md-5 col-sm-12 col-12" >
                <Input type='select' >
                  <option> 10 </option>
                  <option> 12 </option>
                  <option> 16 </option>
                </Input>
              </div>
              <div className="col-md-3 col-sm-12 col-12 ">
                <p className="right-heading">
                  Miles to Chicago
                </p>
              </div>

            </div>

          </div>

          <div className="box-body">

            {this.renderNeededResources()}

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
