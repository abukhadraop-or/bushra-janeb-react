import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Nav } from './Navbar';
import { Links, NavbarContainer } from './navbar.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
  const wrapper = shallow(<Nav />);
  it('should render the Navbar', () => {
    const holder = wrapper.find(NavbarContainer);
    expect(holder.exists()).toBe(true);
  });

  it('Menu should be bars', () => {
    const menu = wrapper.find(FontAwesomeIcon);
    const click = menu.simulate('click');
    expect(click.prop('icon')).toBe(faBars);
  });

  it('should change the bars into a cross when menu is clicked', () => {
    const menu = wrapper.find(FontAwesomeIcon);
    const click = menu.simulate('click');
    expect(click.prop('icon')).toBe(faTimes);
  });

  it('should change the display property from static to none based on props', () => {
    const holder = shallow(<Links />);
    expect(holder).toMatchSnapshot();
  });
});
