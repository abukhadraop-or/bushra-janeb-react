import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Article } from './Articles';
import { Holder } from './articles.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
  const wrapper = shallow(<Article />);
  it('should render the Article component', () => {
    const holder = wrapper.find(Holder);
    expect(holder.exists()).toBe(true);
  });
});
