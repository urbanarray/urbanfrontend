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

export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props, context){
    super(props);

    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
      noCriminal: false,
      noMedConditions: false,
      howToContribute:null,
      availability:null,
      profilePicture:null,  
    }
  }

  changeAll = () => {
    // alert('hello')
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.history.push('dashboard');
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
            <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1  col-12">
              <Form className="user-detail" id="user-detail" onChange={this.changeAll} onSubmit={this.handleSubmit} >
               
                <div className="heading">
                  <h1 className="text-center" >Member Application</h1>
                </div>
                <div className="sign-up-box">
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
                          <Input className="form-control" type="select" name="howToContribute" >
                            <option>Availability</option>
                          </Input>
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
                     
                      
                      <FormGroup>
                          <Input  type="file" name="profilePicture" />
                      </FormGroup>
                      
                    <div className="btn-continue">
                      <button className="btn btn-success btn-block">Continue</button>
                    </div>

                  </div>
                </div>
              
              </Form>

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
