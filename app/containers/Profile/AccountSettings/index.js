/**
 *
 * AccountSettings
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAccountSettings from './selectors';
import reducer from './reducer';
import saga from './saga';

import ContentWrapper from 'components/Layout/ContentWrapper';

import { Row, Col, Button, Alert, Modal } from 'react-bootstrap';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import {
  skillsListAction,
  listUserSkillsAction,
  createUserSkillsAction,
  deleteUserSkillsAction
} from './actions';

import ProfileDetails from 'containers/Profile/ProfileDetails';
import { styles, headings } from 'assets/styles/variables';

export class AccountSettings extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false,
      skillId:null,
      userId:this.props.currentUser.user.id,
    };
  }



  close = () => {
    this.setState({
      showModal: false
    });
  }

  open = () => {
    this.setState({
      showModal: true
    });
  }

  componentDidMount() {
    this.props.listSkills();
    this.props.listUserSkills(this.props.currentUser.user.id);
  }



  handleRemove = (skillId) => {
    this.props.deleteUserSkill(skillId);
    setTimeout(() => {
      this.props.listUserSkills(this.props.currentUser.user.id);
    }, 500);
  }

  renderUserSkills = () => {
    const {listUserSkills} = this.props.accountsettings;
    if (listUserSkills && listUserSkills.length > 0) {
      return listUserSkills.map((userSkill) => {
        return <Alert key={Math.random()} className="primary" > {(userSkill && userSkill.skillId) ? userSkill.skillId.name.charAt(0).toUpperCase() + userSkill.skillId.name.slice(1) : ''}
          <Button onClick={() => this.handleRemove(userSkill._id) } className="btn btn-xs btn-alert pull-right" title="Remove" >
            <em className="fa fa-close"></em>
          </Button>
         </Alert>
      });
    }
  }



  renderSkills = () => {
    const { listSkills} = this.props.accountsettings;
    if (listSkills && listSkills.length > 0) {
     return listSkills.map((skill) => {
       return (
         <option key={skill._id} value={skill._id}> {skill.name} </option>
       );
     });
   }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const addUserSkills = {
      userId: this.props.currentUser.user.id,
      skillId: this.state.skillId,
    };

    this.props.createUserSkills(addUserSkills);

    setTimeout(() => {
      this.close();
    }, 1000);

    setTimeout(() => {
      this.props.listUserSkills(this.props.currentUser.user.id);
    }, 1100);

  }

  render() {
    return (
      <ContentWrapper>
        <Row>
          <Col md={4}>
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <div className="pv-lg">
                  <img src={this.props.currentUser.profile.picture} alt="avatar" className="center-block img-responsive img-circle img-thumbnail thumb96" />
                </div>
                <h3 className="m0 text-bold">{(this.props.currentUser && this.props.currentUser.profile) ? this.props.currentUser.profile.firstName+' '+this.props.currentUser.profile.lastName : 'No User'  }</h3>
                <div className="mv-lg">
                  <p>{(this.props.currentUser && this.props.currentUser.user ) ? this.props.currentUser.user.role : 'Role is not defined' }</p>
                </div>
                <div className="text-center"><a href="#" className="btn" style={styles.primary}>Send message</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default hidden-xs hidden-sm">
              <div className="panel-heading" style={styles.primaryDark}>
                <h4 style={headings.tableHeading} className="panel-title">User Skills  </h4>
                <button onClick={this.open}  className="pull-right btn-success">Add Skills </button>
              </div>
              <div className="panel-body">

                {this.renderUserSkills()}

                {/* Add user skills using pop up model */}
                {/* <Button bsStyle="primary" bsSize="large" onClick={this.open}>
                  Launch demo modal
                </Button> */}

                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add User Skills</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.handleChange}  >
                      <fieldset>
                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">Choose Skills</label>
                          <Col sm={9}>
                            { /*  SELECT2 */}
                            <select id="select2-1" className="form-control" name="skillId" value={this.state.skillId} >
                              <option>Select Skills</option>
                              {this.renderSkills()}
                            </select>

                            { /*  END SELECT2 */}
                          </Col>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 text-center" >
                          <input type="submit" value="Add Skill" className="btn btn-primary" />
                        </div>
                      </fieldset>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Cancel</Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </div>
          </Col>
          <Col md={8}>
            <ProfileDetails profileDetails={this.props.currentUser} />
          </Col>
        </Row>
      </ContentWrapper>
    );
  }
}

AccountSettings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  accountsettings: makeSelectAccountSettings(),
  currentUser: makeSelectCurrentUser(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listSkills: () => (dispatch(skillsListAction())),
    createUserSkills: (payload) => (dispatch(createUserSkillsAction(payload))),
    listUserSkills: (payload) => (dispatch(listUserSkillsAction(payload))),
    deleteUserSkill : (payload) => (dispatch(deleteUserSkillsAction(payload))),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'accountSettings', reducer });
const withSaga = injectSaga({ key: 'accountSettings', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AccountSettings);
