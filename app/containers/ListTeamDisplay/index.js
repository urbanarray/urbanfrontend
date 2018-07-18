/**
 *
 * ListTeamDisplay
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ContentWrapper from 'components/Layout/ContentWrapper';
import { Row, Col,Table, Button, Modal } from 'react-bootstrap';
import {styles, headings} from '../../assets/styles/variables';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListTeamDisplay from './selectors';
import reducer from './reducer';
import saga from './saga';
import TeamDisplay from '../ProjectView/TeamDisplay';




  export class ListTeamDisplay extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <ContentWrapper>
          <Helmet>
            <title>ListTeamDisplay</title>
            <meta name="description" content="Description of ListTeamDisplay" />
          </Helmet>
          <h3>TeamDisplay
            <small>List of TeamDisplay</small>
          </h3>
        </ContentWrapper>
      );
    }
  }

  ListTeamDisplay.propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  const mapStateToProps = createStructuredSelector({
    listteamdisplay: makeSelectListTeamDisplay(),
  });

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }

  const withConnect = connect(mapStateToProps, mapDispatchToProps);

  const withReducer = injectReducer({ key: 'listTeamDisplay', reducer });
  const withSaga = injectSaga({ key: 'listTeamDisplay', saga });

  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(ListTeamDisplay);
