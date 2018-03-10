/**
 *
 * LinkedIn
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
import makeSelectLinkedIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import axios from 'axios';

export class LinkedIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  generateString() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;  
  }

  constructor(props){
    super(props);
    this.state={
      clientId: this.props.clientId,
      secretId:this.props.secretId,
      redirect_uri:this.props.redirect_uri,
      code: null,
      state:null,
      scope:this.props.scope,
      isDone:false,

    }

  }

  componentDidMount(){
    const str = this.generateString();
    this.setState({'state': str});
  }

  async componentDidUpdate(){
    
    if (this.state.code === null) { 
      let code = this.props.history.location.search;
   
      if (code != null || code != '' || code != 'undefined') {
        
        code = code.replace('?','');
   
        this.setState({code:code});
        let newpath = "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&"+
        code+"&redirect_uri="+this.state.redirect_uri+"&client_id="+this.state.clientId+
        "&client_secret=" + this.state.secretId;

        // axios
        try {
          const resp = await fetch(newpath, {
            method: 'POST',
            // mode: 'no-cors',
            redirect: 'follow',
            // headers: new Headers({
            //   'Content-Type': 'x-www-form-urlencoded',
            //   'Access-Control-Allow-Origin': '*',
            // })
          });
          console.log('response', resp);
            
        } catch (error) {
          console.log(error);
        }
      
      }
        
    }

  }

  handleLinkedIn = () => {
    let path ="https://www.linkedin.com/oauth/v2/authorization?response_type=code&";
    path+='client_id='+this.state.clientId+"&redirect_uri="+this.state.redirect_uri+
    '&state='+this.state.state+'&scope='+this.state.scope;
    document.location.href = path;
    this.setState({'isDone': true});
  }
 
  render() {
    return (
      <div>
        <Helmet>
          <title>LinkedIn</title>
          <meta name="description" content="Description of LinkedIn" />
        </Helmet>
          <button onClick={this.handleLinkedIn} className="btn btn-default btn-block" > Login with LinkedIn </button>
      </div>
    );
  }
}

LinkedIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  linkedin: makeSelectLinkedIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'linkedIn', reducer });
const withSaga = injectSaga({ key: 'linkedIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LinkedIn);
