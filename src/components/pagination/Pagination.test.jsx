import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Pagination } from './Pagination';
import { PageButton } from './pagination.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('Pagination', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Pagination
        currentPage={1}
        itemCount={41}
        onPageChange={jest.fn()}
        pageSize={10}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls onPageChange on click', () => {
    const wrapper = mount(
      <Pagination
        currentPage={1}
        itemCount={41}
        onPageChange={jest.fn()}
        pageSize={10}
      />
    );
    const button = wrapper.find(PageButton).at(3);
    button.simulate('click');
    expect(wrapper.props().onPageChange).toBeCalled();
  });
});
