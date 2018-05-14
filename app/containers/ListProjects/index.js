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
import {Form , FormGroup, Label, Input, Grid, Row, Col, Panel, Button, Table, Pagination,Modal } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListProjects from './selectors';
import reducer from './reducer';
import saga from './saga';


import {updateAction, listProjectsAction, deleteAction} from "./actions";


export class ListProjects extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
    this.state = {
      name: '',
      showModal: false,
      showDeleteModel: false,
    
      toedit: {
        name: '',
      },
      modal_delete: null,
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



  listPojects = () => {
    const prolists = this.props.projects.list_projects;

    if (prolists && prolists.length > 0) {
      return prolists.map((projects) => {
        if(projects.status === 1) {
          return(
            <tr key={Math.random()} >
              <td> {projects.name}

              <button className='btn btn-labeled btn-danger mr btn btn-labeled btn-danger mr-default pull-right' onClick={() => this.openDelete(projects._id)}>
                  <span  className="btn-label" > <i className="fa fa-times"> </i> </span> Delete </button>  
              
              
              <button  className='btn btn-labeled btn-success mr btn btn-labeled btn-success mr-default pull-right' onClick={() => this.open(projects)}> 
                  <span className="btn-label" ><i className="fa fa-check"></i></span> Update</button> </td>
            </tr>
          );
        }
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
                <tr>
                  <th>Project Name</th>                  
                </tr>
              </thead>
              <tbody>
              {this.listPojects()}
              </tbody>
            </Table>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton >
              <Modal.Title>Update Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.changeAll}  >
                <fieldset>
                  
                  <div className="form-group mb">
                    <label className="col-sm-3 control-label mb">Project Name</label>
                    <Col sm={9}>
                      <input onChange={this.handleUpdateChange} className="form-control" type="text" name="name" value={this.state.toedit.name} placeholder="Project Name" required />
                    </Col>
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
    listprojects: () => dispatch(listProjectsAction()),
    update : (payload) => dispatch(updateAction(payload)),
    deleteProject : (payload) => dispatch(deleteAction(payload)) 
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
