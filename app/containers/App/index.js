/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { browserHistory, Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import Landing from 'containers/Landing';

import Signup from 'containers/Onboarding/Signup/Loadable';
import Login from 'containers/Login/Loadable';
import Profile from 'containers/Profile/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import ProjectView from 'containers/ProjectView/Loadable';
import RoleView from 'containers/RoleView/Loadable';
import ResendEmail from 'containers/ResendEmail';
import VerifyAccount from 'containers/VerifyAccount';
import ForgetPassword from 'containers/ForgetPassword';
import ResetPassword from 'containers/ResetPassword';
import Logout from 'containers/Logout/Loadable';
import AccountSettings from 'containers/AccountSettings/Loadable';
import Volunteer from 'containers/Volunteer/Loadable';
import Base from 'components/Layout/Base';
import AddRoles from 'containers/AddRoles';
import AcceptInvitation from 'containers/AcceptInvitation';
import './style.css';

import AddProject from 'containers/AddProject';
import AddSkills from 'containers/AddSkills';
import ListProjects from 'containers/ListProjects';
import ListPlaces from 'containers/Places';
import ListCommunications from 'containers/ListCommunications';
import ListHealthSafety from 'containers/ListHealthSafety';
import ListExecution from 'containers/ListExecution';
import ListDocumentation from 'containers/ListDocumentation';
import ListResources from 'containers/ListResources';
import ListRoles from 'containers/ListRoles';
import listTeamDisplay  from 'containers/listTeamDisplay';


export default function App() {

  return (  
    <div>
      
    {/* <Auth /> */}

    <Router history={browserHistory}  >
      <Switch>   
        <Base>
       
          <Route exact path="/" component={Landing} />  
          {/* <Route path="/signup" component={Signup} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projectView/:id" component={ProjectView} />
          <Route path="/roleView" component={RoleView} />  
          <Route path="/resendEmail/:id" component={ResendEmail} /> 
          <Route path="/verify/:id" component={VerifyAccount} /> 
          <Route path="/forgetpassword" component={ForgetPassword} /> 
          <Route path="/account-settings" component={AccountSettings} /> 
          <Route path="/list-volunteers" component={Volunteer} /> 
          <Route path="/add-roles" component={AddRoles} />
          <Route path="/add-main-skills" component={AddSkills} />
          <Route path="/resetpassword/:code" component={ResetPassword} /> 
          <Route path="/completeAccount/:id" component={AcceptInvitation} /> 
          <Route path="/addProject" component={AddProject} />
          <Route path="/listProjects" component={ListProjects} /> 
          <Route path="/places" component={ListPlaces} />
          <Route path="/list-communications/:id" component={ListCommunications} />
          <Route path="/list-healthSafety/:id" component={ListHealthSafety} />
          <Route path="/list-Execution/:id" component={ListExecution} />
          <Route path="/list-Documentation/:id" component={ListDocumentation} />
          <Route path="/list-Resources/:id" component={ListResources} />
          <Route path="/list-Roles" component={ListRoles} />
          <Route path="/listTeamDisplay" component={listTeamDisplay} />
        </Base> 
      </Switch>
    </Router>
  </div>
  
  );
}
