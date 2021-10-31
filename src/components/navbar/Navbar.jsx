import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Anchor,
  Links,
  LinksListItem,
  Menu,
  Navbar,
  NavbarContainer,
  TitleLink,
} from './navbar.styles';

/**
 * Render a <Navbar> component.
 *
 * @param {Object} props       Props.
 * @param {Array}  props.links The navbar links passed from the app.
 *
 * @return {JSX.Element}
 */
export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = [
    { name: 'Home', to: '/home', id: 1 },
    { name: 'SignIn', to: '/signUp', id: 2 },
    { name: 'SignUp', to: '/login', id: 3 },
  ];

  /**
   * Handles hamburger menu click event.
   *
   */
  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavbarContainer>
      <Navbar>
        <div>
          <TitleLink>Conduit </TitleLink>
        </div>
        <Links isNavOpen={isNavOpen}>
          {links.map((link) => (
            <LinksListItem key={link.id}>
              <Anchor>{link.name}</Anchor>
            </LinksListItem>
          ))}
        </Links>
        <Menu>
          <FontAwesomeIcon
            icon={isNavOpen ? faTimes : faBars}
            label={isNavOpen ? 'bars' : 'closed'}
            onClick={() => {
              handleNavClick();
            }}
          />
        </Menu>
      </Navbar>
    </NavbarContainer>
  );
};

export default Nav;
