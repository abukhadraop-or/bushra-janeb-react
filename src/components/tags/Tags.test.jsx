import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Tag from './Tags';
import { Tags } from './tags.styles';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('services/fake-tags-service', () => jest.fn());

describe('Tag', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Tag
        onTagSelect={jest.fn()}
        tags={[
          {
            id: 1,
            name: 'C++',
          },
        ]}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls onTagSelect on click on a tag', () => {
    const wrapper = mount(
      <Tag
        onTagSelect={jest.fn()}
        tags={[
          {
            id: 1,
            name: 'C++',
          },
        ]}
      />
    );
    const button = wrapper.find(Tags);
    button.simulate('click');
    expect(wrapper.props().onTagSelect).toHaveBeenCalled();
  });
});
