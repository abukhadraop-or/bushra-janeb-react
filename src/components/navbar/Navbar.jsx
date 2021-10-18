import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Anchor,
  Links,
  LinksListItem,
  Menu,
  Navbar,
  NavbarContainer,
  TitleLink,
} from "./navbar.styles";

/**
 * Render a <Navbar> component.
 *
 * @param {Object}     props           Props.
 * @param {Array}      props.links     The navbar links passed from the app.
 *
 * @return {JSX.Element}
 */
export const Nav = ({ links }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavClicked, setIsNavClicked] = useState(false);
  /**
   * Handles hamburger menu click event.
   *
   */
  const handleNavClick = () => {
    setIsNavClicked(!isNavClicked);
  };
  return (
    <NavbarContainer>
      <Navbar>
        <div>
          <TitleLink>Conduit </TitleLink>
        </div>
        <Links isNavClicked={isNavClicked}>
          {links.map((link) => (
            <LinksListItem key={link.id}>
              <Anchor>{link.name}</Anchor>
            </LinksListItem>
          ))}
        </Links>
        <Menu>
          <FontAwesomeIcon
            icon={isNavOpen ? faTimes : faBars}
            label={isNavOpen ? "bars" : "closed"}
            onClick={() => {
              handleNavClick();
              setIsNavOpen(!isNavOpen);
            }}
          />
        </Menu>
      </Navbar>
    </NavbarContainer>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(Object).isRequired,
};

export default Nav;
