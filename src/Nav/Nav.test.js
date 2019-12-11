import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav
      openModal={jest.fn()}
      refreshColors={jest.fn()}
    />)
  });
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});