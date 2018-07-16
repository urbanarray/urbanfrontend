/**
 *
 * HealthSafety
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Row,
  Col,
  Table,
  Button,
  Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { createHealthSafetyAction } from "./actions";
import Select from 'react-select';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHealthSafety from './selectors';
import reducer from './reducer';
import saga from './saga';
import {listHealthSafetyAction} from './actions';
import { styles, headings } from '../../assets/styles/variables';

export class HealthSafety extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)

    this.state = {
      ecn : [],
      mma: [],
      openModel: false,
      sma: [],
      location: '',
      lmc: '',
      lsc: '',

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.create(
      {
        ecn: this.state.ecn,
        mma: this.state.mma,
        sma: this.state.sma,
        location: this.state.location,
        lmc: this.state.lmc,
        lsc: this.state.lsc,
        projectId: this.props.projectId
      }
    )
    setTimeout(() => {
      this.setState ({
        'ecn': '',
        'mma': '',
        'sma': '',
        'location': '',
        'lmc': '',
        'lsc': ''
      })
      setTimeout(() => {
        this.close();

      }, 800);
      setTimeout(() => {
        this.props.listHealthSafety(this.props.projectId);
      }, 1000);
    }, 500);
  }

  handleMutiChange = (selectedOption) => {

    this.setState({
      critialContacts: selectedOption
    });
  }

  componentDidMount (){
    this.props.listHealthSafety(this.props.projectId);
  }

  ECN = (ec) => {

    this.setState({
      ecn: ec
    })
  }
  MMA = (ec) => {

    this.setState({
      mma: ec
    })
  }
  SMA = (ec) => {

    this.setState({
      sma: ec
    })
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

  renderSma = (sma) => {
    if(sma && sma.length > 0 ){
      return sma.map((c) => {
        return (
          <ul key={Math.random()}>
            <li>
              {c.label}
            </li>
          </ul>
        )
      })
    }
  }

  renderMma = (mma) => {
    if (mma && mma.length > 0 ) {
      return mma.map((c) =>{
        return (
          <ul key={Math.random()}>
            <li>{c.label}</li>
          </ul>
        )
      })
    }
  }

  renderEcn = (ecn) => {
    if(ecn && ecn.length > 0) {
      return ecn.map((c) => {
        return (
          <ul key={Math.random()}>
            <li>
              { c.label}
            </li>
          </ul>
        )
      })
    }
  }

  listHealth = () => {
    if (this.props.healthSafety && this.props.healthSafety.list_healthsafety && this.props.healthSafety.list_healthsafety.healthsafety && this.props.healthSafety.list_healthsafety.healthsafety.length > 0) {
      return this.props.healthSafety.list_healthsafety.healthsafety.map((c) => {
        return (
              <tr key={Math.random()}>
                <td>
                  {c.lmc}
                </td>
                <td>
                  {c.location}
                </td>
                <td>
                  {c.lsc}
                </td>
                <td>
                  {this.renderSma(c.sma)}
                </td>
                <td>
                  {this.renderMma(c.mma)}
                </td>
                <td>
                  {this.renderEcn(c.ecn)}
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
          <title>HealthSafety</title>
          <meta name="description" content="Description of HealthSafety" />
        </Helmet>
        <Col md={12}>
            <div id="panelDemo8" className="panel panel-primary" >
              <div className="panel-heading" style={styles.primaryDark} >
                <Row>
                  <Col md={6}>
                    <h4 style={headings.tableHeading}>Health & Safety</h4>
                  </Col>

                  <Col md={6}>
                      <button onClick={this.open} className="btn btn-success pull-right" style={{marginTop: '3.0px'}}> Add Health & Safety </button>
                  </Col>
                </Row>
              </div>
                { /* START table-responsive */}
                <Table id="table-ext-2" responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width: '120px' }}>List of Medical Considerations</th>
                            <th style={{width: '120px'}}>Location of Medical</th>
                            <th style={{width: '120px'}}>Any Safety Considerations</th>
                            <th style={{width: '120px'}}>Security Members Assigned</th>
                            <th style={{width: '120px'}}>Medical Members Assigned</th>
                            <th style={{width: '120px'}}>Emergency Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.listHealth()}
                    </tbody>
                    <thead>
                        <tr style={{width: '100%'}}>
                          <th>
                            <Link to={"/list-healthSafety/"+this.props.projectId} style={{float: 'right'}}>See all</Link>
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
            <Modal.Title>Health and Safety</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit} >
              <fieldset>
                <div className="form-group mb">
                  <label style={{paddingTop: '0'}} className="col-sm-2 col-sm-offset-1 control-label mb">Emergency Contact Numbers</label>
                  <Col sm={8}>
                    <Select.Creatable
                      name="ecn"
                      value={this.state.ecn}
                      onChange={this.ECN}
                      multi={true}

                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label style={{paddingTop: '0'}} className="col-sm-2 col-sm-offset-1 control-label mb">Medical Members Assigned</label>
                  <Col sm={8}>
                    <Select.Creatable
                      name="mma"
                      value={this.state.mma}
                      onChange={this.MMA}
                      multi={true}

                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label style={{paddingTop: '0'}} className="col-sm-2 col-sm-offset-1 control-label mb">Security Members Assigned</label>
                  <Col sm={8}>
                    <Select.Creatable
                      name="sma"
                      value={this.state.sma}
                      onChange={this.SMA}
                      multi={true}

                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label style={{paddingTop: '0'}} className="col-sm-2 col-sm-offset-1 control-label mb"> Location of Medical</label>
                  <Col sm={8}>
                    <textarea
                      rows="5"
                      type="text"
                      name="location"
                      value={this.state.location}
                      className="form-control"
                      placeholder="Location of Medical"
                    />
                  </Col>
                </div>


                <div className="form-group mb">
                  <label style={{paddingTop: '0'}} className="col-sm-2 col-sm-offset-1 control-label mb"> Any medical considerations</label>
                  <Col sm={8}>
                    <textarea
                      rows="5"
                      type="text"
                      name="lmc"
                      value={this.state.lmc}
                      className="form-control"
                      placeholder="List of Any medical considerations"
                    />
                  </Col>
                </div>

                <div className="form-group mb">
                  <label style={{paddingTop: '0'}} className="col-sm-2 col-sm-offset-1 control-label mb"> Any Saftey Considerations</label>
                  <Col sm={8}>
                    <textarea
                      rows="5"
                      type="text"
                      name="lsc"
                      value={this.state.lsc}
                      className="form-control"
                      placeholder="List of Any Saftey Considerations"
                    />
                  </Col>
                </div>

              </fieldset>
              <button className="btn-block btn btn-success">Add Health & Safety</button>
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

HealthSafety.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  healthSafety: makeSelectHealthSafety(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    create: (payload) => dispatch(createHealthSafetyAction(payload)),
    listHealthSafety: (payload) => dispatch(listHealthSafetyAction(payload))

  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'healthSafety', reducer });
const withSaga = injectSaga({ key: 'healthSafety', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HealthSafety);
