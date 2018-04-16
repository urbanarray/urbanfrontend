/**
 *
 * ResetPassword
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
import makeSelectResetPassword from './selectors';
import reducer from './reducer';
import saga from './saga';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Row, Col, Panel, Button, FormControl, FormGroup } from 'react-bootstrap';
import { setNewPasswordAction } from "./actions";

export class ResetPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props)

    this.state = {
      password: '',
      confirmPassword:'',
      code:null,
      passwordNotMatch: '',
      hide: 'hide',
      show: 'alert alert-success',
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
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordNotMatch: 'Your password does not match' });
    }
    else {
      this.setState({ passwordNotMatch: '' });

      const newPassword = {
        code: this.props.match.params.code,
        password: this.state.password
      };

      this.props.setNewPassword(newPassword);
      
    }
  }
  
  handleClick = (e) => {
    this.setState({
      show: 'hide'
    });
  }

  componentDidUpdate(){

  }

  printErrors = (attribute) => {
    const { serverError } = this.props.resetpassword;

    if (serverError !== null && serverError) {
      return serverError.map((item) => {
        if (item.field && item.field.toLowerCase() === attribute.toLowerCase() && item.messages && item.messages.length) {
          return item.messages[0];
        }
      })
    }

    return null;
  }
  
  renderMessage = () => {
    return (
      <div>
        <p className={(this.props.resetpassword.done === true) ? this.state.show : this.state.hide} >
          Your password has been changed successfully.
          <span className="pull-right" onClick={this.handleClick} > X </span>
        </p>
      </div>
    );
  }



  render() {
    return (

        <ContentWrapper>
          <Helmet>
            <title>Reset Password</title>
            <meta name="description" content="Description of ResetPassword" />
          </Helmet>
        
          <div className="row">
            <Col sm={6} className="col-sm-offset-3">
              { /* START panel */}
              <Panel header="Stacked form" style={{ padding: '30px' }}>
                <form role="form" onChange={this.handleChange} onSubmit={this.handleSubmit} >
                {(this.props.resetpassword.done === true) ? this.renderMessage() : ''}

                 <h4>Reset Password</h4>
                  <FormGroup>
                    <label>Password</label>
                    <FormControl
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control" />
                    
                    <div className="alert-danger"  >
                       {this.printErrors(`password`)}
                    </div>
                    <p style={{ color: 'red' }} > {this.state.passwordNotMatch} </p>

                  </FormGroup>
                  
                  <FormGroup>
                    <label>Confirm Password</label>
                    <FormControl
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control" />
                  </FormGroup>


                  <div className="text-center">
                    <Button type="submit" bsStyle="default" > Reset Password </Button>
                  </div>
                </form>
              </Panel>
              { /* END panel */}
            </Col>
          </div>
        </ContentWrapper> 

    );
  }
}

ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  resetpassword: makeSelectResetPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setNewPassword: (payload) => (dispatch(setNewPasswordAction(payload))),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'resetPassword', reducer });
const withSaga = injectSaga({ key: 'resetPassword', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ResetPassword);
