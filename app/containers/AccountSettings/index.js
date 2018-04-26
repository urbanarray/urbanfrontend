/**
 *
 * AccountSettings
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
import makeSelectAccountSettings from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import ContentWrapper from 'components/Layout/ContentWrapper';

import {Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { skillsListAction, listUserSkillsAction, createUserSkillsAction } from './actions';

export class AccountSettings extends React.Component { // eslint-disable-line react/prefer-stateless-function
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


  renderProfileInfo = () => {
    if (this.props.currentUser && this.props.currentUser.user && this.props.currentUser.profile) {
      const {user, profile} = this.props.currentUser;
      return(
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputContact1" className="col-sm-4 control-label">Name</label>
            <div className="col-sm-8">
              <input disabled id="inputContact1" type="text" placeholder="" defaultValue={profile.firstName+' '+profile.lastName} className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputContact2" className="col-sm-4 control-label">Email</label>
            <div className="col-sm-8">
              <input disabled id="inputContact2" type="email" defaultValue={user.email} className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputContact3" className="col-sm-4 control-label">Phone</label>
            <div className="col-sm-8">
              <input disabled id="inputContact3" type="text" defaultValue="(123) 465 789" className="form-control" />
            </div>
          </div>
            <div className="form-group">
            <label htmlFor="inputContact4" className="col-sm-4 control-label">Mobile</label>
            <div className="col-sm-8">
              <input disabled id="inputContact4" type="text" defaultValue="(12) 123 987 465" className="form-control" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="inputContact6" className="col-sm-4 control-label">City/Metro Area</label>
            <div className="col-sm-8">
              <textarea disabled id="inputContact6" rows="4" className="form-control" defaultValue="Some nice Street, 1234"></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputContact8" className="col-sm-4 control-label"> Availability Start Date</label>
            <div className="col-sm-8">
              <input disabled id="inputContact8" type="text" className="form-control" defaultValue={profile.avaiability_start_date} />
            </div>  
          </div>

          <div className="form-group">
            <label htmlFor="inputContact8" className="col-sm-4 control-label"> Availability End Date</label>
            <div className="col-sm-8">
              <input disabled id="inputContact8" type="text" className="form-control" defaultValue={profile.avaiability_end_date} />
            </div>
          </div>

          
        </div>
      );
    }
  }


  renderUserSkills = () => {
    const {listUserSkills} = this.props.accountsettings;
    if (listUserSkills && listUserSkills.length > 0) {
      return listUserSkills.map((userSkill) => {
        return <Alert key={Math.random()} className="primary" > {(userSkill && userSkill.skillId) ? userSkill.skillId.name.charAt(0).toUpperCase() + userSkill.skillId.name.slice(1) : ''} </Alert>
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
    var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);
    return (
      <ContentWrapper>
        <Row>
          <Col md={4}>
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <div className="pv-lg">
                  <img src="img/user/02.jpg" alt="avatar" className="center-block img-responsive img-circle img-thumbnail thumb96" />
                </div>
                <h3 className="m0 text-bold">{(this.props.currentUser && this.props.currentUser.profile) ? this.props.currentUser.profile.firstName+' '+this.props.currentUser.profile.lastName : 'No User'  }</h3>
                <div className="mv-lg">
                  <p>{(this.props.currentUser && this.props.currentUser.user ) ? this.props.currentUser.user.role : 'Role is not defined' }</p>
                </div>
                <div className="text-center"><a href="#" className="btn btn-primary">Send message</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default hidden-xs hidden-sm">
              <div className="panel-heading">
                <div className="panel-title text-center"> Skills <em onClick={this.open} className="pull-right icon-note"></em>  </div>
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
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="pull-right">    
                  <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                    <MenuItem eventKey="1">Send by message</MenuItem>
                    <MenuItem eventKey="2">Share contact</MenuItem>
                    <MenuItem eventKey="3">Block contact</MenuItem>
                    <MenuItem eventKey="4"><span className="text-warning">Block contact</span></MenuItem>
                  </DropdownButton>
                </div>
                <div className="h4 text-center">Profile Information</div>
                <Row className="pv-lg">
                    <Col lg={2}></Col>
                  <Col lg={8}>
                    {this.renderProfileInfo()}
                  </Col>
                </Row>
              </div>
            </div>
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
