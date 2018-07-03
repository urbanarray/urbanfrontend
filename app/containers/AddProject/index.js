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

import { Grid, Row, Col, Panel, Button, FormControl, Textarea, Modal, FormGroup } from 'react-bootstrap';
import ContentWrapper from '../../components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import  {makeSelectAddProject, makeSelectListPlaces} from './selectors';
import reducer from './reducer';
import saga from './saga';``
import {makeSelectCurrentUser} from 'containers/App/selectors';
import {addProjectAction, listPlacesAction} from './actions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class AddProject extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      projectType: '',
      place: '',
      locationname: '',
      date: '',
      time: '',
      pgoals: '',
      pkeywords: '',
      userId:(this.props.currentUser && this.props.currentUser.user)?this.props.currentUser.user.id : '',
      show: false,
      // show:'alert alert-success',
    }
    this.handleQuill = this.handleQuill.bind(this)
  }
  

  open = () => {
    this.setState({
      openModel: true,
    })
  }

  close = () => {
    this.setState({
      openModel: false,
    });
  }


  handleChange = (e) => {

    const {name, value} = e.target;
    this.setState({[name]: value});
    
  }

  handleQuill = (value) => {

    this.setState({
      pgoals: value,
    });
    
  }

  

  handleSubmit = (e) => {
    e.preventDefault();

    // userid = this
    this.props.addPro(
      {
        name: this.state.name, 
        description: this.state.description, 
        projectType: this.state.projectType,
        place: this.state.place,
        locationname: this.state.locationname,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        time: this.state.time,
        pgoals: this.state.pgoals,
        pkeywords: this.state.pkeywords,
        userId: this.state.userId});
      setTimeout(() => {
        this.setState(
          {
            name:'',
            description: '',
            projectType: 1,
            place: '',
            locationname: '',
            startDate: '',
            endDate:'',
            pgoals: '',
            pkeywords: '',
            time: '',
          }
        );
        
      }, 500);
      this.handleClick(true);
      this.close();
    }
    
    
    handleClick = (value) => {
    this.setState({
      show: value,
    });
  }

  componentDidMount(){
    this.props.listPlace();
  }

  renderSelect = () => {
    if(this.props.addproject && this.props.addproject.list_places && this.props.addproject.list_places.places){
      const places = this.props.addproject.list_places.places; 
    
      return places.map((place) => {
        return (
            <option  key={Math.random()} value={place._id}>{place.name}</option>
    
        )
      })
    } 

  }



  getValidationState(value) {
    const item = this.state[value];
    const length = item.length;
    if (length > 1) return 'success';
    // else if (length > 1) return 'warning';
    else if (length < 1) return 'error';
    return null;
  }




  render() {
    return (
      <div>

        <button onClick={this.open} className="btn btn-primary" > Add New Project </button>

        <Modal show={this.state.openModel} onHide={this.close} >
          <Modal.Header closeButton>
            <Modal.Title>Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>  

            <Row>
              <Col md={12} className="col-md-offset-0">
                <form method="post" action="#" data-parsley-validate="" onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
                  

                  
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title"></div>
                    </div>
                    <div className="panel-body">
                      <Row> 
                        <Col md={6} >

                          <FormGroup
                            validationState={this.getValidationState('name')}
                          >
                        
                            <label className="control-label">Project Name *</label>
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
                          </FormGroup>

                          <FormGroup
                            validationState={this.getValidationState('projectType')}
                          >
                            <label className="control-label">Project Type</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <select value={this.state.projectType} name="projectType" className="form-control">
                              <option>Select Project Type</option>
                              <option value={1}>Urban Farming</option>
                              <option value={2}>Building Rehab</option>
                            </select>
                          </FormGroup>

                          
                          <FormGroup
                            validationState={this.getValidationState('place')}
                          >
                          
                            <label className="control-label">Place</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <Row>
                            <Col md={6}>
                            <select value={this.state.place} name="place" className="form-control" required>
                              <option> Select Place</option>
                              {this.renderSelect()}
                            </select>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            </Col>
                            
                            <Col md={6}>
                            <FormControl
                              id="locationname"
                              type="locationame"
                              name="locationname"
                              placeholder="Location Nickname"
                              value={this.state.nickname}
                              required="required"
                              className="form-control"/>
                              </Col>
                              </Row>
                          </FormGroup>
                         
                        </Col>    

                        <Col md={6}>
                          <FormGroup
                            validationState={this.getValidationState('description')}
                          >
                            <label className="control-label">Description</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <FormControl
                              id="description"
                              type="description"
                              name="description"
                              rows="5"
                              componentClass="textarea"
                              placeholder="Description"
                              value={this.state.description}
                              required="required"
                              className="form-control" />
                          </FormGroup>

                          <FormGroup
                            validationState={this.getValidationState('time')}
                          >
                            <label className="control-label">Time</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <FormControl
                              id="time"
                              type="time"
                              name="time"
                              rows="5"
                              placeholder="time"
                              value={this.state.time}
                              className="form-control" />
                          </FormGroup>                          

                        </Col>

                      </Row> 
                      
                      <Row> 
                        <Col md={6}>
                          <FormGroup
                            /* validationState={this.getValidationState('startDate')} */
                          >
                            <label className="control-label">Start Date</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <FormControl
                              id="date  "
                              type="date"
                              name="startDate"
                              placeholder="Start Date"
                              value={this.state.startDate}
                              className="form-control" />
                          </FormGroup>

                        </Col>
                        <Col md={6}>
                          <FormGroup
                            /* validationState={this.getValidationState('endDate')} */
                          >
                            <label className="control-label">End Date</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <FormControl
                              id="date  "
                              type="date"
                              name="endDate"
                              placeholder="End Date"
                              value={this.state.endDate}
                              className="form-control" />
                          </FormGroup>
                        </Col>

                        <Col md={12}>
                          <FormGroup
                            validationState={this.getValidationState('pgoals')}
                          >
                            <label className="control-label">Project Goals</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <ReactQuill 
                              name="pgoals"
                              value ={this.state.pgoals}
                              required="required"
                              onChange={this.handleQuill}
                              />
                          </FormGroup>
                         
                        </Col>

                        <Col md={12}>
                          <FormGroup
                            /* validationState={this.getValidationState('pkeywords')} */
                          >
                            <label className="control-label">Project Keywords</label>
                            <p style={{
                              color: 'red'
                            }}>
                              {/* {this.state.projectname} */}
                            </p>
                            <FormControl
                              type="text"
                              name="pkeywords"
                              componentClass="input"
                              placeholder="Project Keywords"
                              value={this.state.pkeywords}
                              required="required"
                              className="form-control" />
                          </FormGroup>
                          
                        </Col>  
                      </Row> 

                    </div>
                    <div className="panel-footer">
                      <div className="clearfix">

                        <div className="pull-right">
                          <div className="">
                            <button type="submit" disabled={!this.state.name || !this.state.description } className="btn btn-success">Create Project</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

             
                  {/* END panel */} 
                </form>
              </Col>
            </Row>
            
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-danger" onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>

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
  ListPlace: makeSelectListPlaces(),
  
});
 
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addPro : (payload) => dispatch(addProjectAction(payload)),
    listPlace: () => dispatch(listPlacesAction()),

    
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
