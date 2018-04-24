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

import { Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

import { makeSelectCurrentUser } from 'containers/App/selectors';

export class AccountSettings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false
    };
  }

  

  close() {
    this.setState({
      showModal: false
    });
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  
  componentDidMount() {
    
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
                <div className="panel-title text-center"> Skills <em onClick={this.open.bind(this)} className="pull-right icon-note"></em>  </div>
              </div>
              <div className="panel-body">
                {/* Add user skills using pop up model */}  
                {/* <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>
                  Launch demo modal
                </Button> */}

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add User Skills</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input type='' />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Close</Button>
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
