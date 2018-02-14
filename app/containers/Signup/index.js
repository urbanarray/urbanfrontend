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
import SocialLogin from 'react-social-login'


export class Signup extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
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

                    <div className="input-group">
                    </div>
                   
                    <div className="or"><span>or</span></div>
                    
                    <div className="social-btn">
                      <div className="btn-facebook">
                        <button className="btn btn-default btn-block">Continue With Facebook</button>
                      </div>
                      <div className="btn-google">
                        <button className="btn btn-default btn-block">Continue With Google</button>
                      </div>
                      <div className="btn-linkedin">
                        <button className="btn btn-default btn-block">Continue With LinkedIn</button>
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

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
