/**
 *
 * ListProjects
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import {Form , FormGroup, Label, Input, Ellipsis, Last, First, Prev, Next, Item, Grid, Row, Col, Panel, Button, Table, Pagination,Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListProjects from './selectors';
import reducer from './reducer';
import saga from './saga';


import * as a from "./actions";


export class ListProjects extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      place: '',
      date: null,
      time: null,
      pgoals: '',
      pkeywords: '',
      showModal: false,
      showDeleteModel: false,
      
      toedit: {
        name: '',
        description: '',
        place: '',
        date: null,
        time: null,
        pgoals: '',
        pkeywords: '',
      },
      modal_delete: null,
      page_no: 1,
    };
  }

  close = () => {
    this.setState({
      showModal: false
    });
  }

  closedelete = () => {
    this.setState({
      showDeleteModel: false,
    });
  }


  open = (obj) => {
    this.setState({
      showModal: true,

      toedit: obj, 
    });
  }

  openDelete = (id) => {
    this.setState({
      showDeleteModel: true,
      modal_delete: id
    });
  }

  projectFullInfo = (id) => {
  
    this.props.history.push('projectView/' + id);
    
  }


  changeAll = (e) => {
    const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
  }

   handleSubmit = (e) => {
    e.preventDefault();
  
     this.props.update(this.state.toedit);
     this.close()
  }

  handleClick = (value) => {
    this.setState({
      show: value,
    });

  }

  handleUpdateChange =(e) => {
    const name =  e.target.name;
    const value = e.target.value;
    const toedit = this.state.toedit;

    toedit[name] = value;
    this.setState({
      toedit: toedit,
    });
  }

  componentDidMount(){
    this.props.listprojects()
  }


  handleRemove = async (proId) => {
    await this.props.deleteProject(proId);
    await this.props.listprojects();
    this.closedelete();
  }

  handlePagination = (no) => {
    this.setState({
      page_no: no
    }, () => {
      this.props.getPagination(this.state.page_no);
    })
  }


  listPojects = () => {
    const prolists = (this.props.projects.list_projects && this.props.projects.list_projects.docs) ? this.props.projects.list_projects.docs : [] ;

    if (prolists && prolists.length > 0) {
      return prolists.map((projects) => {
        
          return(
            <tr key={Math.random()} >
              <td> {projects.name} </td>


              <td>{projects.description}</td>
              
              <td>


                <button className='btn btn-labeled btn-danger mr btn btn-labeled btn-danger mr-default pull-right' onClick={() => this.openDelete(projects._id)}>
                    <span  className="btn-label" > <i className="fa fa-times"> </i> </span> Delete </button>  
                
                
                <button  className='btn btn-labeled btn-success mr btn btn-labeled btn-success mr-default pull-right' onClick={() => this.open(projects)}> 
                    <span className="btn-label" ><i className="fa fa-check"></i></span> Update</button> 
                    

                <button className='btn btn-labeled btn-info mr btn btn-labeled btn-info mr-default pull-right' onClick={() => this.projectFullInfo(projects._id)}>
                  <span className="btn-label" > <i className="fa fa-info"> </i> </span> Info </button>
              
              </td>
              
            </tr>
          );
        
      });
    }
    
  }
  render() {
    return (
      <ContentWrapper>
      
        <Helmet>
          <title>Volunteer</title>
          <meta name="description" content="Description of Volunteer" />
        </Helmet>
            { /* START table-responsive */}
            <Table id="table-ext-1" responsive bordered hover>
              <thead>
              </thead>
              <tbody>
              {this.listPojects()}
              </tbody>
             
            </Table>

            <Row>
              <Col  className="text-center">
                <Pagination>
                  <Pagination.Prev onClick={(e) => this.state.page_no > 1 && this.handlePagination(this.state.page_no - 1)}/>
                  <Pagination.Item onClick={(e) => this.handlePagination(1)} active={this.state.page_no === 1} >{1}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(2)} active={this.state.page_no === 2} >{2}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(3)} active={this.state.page_no === 3} >{3}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(4)} active={this.state.page_no === 4} >{4}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(5)} active={this.state.page_no === 5} >{5}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(6)} active={this.state.page_no === 6} >{6}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(7)} active={this.state.page_no === 7} >{7}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(8)} active={this.state.page_no === 8} >{8}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(9)} active={this.state.page_no === 9} >{9}</Pagination.Item>
                  <Pagination.Item onClick={(e) => this.handlePagination(10)} active={this.state.page_no === 10} >{10}</Pagination.Item>
                  <Pagination.Next onClick={(e) => this.state.page_no < 10 && this.handlePagination(this.state.page_no + 1)}/>
                </Pagination>;
              </Col>
            </Row>
          
          
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton >
              <Modal.Title>Update Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.changeAll}  >
                <fieldset>
                  
                  <div className="form-group mb">
                    <Row>
                        <label className="col-sm-3 control-label mb">Project Name</label>
                        <Col md={8} >
                          <input onChange={this.handleUpdateChange} className="form-control" type="text" name="name" value={this.state.toedit.name} placeholder="Project Name" required />
                        </Col>
                    </Row>
                    
                    <Row>
                      <label className="col-sm-3 control-label mb">description</label>
                      <Col md={8}>
                        <textarea rows="5" style={{marginTop: '10px'}} onChange={this.handleUpdateChange} className="form-control" type="text" name="description" value={this.state.toedit.description} placeholder="description" required />
                      </Col>

                    </Row>

                    <Row>
                      <label className="col-sm-3 control-label mb">Place</label>
                      <Col sm={8}>
                      <input onChange={this.handleUpdateChange} style={{marginTop: '10px'}} className="form-control" type="text" name="place" value={this.state.toedit.place} placeholder="place"/>
                      </Col>
                    </Row>
                    
                    <Row>
                      
                      <label className="col-sm-3 control-label mb">date and Time</label>
                      {/* <Col sm={4}>
                        <input rows="5" onChange={this.handleUpdateChange} className="form-control" type="text" name="date" value={this.state.toedit.date} placeholder="date" required />
                      </Col> */}
                      <Col md={8}>
                        <input rows="5" style={{marginTop: '10px'}} onChange={this.handleUpdateChange} className="form-control" type="text" name="time" value={this.state.toedit.time} placeholder="time" required />
                      </Col>

                    </Row>
                    
                    <Row>
                      <label className="col-sm-3 control-label mb">Project Goals</label>
                      <Col sm={8}>
                      <textarea rows="3" style={{marginTop: '10px'}} onChange={this.handleUpdateChange} className="form-control" type="text" name="pgoals" value={this.state.toedit.pgoals} placeholder="Project Goals"/>
                      </Col>
                    </Row>

                    <Row>
                      <label className="col-sm-3 control-label mb">Project keywords</label>
                      <Col sm={8}>
                      <textarea rows="3" style={{marginTop: '10px'}} onChange={this.handleUpdateChange} className="form-control" type="text" name="pkeywords" value={this.state.toedit.pkeywords} placeholder="Project Keywords"/>
                      </Col>
                    </Row>


                  </div>

                </fieldset>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleSubmit} disabled={!this.state.name}>Update</Button>
              <Button onClick={this.close}>Cancel</Button>
            </Modal.Footer>
          </Modal>

          {/* delete model */}

          <Modal show={this.state.showDeleteModel} onHide={this.closeDelete}>
            <Modal.Body>
              
              <div className="form-group mb text-center">
                <h3 className="p-v-20 fw-i">Are You Sure To Delete This Project?</h3>
                  <button className="btn btn-labeled btn-lg btn-warning mr btn btn-labeled btn-warning mr-default" onClick={this.closedelete}>
                   <span className="btn-label">
                     <i className="fa fa-warning"></i>
                   
                   </span> No
                   </button>
                  <button className="btn btn-labeled btn-danger btn-lg mr btn btn-labeled btn-danger  mr-default" onClick={() => this.handleRemove(this.state.modal_delete)}>
                   <span className="btn-label">
                    <i className="fa fa-check">
                    </i>
                   </span>
                   DELETE </button>
              </div>

            </Modal.Body>
          </Modal>

        </ContentWrapper>
    );
  }
}

ListProjects.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectListProjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listprojects: () => dispatch(a.listProjectsAction()),
    update : (payload) => dispatch(a.updateAction(payload)),
    deleteProject : (payload) => dispatch(a.deleteAction(payload)),
    getPagination: (payload) => dispatch(a.getPagination(payload)) 
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listProjects', reducer });
const withSaga = injectSaga({ key: 'listProjects', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListProjects);
