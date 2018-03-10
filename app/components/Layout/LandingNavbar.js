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
                { /* START Top Navbar */}
                <nav role="navigation" className="navbar topnavbar lightblue" >
                    { /* START navbar header */}
                    <div className="navbar-header">
                        <a href="#/" className="navbar-brand">
                          <div className="brand-logo" style={{ padding: '0px' }}>
                              <img src={logo} style={{ height: '60px' }} alt="App Logo" className="img-responsive" />
                          </div>
                        </a>
                    </div>
                    { /* END navbar header */}
                    { /* START Nav wrapper */}
                    <div className="nav-wrapper">
                        { /* START Left navbar */}
                        <ul className="nav navbar-nav">
                           
                        </ul>
                        { /* END Left navbar */}
                        { /* START Right Navbar */}
                        <ul className="nav navbar-nav navbar-right">
                          <li> 
                            <Link className="btn btn-primary" to="signup"> Signup</Link>
                          </li>
                          <li> 
                            <Link className="btn btn-success" to="Login"> Login</Link>
                          </li>
                        </ul>
                        { /* END Right Navbar */}
                    </div>
                    { /* END Nav wrapper */}
                   
                </nav>
                { /* END Top Navbar */}
            </header>
        );
    }

}

export default Header;
