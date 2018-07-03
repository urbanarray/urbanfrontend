/**
 *
 * ProfileDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col, Button, DropdownButton, MenuItem, Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfileDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { updateAction } from './actions';
import { styles, headings } from '../../assets/styles/variables';


export class ProfileDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false,

      firstName: '',
      lastName: '',
      city: '',
      noCriminal: false,
      noMedConditions: false,
      howToContribute: '',
      availability_start_date: '',
      availability_end_date: '',
      picture: '',
      userId: (this.props.currentUser && this.props.currentUser.user) ? this.props.currentUser.user.id : '',

    };
  }

  componentDidMount() {
    if (this.props.profileDetails && this.props.profileDetails.profile) {
      this.setState({
        firstName: this.props.profileDetails.profile.firstName,
        lastName: this.props.profileDetails.profile.lastName,
        city: this.props.profileDetails.profile.city,
        howToContribute: this.props.profileDetails.profile.howToContribute,
        availability_start_date: this.props.profileDetails.profile.availability_start_date,
        availability_end_date: this.props.profileDetails.profile.availability_end_date,
        noCriminal: this.props.profileDetails.profile.noCriminal,
        noMedConditions: this.props.profileDetails.profile.noMedConditions,
      });
    }
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




  changeAll = (e) => {

    if (e.target.files && e.target.files.length) {
      const name = e.target.name;
      const file = e.target.files[0];
      const { type: fileType } = file;
      if (fileType.indexOf("image/") === -1) {
        alert('File not supported');
        e.target.value = '';
        return;
      }

      this.setState({
        [name]: file
      });

    }
    else {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }
    // this.props.history.push('dashboard');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', this.state.firstName);
    formData.append('lastName', this.state.lastName);
    formData.append('city', this.state.city);
    formData.append('howToContribute', this.state.howToContribute);
    formData.append('availability_start_date', this.state.availability_start_date);
    formData.append('availability_end_date', this.state.availability_end_date);
    formData.append('noCriminal', this.state.noCriminal);
    formData.append('noMedConditions', this.state.noMedConditions);
    formData.append('picture', this.state.picture);

    formData.append('userId', this.state.userId);
    // alert(formData.get('userId'))
    this.props.update(formData);

    setTimeout(() => {
      this.close();
    }, 500);

  }



  renderProfileInfo = () => {

    if (this.props.profileDetails) {
      const { user, profile } = this.props.profileDetails;
      return (
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputContact1" className="col-sm-4 control-label">Name</label>
            <div className="col-sm-8">
              <input disabled id="inputContact1" type="text" placeholder="" value={profile.firstName + ' ' + profile.lastName} className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputContact2" className="col-sm-4 control-label">Email</label>
            <div className="col-sm-8">
              <input disabled id="inputContact2" type="email" value={user.email} className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputContact3" className="col-sm-4 control-label">Phone</label>
            <div className="col-sm-8">
              <input disabled id="inputContact3" type="text" value="(123) 465 789" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputContact4" className="col-sm-4 control-label">Mobile</label>
            <div className="col-sm-8">
              <input disabled id="inputContact4" type="text" value="(12) 123 987 465" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputContact6" className="col-sm-4 control-label">City/Metro Area</label>
            <div className="col-sm-8">
              <textarea disabled id="inputContact6" rows="4" className="form-control" value="Some nice Street, 1234"></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputContact8" className="col-sm-4 control-label"> Availability Start Date</label>
            <div className="col-sm-8">
              <input disabled id="inputContact8" type="text" className="form-control" value={profile.availability_start_date} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputContact8" className="col-sm-4 control-label"> Availability End Date</label>
            <div className="col-sm-8">
              <input disabled id="inputContact8" type="text" className="form-control" value={profile.availability_end_date} />
            </div>
          </div>


        </div>
      );
    }
  }



  render() {
    var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);

    return (
      <div>
        <Helmet>
          <title>ProfileDetails</title>
          <meta name="description" content="Description of ProfileDetails" />
        </Helmet>

        <div className="panel panel-default">
          <div className="panel-body">
            <div className="pull-right">
              <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                <MenuItem eventKey="2" onClick={this.open} > Update Profile <em  className="pull-right icon-pencil"></em> </MenuItem>
                <MenuItem eventKey="1">Send by message</MenuItem>
                <MenuItem eventKey="4"><span className="text-warning">Block contact</span></MenuItem>
              </DropdownButton>
            </div>
            <div className='panel-heading' style={styles.primaryDark}>
              <h4 className="text-center" style={headings.tableHeading}>Profile Information</h4>
            </div>
            <Row className="pv-lg">
              <Col lg={2}></Col>
              <Col lg={8}>
                {this.renderProfileInfo()}


                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.changeAll}  >
                      <fieldset>

                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">First Name</label>
                          <Col sm={9}>
                            <input className="form-control" type="text" name="firstName" value={this.state.firstName} placeholder="First Name" required />
                          </Col>
                        </div>

                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">Last Name</label>
                          <Col sm={9}>
                            <input className="form-control" type="text" name="lastName" value={this.state.lastName} placeholder="First Name" required />
                          </Col>
                        </div>

                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">City/Metro Area</label>
                          <Col sm={9}>
                            <select className="form-control" type="select" name="city" value={this.state.city} placeholder="City" >
                              <option>City/Metro Area</option>
                            </select>
                          </Col>
                        </div>

                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">Contribute</label>
                          <Col sm={9}>
                            <select className="form-control" type="select" name="howToContribute" value={this.state.howToContribute}  >
                              <option>How would you like to contribute</option>
                            </select>
                          </Col>
                        </div>

                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">Start Date</label>
                          <Col sm={9}>
                            <input title="Set your availability start date" className="form-control" type="date" name="availability_start_date" value={this.state.availability_start_date} />
                          </Col>
                        </div>

                        <div className="form-group mb">
                          <label className="col-sm-3 control-label mb">End Date</label>
                          <Col sm={9}>
                            <input title="Set your availability end date" className="form-control" type="date" name="availability_end_date" value={this.state.availability_end_date} />
                          </Col>
                        </div>

                        <div className="form-group mb">
                          <label  style={{ marginLeft: '70px' }}>
                            <input type="checkbox" id="checkbox1" name="noCriminal" value={this.state.noCriminal} />
                             No Criminal
                          </label>

                          <label  style={{ marginLeft: '40px' }}>
                            <input type="checkbox" id="checkbox2" name="noMedConditions" value={this.state.noMedConditions} />
                            No Med Conditions
                          </label>
                        </div>

                        <div className="form-group mb">
                          <Col sm={3}>
                          </Col>
                          <Col sm={9}>
                            <input className="form-control" name="picture" type="file" />
                            <label>Upload Profile Photo</label>
                          </Col>
                        </div>

                        <div className="form-group text-center">
                          <Col sm={3}>
                          </Col>
                          <Col sm={6}>
                          <button className="btn btn-primary btn-block">Update Profile</button>
                          </Col>
                          <Col sm={3}>
                          </Col>
                        </div>


                      </fieldset>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Cancel</Button>
                  </Modal.Footer>
                </Modal>


              </Col>
            </Row>
          </div>
        </div>

      </div>
    );
  }
}

ProfileDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profiledetails: makeSelectProfileDetails(),
  currentUser: makeSelectCurrentUser(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    update: (payload) => dispatch(updateAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profileDetails', reducer });
const withSaga = injectSaga({ key: 'profileDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfileDetails);
