/**
 *
 * AddSkills
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
import makeSelectAddSkills from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {createSkillsAction, listSkillsAction} from './actions';
import { Col, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import { styles, headings } from '../../assets/styles/variables';

export class AddSkills extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  componentDidMount() {
    this.props.listSkills();
  }

  changeAll = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSkill({name: this.state.name});
    setTimeout(() => {
      this.setState({'name':''});
      this.props.listSkills();

    }, 500);
  }


  renderSkills = () => {
    const { skills_list } = this.props.addskills;
    if (skills_list && skills_list.length > 0 ) {
      return skills_list.map((skill, i) => {
        return (
          <tr key={i}><td>{skill.name}</td></tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Add Skills</title>
          <meta name="description" content="Description of Add Skills" />
        </Helmet>
        <div className="container" style={{marginTop: '25px'}}>
          <div className="row">
            <Col md={6}>

              <div className="user-detail" id="user-detail"  >

                <div className="panel-heading" style={styles.primaryDark}>
                  <h4 className="text-center" style={headings.tableHeading} >Add Skills</h4>
                </div>
                <div className="panel" style={{paddingTop: '10px'}}>

                  <div className="sign-up-box">
                    <Form onChange={this.changeAll} onSubmit={this.handleSubmit} >
                      <FormGroup row>
                        <Label for="name" sm={3}>Skill Name</Label>
                        <Col sm={9}>
                          <Input className="form-control" type="text" name="name" value={this.state.name} placeholder="Skill Name" required />
                        </Col>
                      </FormGroup>

                      <div className="btn-continue">
                        <button className="btn btn-success btn-block">Add Skill</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>

            { /* START table-responsive */}
            <Col md={6}>
              <div className="user-detail" id="user-detail">
              <div style={styles.primaryDark} className="panel-heading">
                  <h4  style={headings.tableHeading}>Skills List</h4>
                </div>
            <Table id="table-ext-1" className="panel" responsive bordered hover>
              <thead>
            
              </thead>
              <tbody>
                {this.renderSkills()}
              </tbody>
            </Table>
              </div>
            </Col>
            { /* END table-responsive */}

          </div>
        </div>
      </div>
    );
  }
}

AddSkills.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addskills: makeSelectAddSkills(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listSkills: (payload) => dispatch(listSkillsAction(payload)),
    addSkill: (payload) => dispatch(createSkillsAction(payload)),

  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addSkills', reducer });
const withSaga = injectSaga({ key: 'addSkills', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddSkills);
