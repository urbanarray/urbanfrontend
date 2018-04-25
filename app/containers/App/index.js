/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { browserHistory, Route, BrowserRouter, withRouter, Switch, BrowserRouter as Router, Redirect, Miss } from 'react-router-dom';


import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Landing from 'containers/Landing';

import Signup from 'containers/Signup/Loadable';
import Login from 'containers/Login/Loadable';
import Profile from 'containers/Profile/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import ProjectView from 'containers/ProjectView/Loadable';
import RoleView from 'containers/RoleView/Loadable';
import ResendEmail from 'containers/ResendEmail';
import VerifyAccount from 'containers/VerifyAccount';
import ForgetPassword from 'containers/ForgetPassword';
import ResetPassword from 'containers/ResetPassword';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Logout from 'containers/Logout/Loadable';
import Base from 'components/Layout/Base';
import Auth from 'containers/Auth';
import './style.css';

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/',
    '/login',
    '/signup',
    '/profile',
    '/logout',
    '/notfound',
    '/error500',
    '/maintenance',
];



const currentKey = Math.random();
const timeout = { enter: 500, exit: 500 };
const animationName = 'rag-fadeIn';


export default function App() {

  return (  
    <div>
      
    {/* <Auth /> */}

    <Router history={browserHistory}  >
      <Switch>   
        <Base>
       
          <Route exact path="/" component={Landing} />  
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projectView" component={ProjectView} />
          <Route path="/roleView" component={RoleView} />  
          <Route path="/resendEmail/:id" component={ResendEmail} /> 
          <Route path="/verify/:id" component={VerifyAccount} /> 
          <Route path="/forgetpassword" component={ForgetPassword} /> 
          <Route path="/resetpassword/:code" component={ResetPassword} /> 
          {/* <Route component={NotFoundPage}   /> */}
          {/* <Redirect to="/" /> */}
        </Base> 
      </Switch>
    </Router>
  </div>
  
  );
}
