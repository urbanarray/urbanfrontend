/**
 *
 * Login
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
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import 'containers/Signup/style.css';
import {Form} from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import LinkedIn from 'react-linkedin-login';
import { socialSignupAction,linkedinAction, loginAction } from './actions';
import { isLogin } from 'containers/App/selectors';
import { isProfile } from 'containers/App/selectors';
import { browserHistory } from 'react-router';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      socialSignup: {
        name: '',
        email: '',
        accessToken: '',
        expiresIn: null,
        picture: null,
        source: '',
        userId: '',
      },
      email:'',
      password:'',
      redirect_uri: "http://localhost:8000/login",

    }

  }

  componentDidMount(){
    // console.log(this.props.currentProfile)
  }

  componentDidUpdate() {
    console.log(this.props.currentProfile, this.props.isLogin );
    if (this.props.login.done === true && this.props.currentProfile === true) {
      this.props.history.push('/dashboard');
    }
    else if (this.props.login.done === true && this.props.currentProfile === false){
      this.props.history.push('/profile');
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


  callbackLinkedIn = (response) => {
    const linkedinSignup = {
      code: response.code,
      redirect_uri: this.state.redirect_uri,
    };
    // console.log(response.code);
    this.props.linkedin(linkedinSignup);
  }

  // handle form on change
  handleChange = (e) => {
    
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password)
    const loginObj = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.customLogin(loginObj);

    // this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>

        {/* SignIn Section */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 ">
              <div className="user-detail" id="user-detail"  >
                <div className="heading">
                  <h1 className="text-center" >Login</h1>
                </div>
                <div className="sign-up-box">
                  <div className="sign-up-form">

                    <Form onChange={this.handleChange} onSubmit={this.handleSubmit} >

                      <div className="form-group">
                        <div className="input-icon">
                          <input className="form-control" name="email" type="email" placeholder="Email" required />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-icon">
                          <input className="form-control" name="password" type="password" placeholder="Password" required />
                        </div>
                      </div>
                      
                      <div className="btn-continue">
                        <button className="btn btn-success btn-block">Continue</button>
                      </div>
                      <div className="input-group"><span className="input-group-addon">
                        <input type="checkbox" id="checkbox" /></span><span className="remember">remember me?</span><a href="#">forget password</a></div>
                      <div className="or"><span>or</span></div>
                      
                    </Form>
  

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
                          clientSecret='GwXncBLeaPiCMJ0w'
                          callback={this.callbackLinkedIn}
                          className="btn btn-default btn-block"
                          text='Login with LinkedIn'
                        />
                      </div>

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

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  isLogin: isLogin(),
  currentProfile: isProfile(),
  
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    socialSignup: (payload) => dispatch(socialSignupAction(payload)),
    linkedin: (payload) => dispatch(linkedinAction(payload)), 
    customLogin: (payload) => dispatch(loginAction(payload)), 

  }; 
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
