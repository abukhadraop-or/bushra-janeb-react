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
    // const onClick = jest.fn();
    // const component = mount(<FontAwesomeIcon onClick={onClick} />);
    // const result = component.simulate("click");
    // expect(result.instance().props.children.props.faBars).toBe(true);
    // expect(menu.instance().props.icon).toBe(faBars);
    // expect(menu.props().children.icon).toBe(faBars);
  });

  // it("should update state on click", () => {
  //   const onClick = jest.fn();
  //   const wrapper = mount(<FontAwesomeIcon onClick={onClick} />);
  //   const handleClick = jest.spyOn(React, "useState");
  //   handleClick.mockImplementation((IsNavOpen) => [isNavOpen, setIsNavOpen]);
  //   wrapper.find(FontAwesomeIcon).simulate("click");
  //   expect(setIsNavOpen).toBe(true);
  // });

  it('should change the display property from static to none based on props', () => {
    const holder = shallow(<Links />);
    expect(holder).toMatchSnapshot();
  });
});
