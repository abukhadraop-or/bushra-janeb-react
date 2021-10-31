import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import { Home } from './components/HomePage/HomePage';
import { Nav } from './components/Navbar/Navbar';

Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  it('should render the Navbar and home components', () => {
    const wrapper = shallow(<App />);
    const navbar = wrapper.find(Nav);
    const home = wrapper.find(Home);
    expect(navbar.exists()).toBe(true);
    expect(home.exists()).toBe(true);
  });
});
