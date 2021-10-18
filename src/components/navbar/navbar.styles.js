import styled from "styled-components";

export const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: 62rem;
  padding: 0 1rem;
`;

export const Navbar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.188rem 0;
`;

export const Menu = styled.div`
  cursor: pointer;
  font-size: 1.563rem;
  @media screen and (min-width: 60rem) {
    display: none;
  }
`;

export const Links = styled.ul`
  background-color: #f3f3f3;
  color: black;
  display: ${({ isNavClicked }) => (isNavClicked ? "static" : "none")};
  font-family: "Source Sans Pro", sans-serif;
  height: 38.2%;
  min-width: 90%;
  padding: 0;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  transition: 0.5s;

  @media screen and (min-width: 21.438rem) {
    height: 33.2%;
  }
  @media screen and (min-width: 60rem) {
    background-color: #ffffff;
    border-radius: 0;
    display: inline-flex;
    justify-content: flex-end;
    left: 0rem;
    list-style: none;
    margin: 0;
    position: relative;
    top: 0%;
    transform: none;
    transition: none;
  }
`;

export const LinksListItem = styled.li`
  display: block;
  padding-left: 1.563rem;
  padding-top: 2.188rem;
  text-align: center;

  @media screen and (min-width: 60rem) {
    padding-top: 0;
  }
`;

export const Anchor = styled.a`
  color: #0000004d;
  cursor: pointer;
  font-size: 0.99rem;
  text-decoration: none;
  &:hover {
    color: #000000b3;
  }
`;

export const TitleLink = styled.a`
  color: #5cb85c;
  cursor: pointer;
  font: 1.5rem "Titillium Web", sans-serif;
`;
