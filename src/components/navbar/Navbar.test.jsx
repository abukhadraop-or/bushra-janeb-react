import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Nav } from './Navbar';
import {
  // Anchor,
  // Links,
  // LinksListItem,
  // Menu,
  // Navbar,
  NavbarContainer,
} from './navbar.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
  const wrapper = shallow(<Nav />);

  it('should render the Navbar', () => {
    const holder = wrapper.find(NavbarContainer);
    expect(holder.exists()).toBe(true);
  });

  // it("should click on the menu button", () => {
  //   const icon = wrapper.find(FontAwesomeIcon).simulate("click");
  //   expect(icon.props.children).toBe("");
  // });
});
