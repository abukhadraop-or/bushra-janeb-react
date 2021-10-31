import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { LikeButton } from './article-card.styles';
import { ArticleCard } from './ArticleCard';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleCard', () => {
  const wrapper = shallow(
    <ArticleCard
      filteredArticles={[
        {
          id: 1,
          name: 'Gerome',
          publishDate: 'October 8, 2021',
          title: 'ReactJs',
          body: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
          imgUrl:
            'https://bombaymeatco.com/wp-content/uploads/2014/11/free-profile-photo-whatsapp-4.png',
          description:
            'See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spec',
        },
      ]}
    />
  );
  it('should increment the like counter when clicking on the button', () => {
    const button = wrapper.find(LikeButton);
    button.simulate('click');
    const div = button.find('div');
    expect(div.text()).toBe('0');
  });
});
