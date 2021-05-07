import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  // NavbarBrand
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/add-player">ADD PLAYER</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/team-roster">TEAM ROSTER</Link>
      </NavItem>
    </>
  );

  const authButtons = () => (
    <>
      <NavItem>
        {
          user !== null
          && <div>
            {
              user
                ? <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
                : <Button color='info' onClick={signInUser}>SIGN IN</Button>
            }
          </div>
        }
        </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="md">
      {/* <NavbarBrand className="mr-auto"></NavbarBrand> */}
        <Link className="navbar-brand" to="/">HOME</Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated() }
            { authButtons() }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
