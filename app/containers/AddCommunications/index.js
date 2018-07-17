/**
 *
 * AddCommunications
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddCommunications from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import 'react-select/dist/react-select.css';
import { createCommunicationsAction, listCommunication } from './actions';
import { styles, headings } from 'assets/styles/variables';


export class AddCommunications extends Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props){
    super(props)

    this.state = {
      moc: [],
      critialContacts: [],
      specialInstruction: '',
      revelvantUA: '',
      openModel: false,
      selectedOption: '',
      multi: true,

    };
  }

  componentDidMount(){
    this.props.listCommunication(this.props.projectId);
  }

  handleMutiChange = (selectedOption) => {

    this.setState({
      critialContacts : selectedOption
     });
  }

  handleMutiValueChange = (value) => {

    this.setState({
      moc: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.create(
      {
        moc: this.state.moc,
        critialContacts: this.state.critialContacts,
        specialInstruction: this.state.specialInstruction,
        revelvantUA: this.state.revelvantUA,
        projectId: this.props.projectId,
      }
    );
    setTimeout(() => {
      this.setState({
        'moc': '',
        'critialContacts' : '',
        'specialInstruction': '',
        'revelvantUA' : '',
      })
      setTimeout(() => {
        this.close();
        this.props.listCommunication(this.props.projectId);
      }, 800);
    }, 500);
  }

handleChange = (e) => {
  const {name, value} = e.target;
  this.setState({[name]: value});
}

  open = () => {
    this.setState({
      openModel : true,
    })
  }

  close = () => {
    this.setState({
      openModel : false,
    });
  }

  renderMoc = (moc) => {
    if (moc && moc.length > 0) {
      return moc.map((a) => {
        return (
          <ul key={Math.random()}>
            <li>
              {a.label}
            </li>
          </ul>
        )
      })
    }
  }

  listComm = () => {

    if (this.props.addcommunications && this.props.addcommunications.communication_list && this.props.addcommunications.communication_list.length > 0) {
        return this.props.addcommunications.communication_list.map((c) => {
            return (
                <tr key={Math.random()}>
                  <td>
                    {c.revelvantUA}
                  </td>
                  <td>
                    {c.specialInstruction}
                  </td>
                  <td>
                    {this.renderMoc(c.moc)}
                  </td>
                </tr>
              );
        });

    }

  }

  render() {

    return (
      <div>
        <Helmet>
          <title>Add Communications</title>
          <meta name="description" content="Description of AddCommunications" />
        </Helmet>
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary" >
                <div className="panel-heading" style={styles.primaryDark}  >
                    <Row>
                        <Col md={6}>
                            <h4 style={headings.tableHeading}> Communications </h4>
                        </Col>
                        <Col md={6}>
                            <button onClick={this.open} className="btn btn-success pull-right" style={{marginTop: '3.0px'}}> Add Communication </button>
                        </Col>
                    </Row>
                </div>

                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: '120px' }}>List of revelvant UA</th>
                            <th style={{width: '120px'}}>special Instruction </th>
                            <th style={{width: '120px'}}>Method of Communication </th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.listComm()}
                    </tbody>
                    <thead>
                      <tr style={{width: '100%'}}>
                        <th style={{width: '120px'}}>
                          <Link to={"/list-communications/"+this.props.projectId} style={{float: 'right'}}>See all</Link>
                        </th>
                      </tr>
                    </thead> 
                </Table>
                { /* END table-responsive */}
                {/* <div className="panel-footer">Panel Footer</div> */}
            </div>
        </Col>
        <Modal show={this.state.openModel} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Communication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit} >
              <fieldset>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb communicat" style={{ marginLeft: '8%'}}>Methods of Communications</label>
                  <Col sm={8}>
                    <Select.Creatable
                      name="moc"
                      value={this.state.moc}
                      onChange={this.handleMutiValueChange}
                      multi={true}

                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Critial Contacts</label>
                  <Col sm={8}>
                    <Select
                      name="critialContacts"
                      value={this.state.critialContacts}
                      onChange={this.handleMutiChange}
                      multi
                      options={[
                        { value: 'Pakistan', label: 'Pakistan' },
                        { value: 'Pak', label: 'Pak' },
                        { value: 'India', label: 'India' },
                        { value: 'Asia', label: 'Asia' },
                        { value: 'Afgans', label: 'Afgans' },
                      ]}
                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb">Special Instructions</label>
                  <Col sm={8}>
                      <textarea
                        rows="5"
                        type="text"
                        name="specialInstruction"
                        value={this.state.specialInstruction}
                        className="form-control"
                        placeholder="Special Instructions"
                      />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label className="col-sm-2 col-sm-offset-1 control-label mb"> Relevant UA List</label>
                  <Col sm={8}>
                    <textarea
                      rows="5"
                      type="text"
                      name="revelvantUA"
                      value={this.state.revelvantUA}
                      className="form-control"
                      placeholder="List of Revelent UA"
                    />
                  </Col>
                </div>
              </fieldset>
              <button className="btn-block btn btn-success">Add Communication</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-danger" onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

AddCommunications.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addcommunications: makeSelectAddCommunications(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(createCommunicationsAction(payload)),
    listCommunication : (id) => dispatch(listCommunication(id))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addCommunications', reducer });
const withSaga = injectSaga({ key: 'addCommunications', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddCommunications);
