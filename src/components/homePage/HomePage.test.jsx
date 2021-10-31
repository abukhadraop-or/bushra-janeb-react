import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Home } from './HomePage';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/fake-articles-service');
jest.mock('../../services/fake-tags-service');

// const mockedArticles = [
//   {
//     id: 1,
//     name: 'Gerome',
//     publishDate: 'October 8, 2021',
//     title: 'ReactJs',
//     body: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
//     imgUrl:
//       'https://bombaymeatco.com/wp-content/uploads/2014/11/free-profile-photo-whatsapp-4.png',
//     description:
//       'See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spec',
//   },
// ];

// const mockedTags = [
//   {
//     id: 1,
//     name: 'C++',
//   },
// ];

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('should send the filtered articles to the article component', async () => {
  //   const wrapper = shallow(<Home />);
  //   const promise = Promise.resolve();
  //   getArticles.mockResolvedValue(mockedArticles);
  //   // const result = await getArticles();
  //   // expect(result).toEqual(mockedArticles);

  //   await act(() => promise);
  //   wrapper.update();
  //   const articleCard = wrapper.find(ArticleCard);
  //   expect(articleCard.props()).toEqual(mockedArticles);
  // });

  // it('should send the tags to the tags component', async () => {
  //   const promise = Promise.resolve();
  //   getTags.mockResolvedValue(mockedTags);

  //   await act(() => promise);
  //   wrapper.update();
  //   const tags = wrapper.find(<Tag />).at(3);
  //   expect(tags).toEqual(mockedTags);
  // });
});
