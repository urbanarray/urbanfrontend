import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Import required images


import Search from '../../../assets/images/search.png';

import './styles.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar fixed-top" color="faded" light expand="md" 
                style={{ background: 'white', height: '60px', boxShadow: '0px 1px 4px -2px rgba(0,0,0,0.4' }} >
          <NavbarBrand href="/" style={{
              color: 'rgba(0, 0, 0, 0.55)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              fontWeight: '500',
              fontSize: '17px',
          }}> Urban Array </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <input type="text" name="search" placeholder=" Search... " className="form-control navbar__input"  />
                          
        
              <NavItem style={{ marginLeft: '10px',marginRight:'20px' }} >
                <Link className="btn btn-danger navbar__btn" to="signup" >Signup </Link>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}



Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}



NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

