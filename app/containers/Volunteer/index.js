/**
 *
 * Volunteer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVolunteer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { listVolunteerAction } from './actions';
import AddVolunteer from 'containers/AddVolunteer';

export class Volunteer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount(){
    this.props.listVolunteers();
  }

  render() {
    return (
      <ContentWrapper>
      
        <Helmet>
          <title>Volunteer</title>
          <meta name="description" content="Description of Volunteer" />
        </Helmet>
          <h3>Volunteers
            <small>List of all volunteers</small>
          </h3>
          { /* START panel */}
          <div className="panel panel-default">
          <div className="panel-heading">
             
            <div className='pull-right' > <AddVolunteer/> </div>   
          </div>
          <hr/>
            { /* START table-responsive */}
            <Table id="table-ext-1" responsive bordered hover>
              <thead>
                <tr>
                  <th>UID</th>
                  <th>Picture</th>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Profile</th>
                  <th>Last Login</th>
                  <th data-check-all="data-check-all">
                    <div data-toggle="tooltip" data-title="Check All" className="checkbox c-checkbox">
                      <label>
                        <input type="checkbox" />
                        <em className="fa fa-check"></em>
                      </label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="media">
                      <img src="img/user/01.jpg" alt="Image" className="img-responsive img-circle" />
                    </div>
                  </td>
                  <td>@twitter</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>mail@example.com</td>
                  <td className="text-center">
                    <div data-label="25%" className="radial-bar radial-bar-25 radial-bar-xs"></div>
                  </td>
                  <td>1 week</td>
                  <td>
                    <div className="checkbox c-checkbox">
                      <label>
                        <input type="checkbox" />
                        <em className="fa fa-check"></em>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="media">
                      <img src="img/user/02.jpg" alt="Image" className="img-responsive img-circle" />
                    </div>
                  </td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>mail@example.com</td>
                  <td className="text-center">
                    <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-xs"></div>
                  </td>
                  <td>25 minutes</td>
                  <td>
                    <div className="checkbox c-checkbox">
                      <label>
                        <input type="checkbox" />
                        <em className="fa fa-check"></em>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div className="media">
                      <img src="img/user/03.jpg" alt="Image" className="img-responsive img-circle" />
                    </div>
                  </td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>mail@example.com</td>
                  <td className="text-center">
                    <div data-label="80%" className="radial-bar radial-bar-80 radial-bar-xs"></div>
                  </td>
                  <td>10 hours</td>
                  <td>
                    <div className="checkbox c-checkbox">
                      <label>
                        <input type="checkbox" />
                        <em className="fa fa-check"></em>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            { /* END table-responsive */}
            <div className="panel-footer">
              <Row>
                <Col lg={2}>
                  <div className="input-group">
                    <input type="text" placeholder="Search" className="input-sm form-control" />
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-sm btn-default">Search</button>
                    </span>
                  </div>
                </Col>
                <Col lg={8}></Col>
                <Col lg={2}>
                  <div className="input-group pull-right">
                    <select className="input-sm form-control">
                      <option value="0">Bulk action</option>
                      <option value="1">Delete</option>
                      <option value="2">Clone</option>
                      <option value="3">Export</option>
                    </select>
                    <span className="input-group-btn">
                      <button className="btn btn-sm btn-default">Apply</button>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          { /* END panel */}
          { /* START panel */}
      
        </ContentWrapper>      


    );
  }
}

Volunteer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({  
  volunteer: makeSelectVolunteer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listVolunteers:() => dispatch(listVolunteerAction())
  };
} 

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'volunteer', reducer });
const withSaga = injectSaga({ key: 'volunteer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Volunteer);
