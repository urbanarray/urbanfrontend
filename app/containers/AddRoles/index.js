/**
 *
 * AddRoles
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
import makeSelectAddRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {createRolesAction, listRolesAction} from './actions';
import { Grid, Row, Col, Panel, Button, Table, Pagination, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class AddRoles extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props);
    this.state = {
      name: '',
    }
  }

  componentDidMount() {
    this.props.listRoles();
  }

  changeAll = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRole({name: this.state.name});
    setTimeout(() => {
      this.setState({'name':''});
      this.props.listRoles();
      
    }, 500);
  } 


  renderRoles = () => {
    const { roles_list } = this.props.addroles;
    if (roles_list && roles_list.length > 0 ) {
      return roles_list.map((role) => {
        return (
          <tr> <td> {role.name} </td> </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Add Roles</title>
          <meta name="description" content="Description of Add Roles" />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 ">

              <div className="user-detail" id="user-detail"  >

                <div className="heading">
                  <h1 className="text-center" >Add Roles</h1>

                  <div className="sign-up-box">
                    <Form onChange={this.changeAll} onSubmit={this.handleSubmit} >
                      <FormGroup row>
                        <Label for="name" sm={3}>Role Name</Label>
                        <Col sm={9}>
                          <Input className="form-control" type="text" name="name" value={this.state.name} placeholder="Role Name" required />
                        </Col>
                      </FormGroup>

                      <div className="btn-continue">
                        <button className="btn btn-success btn-block">Add Role</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>

            { /* START table-responsive */}
            <Table id="table-ext-1" responsive bordered hover>
              <thead>
                <tr>
                  <th>Roles List</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRoles()}
              </tbody>
            </Table>
            { /* END table-responsive */}

          </div>
        </div>
      </div>
    );
  }
}

AddRoles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addroles: makeSelectAddRoles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addRole: (payload) => dispatch(createRolesAction(payload)),
    listRoles: (payload) => dispatch(listRolesAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addRoles', reducer });
const withSaga = injectSaga({ key: 'addRoles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddRoles);
