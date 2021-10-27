import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { LikeButton } from './article-card.styles';
import { ArticleCard } from './ArticleCard';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleCard', () => {
  const wrapper = shallow(<ArticleCard />);
  it('should increment the like counter when clicking on the button', () => {
    const button = wrapper.find(LikeButton);
    button.simulate('click');
    const div = button.find('div');
    expect(div.text()).toBe('1');
  });
});
