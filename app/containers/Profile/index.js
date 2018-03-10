/**
 *
 * Profile
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
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Form, Input, Label, FormGroup, Col} from 'reactstrap';
import {createProfileAction} from './actions';

export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props, context){
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      city:null,
      noCriminal: false,
      noMedConditions: false,
      howToContribute:null,
      availability:null,
      picture: '',
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
      const name = e.target.name;
      const value = e.target.value;
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
    formData.append('availability', this.state.availability);
    formData.append('noCriminal', this.state.noCriminal);
    formData.append('noMedConditions', this.state.noMedConditions);
    formData.append('picture', this.state.picture);
    
    this.props.create(formData);

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
                  
                      <div className="form-group">
                        <div className="input-icon">
                          <Input className="form-control" type="text" name="firstName" placeholder="First Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <Input className="form-control" type="text" name="lastName" placeholder="Last Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <Input className="form-control" type="select" name="city" placeholder="City" >
                            <option>City/Metro Area</option>
                          </Input>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <Input className="form-control" type="select" name="howToContribute" >
                            <option>How would you like to contribute</option>
                          </Input>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <Input title="Set your availability" className="form-control" type="date" name="availability" placeholder="How to contribute" />
                            {/* <option>Availability</option> */}
                          {/* </Input> */}
                        </div>
                      </div>
                      
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" id="checkbox1" name="noCriminal" />{' '}
                          No Criminal
                        </Label> 
                        <Label check style={{ marginLeft: '40px' }}>
                          <Input  type="checkbox" id="checkbox2" name="noMedConditions" />{' '}
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
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(createProfileAction(payload))
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
