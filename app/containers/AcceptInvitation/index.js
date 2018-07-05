/**
 *
 * AcceptInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {
  Row,
  Col,
  FormControl
} from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAcceptInvitation from './selectors';
import reducer from './reducer';
import saga from './saga';
import {findUserAction, invitedUserDataAction} from './actions';
import ContentWrapper from '../../components/Layout/ContentWrapper';

export class AcceptInvitation extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {

      email: '',
      password: '',
      confirmPassword: '',
      passwordNotMatch: '',
      id : (this.props.acceptinvitation && this.props.acceptinvitation.user_Id)
        ? this.props.acceptinvitation.user_Id
          : '',

    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({passwordNotMatch: 'Your password does not match'});
    } else {
      this.setState({passwordNotMatch: ''});

      const passObj = {
        email: (this.props.acceptinvitation.user_data && this.props.acceptinvitation.user_data.user && this.props.acceptinvitation.user_data.user.email)
          ? this.props.acceptinvitation.user_data.user.email
          : '',
        password: this.state.password,

        
      };

      this.props.inviteduserdata(passObj);
      // console.log(this.state.id);
       this.props.history.push('/login');

    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});

  }

  componentDidMount() {
    this
      .props
      .findUser(this.props.match.params.id);

  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Accept Invitation</title>
          <meta name="description" content="Description of AcceptInvitation"/>
        </Helmet>
        <ContentWrapper>
          <Row>
            <Col md={6} className="col-md-offset-3">
              <form
                method="post"
                action="#"
                data-parsley-validate=""
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                noValidate>
                {/* START panel */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="panel-title">Email Verification</div>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="control-label" disabled>Email Address *</label>
                      <FormControl
                        type="text"
                        name="email"
                        value={(this.props.acceptinvitation.user_data && this.props.acceptinvitation.user_data.user && this.props.acceptinvitation.user_data.user.email)
                        ? this.props.acceptinvitation.user_data.user.email
                        : ''}
                        required="required"
                        className="form-control"
                        disabled/>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Password *</label>
                      <p style={{
                        color: 'red'
                      }}>
                        {this.state.passwordNotMatch}
                      </p>
                      <FormControl
                        id="id-password"
                        type="password"
                        name="password"
                        required="required"
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Confirm Password *</label>
                      <FormControl
                        type="password"
                        name="confirmPassword"
                        required="required"
                        data-parsley-equalto="#id-password"
                        className="form-control"/>
                    </div>
                    {/* <div className="required">* Required fields</div> */}
                  </div>
                  <div className="panel-footer">
                    <div className="clearfix">

                      <div className="pull-right">
                        <button type="submit" className="btn btn-success">Proceed</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END panel */}
              </form>
            </Col>
          </Row>
        </ContentWrapper>
      </div>
    );
  }
}

AcceptInvitation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({acceptinvitation: makeSelectAcceptInvitation()});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    findUser: (payload) => dispatch(findUserAction(payload)),
    inviteduserdata: (payload) => dispatch(invitedUserDataAction(payload))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'acceptInvitation', reducer});
const withSaga = injectSaga({key: 'acceptInvitation', saga});

export default compose(withReducer, withSaga, withConnect,)(AcceptInvitation);
