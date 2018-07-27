/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { browserHistory, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './style.css';

import Landing from 'containers/Landing';
import Login from 'containers/Login/Loadable';

import LandingPage from 'containers/Onboarding/Views/LandingPage';
import Signup from 'containers/Onboarding/Signup/Loadable';
import GetInvolved from 'containers/Onboarding/Views/GetInvolved';
import SelectSkills from 'containers/Onboarding/Views/SelectSkills';
import InterviewMember from 'containers/Onboarding/Views/InterviewMember';

import Profile from 'containers/Profile/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import ProjectView from 'containers/ProjectView/Loadable';
import RoleView from 'containers/RoleView/Loadable';
import ResendEmail from 'containers/ResendEmail';
import VerifyAccount from 'containers/VerifyAccount';
import ForgetPassword from 'containers/ForgetPassword';
import ResetPassword from 'containers/ResetPassword';
import Logout from 'containers/Logout/Loadable';
import AccountSettings from 'containers/Profile/AccountSettings/Loadable';
import ListVolunteers from 'containers/ListVolunteers/Loadable';
import Base from 'components/Layout/Base';
import AcceptInvitation from 'containers/AcceptInvitation';



import AddSkills from 'containers/AddSkills';
import ListDocumentation from 'containers/ListDocumentation';
import ListPlaces from 'containers/ListPlaces';
import ListProjects from 'containers/ListProjects';
import AddProject from 'containers/ListProjects/AddProject';

import ListCommunications from 'containers/ProjectView/ListCommunications';
import ListHealthSafety from 'containers/ProjectView/ListHealthSafety';
import ListExecution from 'containers/ProjectView/ListExecution';
import ListResources from 'containers/ProjectView/Resources/ListResources';
import ListRoles from 'containers/ProjectView/ListRoles';
import AddRoles from 'containers/ProjectView/ListRoles/AddRoles';
import ListTeamDisplay from 'containers/ProjectView/ListTeamDisplay';

export default function App() {

  return (
    <div>

      {/* <Auth /> */}

      <Router history={browserHistory}  >
        <Switch>
          <Base>

            <Route exact path="/" component={Landing} />
            <Route path="/welcome" component={LandingPage} />
            <Route path="/signup" component={Signup} />

            {/* 3 onboarding steps: */}
            <Route path="/get-involved" component={GetInvolved} />
            <Route path="/select-skills" component={SelectSkills} />
            <Route path="/interview-member" component={InterviewMember} />

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
            <Route path="/list-volunteers" component={ListVolunteers} />
            <Route path="/add-roles" component={AddRoles} />
            <Route path="/add-main-skills" component={AddSkills} />
            <Route path="/resetpassword/:code" component={ResetPassword} />
            <Route path="/completeAccount/:id" component={AcceptInvitation} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/listProjects" component={ListProjects} />
            <Route path="/places" component={ListPlaces} />
            <Route path="/list-Communications/:id" component={ListCommunications} />
            <Route path="/list-HealthSafety/:id" component={ListHealthSafety} />
            <Route path="/list-Execution/:id" component={ListExecution} />
            <Route path="/list-Documentation/:id" component={ListDocumentation} />
            <Route path="/list-Resources/:id" component={ListResources} />
            <Route path="/list-Roles" component={ListRoles} />
            <Route path="/list-TeamDisplay" component={ListTeamDisplay} />
          </Base>
        </Switch>
      </Router>
    </div>

  );
}
