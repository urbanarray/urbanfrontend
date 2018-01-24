/**
 *
 * Main
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Switch, Route, Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMain from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';


import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Signup from 'containers/Signup/Loadable';



import styled from 'styled-components';

import './styles.css';



import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import Navbar from 'components/Navbar';

import {logout} from 'containers/App/actions';
import {makeSelectCurrentUser} from 'containers/App/selectors';

const NavWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;   
  background: #ecf0f1;

  .container{
    background: #f7f8f9;
    margin: 30px;
    margin: 30px;
    padding: 20px;
  }

   #sidebar {
    display: block;
    padding: 0;
  }

   #sidebar li {
    display: block;
    width: 100%;
    padding: 0;
    border-bottom: 1px solid #ddd;
  }


#sidebar li a, ul li a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar li a:hover, ul li a:focus {
    background-color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}


hr {
    display: block;
    height: 1px;
    border-top: 2px solid #ccc;
    margin: 1em 0;
    padding: 0; 
}

.set-sidebar-img-size{
  width: 30px;
  height: 30px;
}

.set-user-img{
  background:white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.sidebar-labels{
  margin-left: 20px;
}

#sidebar .nav-item a{
    display: block;
    padding: 0.5rem 2.5rem;
}

#sidebar .nav-item:hover, #sidebar .nav-item:active, #sidebar .nav-item:focus{
    // background: #27ae60;
    background: #1e7e34;
    -webkit-transition: width .35s ease-in-out; /* Safari 3.1 to 6.0 */
    transition: width .35s ease-in-out;
}

`;



export class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props, context) {
    super(props);
  }


  componentDidMount(){
  }


  logout = (e)=> {
    e.preventDefault();

    this.props.logout();
    this.props.history.push('/landing');
    
  }

 
  
  render() {
    return (

        <div>

          <Navbar/>

          <NavWrapper className ="wrapper">

            <div id="content" className="container" >   
               <Switch>   

                <Route path="/signup" component={Signup} />
                <Route path="/home" component={HomePage} />
               
              </Switch> 
            </div>
          </NavWrapper> 

        </div>
        
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logout: () => dispatch(logout()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'main', reducer });
const withSaga = injectSaga({ key: 'main', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Main);
