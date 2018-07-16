/**
 *
 * ListResources
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Row, Col, Button, Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListResources from './selectors';
import reducer from './reducer';
import saga from './saga';
import {listResourcesAction} from './actions';
import { UpdateResources }from '../Resources/UpdateResources/index'

export class ListResources extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount=()=>{
    this.props.listResourcess(this.props.match.params.id);

  }

  listResources = () => {

    if (this.props.listResources && this.props.listResources.listedResources && this.props.listResources.listedResources.length > 0) {

        console.log(this.props.listResources.listedResources)
      return this.props.listResources.listedResources.map((res) => {

        return (
              <tr key={Math.random()}>
                <td>
                  {res.item}
                </td>
                <td>
                  {res.quantity}
                </td>
                <td>
                  {(res.placeId) ? res.placeId.name : ''}
                </td>
                <td>
                  {res.dateId}
                </td>
                <td>
                  <UpdateResources/>
                </td>
              </tr>
            );
          });
        }
      }

  render() {
    return (
      <div>
        <Helmet>
          <title>ListResources</title>
          <meta name="description" content="Description of ListResources" />
        </Helmet>
         <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary" >

              { /* START table-responsive */}
              <Table id="table-ext-2" responsive striped bordered hover>
                  <thead>
                      <tr>
                          <th>Item</th>
                          <th>Quantity </th>
                          <th>Location Needed</th>
                          <th>date/Time</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>

                    {this.listResources()}
                  </tbody>
              </Table>
              { /* END table-responsive */}
              {/* <div className="panel-footer">Panel Footer</div> */}
          </div>
        </Col>
      </div>
    );
  }
}

ListResources.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listResources: makeSelectListResources(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listResourcess: (id) => dispatch(listResourcesAction(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listResources', reducer });
const withSaga = injectSaga({ key: 'listResources', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListResources);
