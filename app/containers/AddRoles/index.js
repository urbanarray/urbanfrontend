/**
 *
 * AddRoles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddRoles from './selectors';
import reducer from './reducer';
import saga from './saga';
import {createRolesAction, listRolesAction} from './actions';
import { Col, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import { styles, headings } from '../../assets/styles/variables';


export class AddRoles extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
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
      return roles_list.map((role, i) => {
        return (
          <tr key={i}><td>{role.name}</td></tr>
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
        <div className="container" style={{marginTop: '25px'}}>
          <div className="row">
            <Col md={6}>

              <div className="user-detail" id="user-detail"  >

                <div className="panel-heading" style={styles.primaryDark}>
                  <h4 className="text-center" style={headings.tableHeading} >Add Roles</h4>
                </div>
                <div className="panel" style={{paddingTop: '10px'}}>

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
            </Col>

            { /* START table-responsive */}
            <Col md={6}>
              <div className="user-detail" id="user-detail">
              <div style={styles.primaryDark} className="panel-heading">
                  <h4  style={headings.tableHeading}>Roles List</h4>
                </div>
            <Table id="table-ext-1" className="panel" responsive bordered hover>
              <thead>
            
              </thead>
              <tbody>
                {this.renderRoles()}
              </tbody>
            </Table>
              </div>
            </Col>
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
