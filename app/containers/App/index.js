/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { browserHistory, Route, BrowserRouter, withRouter, Switch, BrowserRouter as Router, Redirect, Miss } from 'react-router-dom';

// import { Switch, Route, browserHistory,  BrowserRouter as Router} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';

import Navbar from 'components/Navbar';

// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import Main from 'containers/Main';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Landing from 'containers/Landing';

import Signup from 'containers/Signup/Loadable';
import Login from 'containers/Login/Loadable';
import Profile from 'containers/Profile/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import ProjectView from 'containers/ProjectView/Loadable';
import RoleView from 'containers/RoleView/Loadable';
import './style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Base from 'components/Layout/Base';
import BasePage from 'components/Layout/BasePage';
import LandingNavbar from 'components/Layout/LandingNavbar';

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/',
    '/login',
    '/signup',
    '/profile',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance',
];

export default function App() {
    
  const currentKey = Math.random();
  const timeout = { enter: 500, exit: 500 };
  const animationName = 'rag-fadeIn';
console.log(listofPages.indexOf(location.pathname) > -1, location.pathname);
    if(listofPages.indexOf(location.pathname) > -1) {
        return (
          <div className="" >

            <Router history={browserHistory}  >
              <BasePage>
                  <LandingNavbar />
                  <Switch location={location}>
                    <Route exact path="/" component={Landing} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="" component={NotFoundPage} />
                  </Switch>
              </BasePage>
            </Router>
          </div>  
        )
    }
    else {
        return (
          // console.log('hello to you')
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
          <div className="" >
          
            <Router history={browserHistory}  >            
              <Base>
                <TransitionGroup>
                  <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                      <div>
                          <Switch location={location}>

                            {/*Dashboard*/}
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/projectView" component={ProjectView} />
                            <Route path="/roleView" component={RoleView} />
                            <Route path="" component={NotFoundPage} />                            

                          </Switch>
                      </div>
                  </CSSTransition>
                </TransitionGroup>
              </Base>
            </Router>
          </div>
        )
    }

  // return (
  //   <Router history={browserHistory}  >
  //       <div>
  //       <Navbar />
  //         <Switch>
  //           <Route exact path="/" component={Landing} />
  //           <Route path="/signup" component={Signup} />
  //           <Route path="/login" component={Login} />
  //           <Route path="/profile" component={Profile} />          
  //         </Switch>
  //       </div>
  //   </Router>
  // );

}
