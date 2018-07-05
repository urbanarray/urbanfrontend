/**
 *
 * Landing
 *
 */
import { createStructuredSelector } from 'reselect';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Row, Col} from 'react-bootstrap';
import LandingForm from './LandingForm';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { submitCodeAction } from './actions'
import saga from './saga';
import reducer from './reducer';
import SUBMIT_CODE_ACTION from './constants'
import { makeSelectSubmitCode, makeSelectLanding} from './selectors';



export class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
      message: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length === 6) return 'success';
    else if (length > 6) return 'warning';
    else if (length < 6) return 'warning';
    return null;
  }

  handleChange(e) {
    if (this.state.value.length === 6) {
      this.setState({message: "", value: e.target.value})
    } else {
      this.setState({ value: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const submissionLength = this.state.value.length;
    if (submissionLength < 6 || submissionLength > 6) {
      this.setState({message: "The code needs to be exactly 6 characters"})
    } else {
      this.setState({message: ""})
     
    }
    this.props.create(this.state.value)
  }

  render() {

    return (
        <div className='container text-center' style={{padding: '5%'}}>
          <Row>
            <Col xs={12} sm={8}>
              <h1>Welcome to the Urban Array MVP Demo App.</h1>
              <h3>This website is for testing and design purposes only.  THIS IS NOT A LIVE SITE.  Your data will NOT be saved.</h3>
              <h3>Please Enter your Invitation PASSPHRASE to the right (or below, on mobile) to begin.</h3>
              <p>For more info about Urban Array, <a href="https://urbanarray.org/">please click here to visit our website</a></p>
            </Col>

            <Col xs={12} sm={4}>
              <LandingForm
                state={this.state}
                getValidationState={this.getValidationState} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </Col>
          </Row>
        </div>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({

  landing: makeSelectLanding(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) =>dispatch(submitCodeAction(payload)),
  };
}

const withConnect = connect( mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'landing', reducer });
const withSaga = injectSaga({ key: 'landing', saga });

export default compose(
  withReducer,
  withSaga, 
  withConnect,
)(Landing);
