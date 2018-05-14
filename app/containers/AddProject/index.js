/**
 *
 * AddProject
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Grid, Row,Col,Panel,Button,FormControl
} from 'react-bootstrap';
import ContentWrapper from '../../components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddProject from './selectors';
import reducer from './reducer';
import saga from './saga';
import {makeSelectCurrentUser} from 'containers/App/selectors';
import {addProjectAction} from './actions';

export class AddProject extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      userId:(this.props.currentUser && this.props.currentUser.user)?this.props.currentUser.user.id : '',
      show: false,
      // show:'alert alert-success',
    }
  }

  handleChange = (e) => {

    const {name, value} = e.target;
    this.setState({[name]: value});
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // userid = this
    this.props.addPro({name: this.state.name, userId: this.state.userId});
      setTimeout(() => {
        this.setState(
          {'name':''}
        );
        
      }, 500);
      this.handleClick(true);
  }

  handleClick = (value) => {
    this.setState({
      show: value,
    });

  }

  renderFleshmsh = () => {
    return ( 
      <div className={(this.state.show == true ) ? 'show' : 'hide'} >
        <div className="alert alert-success">
         <span className="pull-right"  onClick={(e) => this.handleClick(false)} > X </span>
          Project Created
        </div>
      </div>

    )
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>AddProject</title>
          <meta name="description" content="Description of AddProject" />
        </Helmet>
        <ContentWrapper>
          <Row>
            <Col md={10} className="col-md-offset-1">
              <form method="post" action="#" data-parsley-validate="" onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
                
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="panel-title">Create Project</div>
                  </div>
                  <div className="panel-body">
                    {this.renderFleshmsh()}
                    <div className="form-group">
                      <label className="control-label">Name *</label>
                      <p style={{
                        color: 'red'
                      }}>
                        {/* {this.state.projectname} */}
                      </p>
                      <FormControl
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Enter Project Name"
                        value={this.state.name}
                        required="required"
                        className="form-control"/>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <div className="clearfix">

                      <div className="pull-right">
                        <div className="">
                          <button type="submit" disabled={!this.state.name} className="btn btn-success">Create Project</button>
                        </div>
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

AddProject.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addproject: makeSelectAddProject(),
  currentUser: makeSelectCurrentUser(),
});
 
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addPro : (payload) => dispatch(addProjectAction(payload)),
    
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addProject', reducer });
const withSaga = injectSaga({ key: 'addProject', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddProject);
