/**
 *
 * Profile
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
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {createProfileAction, updateAction} from './actions';
import {makeSelectCurrentUser} from 'containers/App/selectors';
import { isLogin, isProfile } from 'containers/App/selectors';

import 'containers/Signup/style.css';

export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      city:'',
      noCriminal: false,
      noMedConditions: false,
      howToContribute:'',
      availability_start_date:'',
      availability_end_date:'',
      picture: '',
      userId:(this.props.currentUser && this.props.currentUser.user)?this.props.currentUser.user.id : '',
    }
  }

  componentDidMount(){
    if (this.props.currentUser && this.props.currentUser.profile) {
      this.setState({
        firstName: this.props.currentUser.profile.firstName,
        lastName: this.props.currentUser.profile.lastName,
        city: this.props.currentUser.profile.city,
        howToContribute: this.props.currentUser.profile.howToContribute,
        availability_start_date: this.props.currentUser.profile.availability_start_date,
        availability_end_date: this.props.currentUser.profile.availability_end_date,
        noCriminal: this.props.currentUser.profile.noCriminal,
        noMedConditions: this.props.currentUser.profile.noMedConditions,
      });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.isLogin && this.props.profile.done === true) {
      this.props.history.push('/dashboard');
    }
  }
  
  changeAll = (e) => {

    if (e.target.files && e.target.files.length) {
      const name = e.target.name;
      const file = e.target.files[0];
      const { type: fileType } = file;
      if (fileType.indexOf("image/") === -1) {
        alert('File not supported');
        e.target.value='';
        return;
      }

      this.setState({
        [name] : file
      });

    }
    else{
      const { name, value } = e.target;
      this.setState({
        [name] : value,
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
    if (this.props.currentUser && this.props.currentUser.profile) {
      this.props.update(formData);
    }else{
      this.props.create(formData);
    }

  }
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Urban Array Member Application</title>
          <meta name="description" content="Description of Profile" />
        </Helmet>


        {/* Profile Section */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 ">
              
              <div className="user-detail" id="user-detail"  >
               
                <div className="heading">
                  <h1 className="text-center" >Member Application</h1>
                </div>
                <div className="sign-up-box">
                  <Form onChange={this.changeAll} onSubmit={this.handleSubmit} >
                    <div className="sign-up-form">

                      <FormGroup row>
                        <Label for="firstName" sm={3}>First Name</Label>
                        <Col sm={9}>
                          <Input className="form-control" type="text" name="firstName" value={this.state.firstName} placeholder="First Name" required/>
                        </Col>
                      </FormGroup>


                      <FormGroup row>
                        <Label for="lastName" sm={3}>Last Name</Label>
                        <Col sm={9}>
                          <Input className="form-control" type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" required/>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="city" sm={3}>City/Area</Label>
                        <Col sm={9}>
                          <Input className="form-control" type="select" name="city" value={this.state.city} placeholder="City" >
                            <option>City/Metro Area</option>
                          </Input>
                        </Col>
                      </FormGroup>


                      <FormGroup row>
                        <Label for="howToContribute" sm={3}>Contribute</Label>
                        <Col sm={9}>
                          <Input className="form-control" type="select" name="howToContribute" value={this.state.howToContribute}  >
                            <option>How would you like to contribute</option>
                          </Input>
                        </Col>
                      </FormGroup>


                      <FormGroup row>
                        <Label for="startDate" sm={3}>Start Date</Label>
                        <Col sm={9}>
                          <Input title="Set your availability start date" className="form-control" type="date" name="availability_start_date" value={this.state.availability_start_date}  />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="firstName" sm={3}>End Date</Label>
                        <Col sm={9}>
                          <Input title="Set your availability end date" className="form-control" type="date" name="availability_end_date" value={this.state.availability_end_date}  />
                        </Col>
                      </FormGroup>
                      

                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" id="checkbox1" name="noCriminal" value={this.state.noCriminal} />
                          No Criminal
                        </Label> 
                        <Label check style={{ marginLeft: '40px' }}>
                          <Input type="checkbox" id="checkbox2" name="noMedConditions" value={this.state.noMedConditions} />
                          No Med Conditions
                        </Label>
                      </FormGroup>

                      <div className="form-group">
                        <div className="input-icon">
                          <Input className="form-control" name="picture" type="file" />
                          <Label>Upload Profile Photo</Label>
                        </div>
                      </div>
                      
                      <div className="btn-continue">
                        <button className="btn btn-success btn-block">Continue</button>
                      </div>

                    </div>
                  </Form>
                </div>
              
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  isLogin: isLogin(),
  currentUser: makeSelectCurrentUser(),
  currentProfile: isProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(createProfileAction(payload)),
    update: (payload) => dispatch(updateAction(payload)),
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'profile', reducer });
const withSaga = injectSaga({ key: 'profile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Profile);
