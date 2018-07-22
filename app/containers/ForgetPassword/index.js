/**
 * ForgetPassword
**/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectForgetPassword from './selectors';
import reducer from './reducer';
import saga from './saga';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Col, Panel, Button, FormControl, FormGroup } from 'react-bootstrap';
import { sendEmailAction } from './actions';


export class ForgetPassword extends Component { // eslint-disable-line react/prefer-stateless-function  

  constructor(props) {
    super(props);

    this.state = {
      email:'',      
      hide:'hide',
      show:'alert alert-success',
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
    const email = this.state.email;
    this.props.sendEmail({'email':email});
  }

  handleClick = () => {
    this.setState({
      show:'hide'
    });
  }

  renderMessage = () => {
    return (
      <div>
        <p className={(this.props.forgetpassword.done === true) ? this.state.show : this.state.hide } >
         An email has been sent to you. 
          <span className="pull-right"  onClick={this.handleClick} > X </span> 
        </p>
      </div>
    );
  }

  render() {
    return (
      <ContentWrapper>
        <div className="row">
          <Col sm={6} className="col-sm-offset-3">
              { /* START panel */ }
              <Panel header="Stacked form" style={{padding:'30px'}}>
                  <form role="form" onChange={this.handleChange} onSubmit={this.handleSubmit} >

                    {(this.props.forgetpassword.done === true) ? this.renderMessage() : ''}
                     
                      <h4> A link will be send to your email to set new password. </h4>
                      <FormGroup>
                          <label>Email address</label>
                          <FormControl
                            type="email"
                            name="email" 
                            placeholder="Enter Email" 
                            className="form-control" />
                      </FormGroup>
                      <div className="text-center">
                        <Button type="submit" bsStyle="default" bsSize="small">Submit</Button>
                      </div>
                  
                  </form>
              </Panel>
              { /* END panel */ }
          </Col>
        </div>
      </ContentWrapper>
    );
  }
}

ForgetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  forgetpassword: makeSelectForgetPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sendEmail : (payload) => dispatch(sendEmailAction(payload))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgetPassword', reducer });
const withSaga = injectSaga({ key: 'forgetPassword', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgetPassword);
