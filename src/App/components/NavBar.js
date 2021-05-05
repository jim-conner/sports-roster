import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const authenticated = () => {
  //   <>
  //     <NavItem>
  //       <Link className="nav-link" to="/add-player">Add Player</Link>
  //     </NavItem>
  //     <NavItem>
  //       <Link className="nav-link" to="/team-roster">Team Roster</Link>
  //     </NavItem>
  //   </>;
  // };

  // const authButtons = () => {
  //   <>
  //     <NavItem>
  //       {
  //         user
  //           ? <Button color='info' onClick={signInUser}>SIGN IN</Button>
  //           : <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
  //       }
  //     </NavItem>
  //   </>;
  // };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* { user && authenticated() } */}
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
