import React from 'react';
import pubsub from 'pubsub-js';
import HeaderRun from './Header.run'
import { NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import offSidebarLogo from '../../../assets/logo/icon.png';
// Necessary to create listGroup inside navigation items
class CustomListGroup extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.children}
      </ul>
    );
  }
}

class Header extends React.Component {

    componentDidMount() {
        HeaderRun();
    }

    toggleUserblock(e) {
        e.preventDefault();
        pubsub.publish('toggleUserblock');
    }

    render() {
        const ddAlertTitle = (
            <span>
                <em className="icon-bell"></em>
                <span className="label label-danger">11</span>
            </span>
        )
        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */ }
                <nav role="navigation" className="navbar topnavbar lightblue" >
                    { /* START navbar header */ }
                    <div className="navbar-header">
                        <a href="#/" className="navbar-brand">
                            <div className="brand-logo" style={{padding:'0px'}}>
                                <img src={logo} style={{height: '60px'}} alt="App Logo" className="img-responsive" />
                            </div>
                            <div className="brand-logo-collapsed">
                                <img src={offSidebarLogo} style={{ height: '40px', width:'100%' }} alt="App Logo" className="img-responsive" />
                            </div>
                        </a>
                    </div>
                    { /* END navbar header */ }
                    { /* START Nav wrapper */ }
                    <div className="nav-wrapper">
                        { /* START Left navbar */ }
                        <ul className="nav navbar-nav">
                            <li>
                                { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                                <a href="#" data-trigger-resize="" data-toggle-state="aside-collapsed" className="hidden-xs">
                                    <em className="fa fa-navicon "></em>
                                </a>
                                { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */ }
                                <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" className="visible-xs sidebar-toggle">
                                    <em className="fa fa-navicon"></em>
                                </a>
                            </li>
                            
                            { /* START dashboard icon */ }
                            <li>
                                <Link to="dashboard" title="Dashboard">
                                    <em className="icon-speedometer"></em>
                                </Link>
                            </li>
                            { /* END dashboard icon */ }
                            
                            { /* START User avatar toggle */ }
                            <li>
                                { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                                <a id="user-block-toggle" href="#" onClick={ this.toggleUserblock }>
                                    <em className="icon-user"></em>
                                </a>
                            </li>
                            { /* END User avatar toggle */ }

                            <li>
                                <Link to="dashboard" title="Expand">
                                    <em className="icon-paper-plane"></em>
                                </Link>
                            </li>

                            <li>
                                <Link to="dashboard" title="Graph Chart">
                                    <em className="icon-graph"></em>
                                </Link>
                            </li>

                        </ul>
                        { /* END Left navbar */ }
                        { /* START Right Navbar */ }
                        <ul className="nav navbar-nav navbar-right">
                            { /* Search icon */ }
                            <li>
                                <a href="#" data-search-open="">
                                    <em className="icon-magnifier"></em>
                                </a>
                            </li>
               
                            { /* START Alert menu */ }
                            <NavDropdown noCaret eventKey={ 3 } title={ ddAlertTitle } className="dropdown-list" id="basic-nav-dropdown" >
                              <CustomListGroup>
                                <ListGroupItem href="javascript:void(0)">
                                     <div className="media-box">
                                        <div className="pull-left">
                                           <em className="fa fa-twitter text-info"></em>
                                        </div>
                                        <div className="media-box-body clearfix">
                                           <p className="m0">New followers</p>
                                           <p className="m0 text-muted">
                                              <small>1 new follower</small>
                                           </p>
                                        </div>
                                     </div>
                                </ListGroupItem>
                                <ListGroupItem href="javascript:void(0)">
                                     <div className="media-box">
                                        <div className="pull-left">
                                           <em className="fa fa-envelope text-warning"></em>
                                        </div>
                                        <div className="media-box-body clearfix">
                                           <p className="m0">New e-mails</p>
                                           <p className="m0 text-muted">
                                              <small>You have 10 new emails</small>
                                           </p>
                                        </div>
                                     </div>
                                </ListGroupItem>
                                <ListGroupItem href="javascript:void(0)">
                                     <div className="media-box">
                                        <div className="pull-left">
                                           <em className="fa fa-tasks text-success"></em>
                                        </div>
                                        <div className="media-box-body clearfix">
                                           <p className="m0">Pending Tasks</p>
                                           <p className="m0 text-muted">
                                              <small>11 pending task</small>
                                           </p>
                                        </div>
                                     </div>
                                </ListGroupItem>
                                <ListGroupItem href="javascript:void(0)">
                                     <small>More notifications</small>
                                     <span className="label label-danger pull-right">14</span>
                                </ListGroupItem>

                              </CustomListGroup>
                            </NavDropdown>
                            { /* END Alert menu */ }
                            { /* START Offsidebar button */ }
                            <li>
                                <a href="#" data-toggle-state="offsidebar-open" data-no-persist="true">
                                    <em className="icon-notebook"></em>
                                </a>
                            </li>
                            { /* END Offsidebar menu */ }
                        </ul>
                        { /* END Right Navbar */ }
                    </div>
                    { /* END Nav wrapper */ }
                    { /* START Search form */ }
                    <form role="search" action="search.html" className="navbar-form">
                        <div className="form-group has-feedback">
                            <input type="text" placeholder="Type and hit enter ..." className="form-control" />
                            <div data-search-dismiss="" className="fa fa-times form-control-feedback"></div>
                        </div>
                        <button type="submit" className="hidden btn btn-default">Submit</button>
                    </form>
                    { /* END Search form */ }
                </nav>
                { /* END Top Navbar */ }
            </header>
            );
    }

}

export default Header;
