/**
 *
 * ListCommunications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Row, Col, Button, Modal } from 'react-bootstrap';

import ContentWrapper from 'components/Layout/ContentWrapper';
import AddCommunications from '../AddCommunications';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListCommunications from './selectors';
import reducer from './reducer';
import saga from './saga';
import { listCommunication } from './actions';

export class ListCommunications extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.listCommunication(this.props.match.params.id);
  }
  mapStateToProps(state){

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
    if (this.props.listcommunications && this.props.listcommunications.communication_list && this.props.listcommunications.communication_list.length > 0) {
      return this.props.listcommunications.communication_list.map((c) => {
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
      <ContentWrapper>
        <Helmet>
          <title>ListCommunications</title>
          <meta name="description" content="Description of ListCommunications" />
        </Helmet>
        <h3>Communications
          <small>List of Communication</small>
        </h3>
        <Col md={12}>
          <div id="panelDemo8" className="panel panel-primary" >
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
            </Table>
          </div>
        </Col>
      </ContentWrapper>
    );
  }
}

ListCommunications.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listcommunications: makeSelectListCommunications(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    listCommunication : (id) => dispatch(listCommunication(id))
    
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'listCommunications', reducer });
const withSaga = injectSaga({ key: 'listCommunications', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListCommunications);
