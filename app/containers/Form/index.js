/**
 *
 * Form
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectForm from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Form extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Form</title>
          <meta name="description" content="Description of Form" />
        </Helmet>
      </div>
    );
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'form', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Form);
