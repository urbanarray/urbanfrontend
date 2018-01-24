/**
 *
 * Login
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
import makeSelectLogin, { isGuestUser } from './selectors';
import reducer from './reducer';
import saga from './saga';

import styled from 'styled-components';

import { NavLink, Route, Router, browserHistory, Redirect } from 'react-router-dom';

import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from '../../../assets/images/logo.png';

import {setCredentialsAction} from './actions';
import {isLogin} from 'containers/App/selectors';

const LoginWraper = styled.div`
  position: absolute;
  width: 100% !important;
  min-height: 100% !important;
  background: #27ae60 !important;
  color:white;

  .container{
    padding : 100px;
  }
`;

 
const textStyle = {
  marginBottom: '16px'
}

const Caption = styled.h4`
  font-size: 18px;
  margin: 18px 0 0;
`;


export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.setCredentials({
      email: this.state.email,
      password: this.state.password,

    });
    
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  componentDidUpdate(){
    if (this.props.isLogin) {
      this.props.history.push('/home');
    }
  }

  componentDidMount() {
    if (this.props.isLogin) {
      this.props.history.push('/home');
    }     
  }

  printErrors = (attribute) => {
    const { serverError } = this.props.login;
    if (serverError !== null && serverError) {
      return serverError.message;
     
    }

    
    return null;
  }



  render() {
    
    return (
      <LoginWraper>

        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login" />
        </Helmet>
        

        <div className='container padding_10'>

        <div className= 'row text-center' >
          <div className= 'col-md-12' >
            <div className= 'logo ' >
              <img src = {logo} />
            </div>

            <h3 className='padding_10' > Login </h3>
          
          </div>
        </div>


          <div className='row'> 
           
            <div className='col-md-8 offset-md-2' > 
            

              <Form onSubmit={this.handleSubmit} >
            

                <FormGroup row>
                  <Label for="email" sm={3}>Email</Label>
                  <Col sm={9}>
                    <Input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" required/>

                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="password" sm={3}>Password</Label>
                  <Col sm={9}>
                    <Input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" placeholder="Password" required/>

                  </Col>
                </FormGroup>             
                <FormGroup row>
                  <Label for="password" sm={3}></Label>
                  <Col sm={9}>
                    
                    <div className="alert-danger"  >
                      {this.printErrors(`password`)}
                    </div>
                  </Col>
                </FormGroup>             
               
               

                <FormGroup row>
                  <Col sm={3}></Col>

                  <Col sm={9}>
                    <Button className='btn btn-success submit btn-lg btn-block' >Login</Button>
                  </Col>
                </FormGroup>

              </Form>
            
            </div>

   

          </div>
        </div>


      </LoginWraper>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  isLogin: isLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setCredentials: (credentials) => dispatch(setCredentialsAction(credentials)),

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
