/**
 *
 * Signup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignup from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './style.css';

import {Form} from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import LinkedIn from 'react-linkedin-login';
import { socialSignupAction} from './actions';

export class Signup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      socialSignup:{
        name: '',
        email: '',
        accessToken:'',
        expiresIn:null,
        picture:null,
        source:'',
        userId:'',
      },

    }

  }

  responseGoogle = (response) => {
  
    const social = this.state.socialSignup;
    social['accessToken'] = response.accessToken;
    social['email'] = response.profileObj.email;
    social['name'] = response.profileObj.name;
    social['picture'] = response.profileObj.imageUrl;
    social['expiresIn'] = response.tokenObj.expires_in;
    social['userId'] = response.googleId;
    social['source'] = "google";

    this.props.socialSignup(this.state.socialSignup);
  }

  responseFacebook = (response) => {
  
    const social = this.state.socialSignup;
    social['accessToken'] = response.accessToken;
    social['email'] = response.email;
    social['name'] = response.name;
    social['picture'] = response.picture.data.url;
    social['expiresIn'] = response.expiresIn;
    social['userId'] = response.userID;
    social['source'] = "facebook";

    this.props.socialSignup(this.state.socialSignup);    
  }

  callbackLinkedIn = ({ code, redirectUri, response }) => {
    console.log(code, redirectUri, response)
  }
   
  // handle form on change
  changeAll = () => {
    // alert('hello test on change');  
  }

  handleSubmit = (e) => {
    
    e.preventDefault();
    this.props.history.push('profile');
    // alert('hello to you test');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Description of Signup" />
        </Helmet>

        {/* SignIn Section */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1  col-12">
              <div className="user-detail" id="user-detail" onChange={this.changeAll} onSubmit={this.handleSubmit} >
                <div className="heading">
                  <h1 className="text-center" >Signup</h1>
                </div>
                <div className="sign-up-box">
                  <div className="sign-up-form">
                  
                    <Form>
                      
                      <div className="form-group">
                        <div className="input-icon">
                          <input className="form-control" type="text" placeholder="Email" />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <div className="input-icon">
                          <input className="form-control" type="text" placeholder="Username" />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <input className="form-control" type="password" placeholder="Password" />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <input className="form-control" type="confirmPassword" placeholder="Confirm Password" />
                        </div>
                      </div>

                      <div className="btn-continue">
                        <button className="btn btn-success btn-block ">Continue</button>
                      </div>

                    </Form>

                    <div className="or"><span>or</span></div>
                    
                    <div className="social-btn">

                      <div className="btn-facebook">
                        <FacebookLogin
                          appId="405789706540584"
                          /* autoLoad={true} */
                          fields="name,email,picture"
                          scope="email,public_profile,user_friends,user_actions.books"
                          callback={this.responseFacebook}
                          cssClass="btn btn-default btn-block"
                        />
                      </div>

                      <div className="btn-google">
                        <GoogleLogin
                          clientId="1037020038566-lq1c87c2kqvkgihcqvq2a370d242t4r3.apps.googleusercontent.com"
                          buttonText="Login with Google"
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}
                          className="btn btn-default btn-block"
                        />
                      </div>

                      <div className="btn-linkedin">
                        <LinkedIn
                          clientId='77dory0vf88a8p'
                          callback={this.callbackLinkedIn}
                          className="btn btn-default btn-block"
                          text='Login with LinkedIn' />
                      </div>

                    </div>

                    {/* Adding social button here */}

                    <div className="social-btn" >                     
                    </div>


                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    socialSignup: (payload) => dispatch(socialSignupAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Signup);
