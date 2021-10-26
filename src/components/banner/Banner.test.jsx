import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Banner from 'components/Banner/Banner';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { BannerContainer, BannerHeading, BannerWrapper } from './banner.style';

Enzyme.configure({ adapter: new Adapter() });

describe('Banner', () => {
  const wrapper = shallow(<Banner />);

  it('should render the banner', () => {
    const holder = wrapper.find(BannerContainer);
    expect(holder.exists()).toBe(true);
  });

  it('should render the name of the banner', () => {
    const holder = wrapper.find(BannerWrapper).text();
    expect(holder).toBe('Conduit');
  });

  it('should render the heading sentence in the banner', () => {
    const holder = wrapper.find(BannerHeading).text();
    expect(holder).toBe('A place to share your knowledge');
  });
});
