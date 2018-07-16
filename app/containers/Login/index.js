/**
 *
 * Login
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import 'containers/Signup/style.css';
import {Form} from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import LinkedIn from 'react-linkedin-login';
import { socialSignupAction,linkedinAction, loginAction } from './actions';
import { isLogin, isProfile } from 'containers/App/selectors';
import { Link } from 'react-router-dom';

export class Login extends Component { // eslint-disable-line react/prefer-stateless-function
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
      // redirect_uri: "http://localhost:8000/login",
      redirect_uri: "http://mvp.urbanarray.org/login",

    }

  }

  componentDidMount(){
    // console.log(this.props.currentProfile)
  }

  componentDidUpdate() {
    // console.log(this.props.currentProfile, this.props.isLogin );
    if (this.props.login.done === true && this.props.currentProfile === true) {
      this.props.history.push('/dashboard');
    }
    else if (this.props.login.done === true && this.props.currentProfile === false){
      this.props.history.push('/profile');
    }


  }


  responseGoogle = (response) => {
    if (response && response.profileObj) {
      
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
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const loginObj = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.customLogin(loginObj);

    // this.props.history.push('/dashboard');
  }

  printError = (attribute) => {
    const { serverError } = this.props.login;

    if (serverError !== null && serverError) {
          return serverError.message;
    }

    return null;
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
                        <div className="alert-danger"  >
                          {this.printError()}
                        </div>

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
                        <input type="checkbox" id="checkbox" /></span><span className="remember">remember me?</span><Link to="/forgetpassword"> Forget password </Link></div>
                      <div className="or"><span>or</span></div>
                      
                    </Form>
  


                    <div className="social-btn">

                      <div className="btn-facebook">
                        <FacebookLogin
                          /* app id on localhost  
                           appId="405789706540584" 
                          */
                          
                          /* app id for online app 
                          */
                          appId="175561819906444"
                          
                          /* autoLoad={true} */
                          fields="name,email,picture"
                          scope="email,public_profile,user_friends,user_actions.books"
                          callback={this.responseFacebook}
                          cssClass="btn btn-default btn-block"
                        />
                      </div>

                      <div className="btn-google">
                        <GoogleLogin
                          /* below is clientId for local host 
                           clientId="1037020038566-lq1c87c2kqvkgihcqvq2a370d242t4r3.apps.googleusercontent.com" 
                          */

                          /* below is clientId for online app 
                          */
                          clientId="867326421211-ph6qas651s4ejcrtpi4l82vc472vcqfc.apps.googleusercontent.com"

                          buttonText="Login with Google"
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}
                          className="btn btn-default btn-block"
                        />
                      </div>

                      <div className="btn-linkedin">
                        <LinkedIn
                          /* clientId for localhost 
                          clientId='77dory0vf88a8p'
                          */
                          
                          /* clientId for online app 
                          */
                          clientId='77j1oh6z3z5y4s'

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
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  isLogin: isLogin(),
  currentProfile: isProfile()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    socialSignup: (payload) => dispatch(socialSignupAction(payload)),
    linkedin: (payload) => dispatch(linkedinAction(payload)), 
    customLogin: (payload) => dispatch(loginAction(payload))
  }; 
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Login);
