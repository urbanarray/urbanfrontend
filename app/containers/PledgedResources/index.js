/**
 *
 * PledgedResources
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
import makeSelectPledgedResources from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Row, Col } from 'react-bootstrap';

export class PledgedResources extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderPledgedResources = () => {
    if (this.props.pledgedresources.pledgedResources) {
      return this.props.pledgedresources.pledgedResources.map((pledgedresource) => {
        return (
          <div className="roles-box" key={Math.random()} >

            <div className="row ">

              <div className="col-md-8 col-sm-12  ">
                <p> {pledgedresource.item}
                  <button type="button" className="btn btn-primary btn-xs" style={{float:'right'}} >Details</button>
                </p>

                 
                <p> Project: {pledgedresource.project} </p>
              </div>


              <div className="col-md-4 col-sm-12 ">
                <p> {pledgedresource.date} </p>
                <p> {pledgedresource.startTime + ' - ' + pledgedresource.endTime} </p>
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
            <Col md={12}>
                Pledged Resources
            </Col>
          </Row>
        </div>

        <div className="panel-body">
          
          {
            this.renderPledgedResources()
          }

          <div className="col-md-4 col-sm-12  form-group">
            <button type="button" className="btn btn-sm btn-success">Submit Resources</button>
          </div>

        </div>

      </div>

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
