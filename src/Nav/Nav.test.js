import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  const colorChange = jest.fn();
  const refreshColorsMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Nav
      openModal={jest.fn()}
      refreshColors={refreshColorsMock}
    />)
  });

  it('should match the snapshot with all data passed in', () => {
    console.log(wrapper)
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to refresh colors when colorChange is called', () => {
    const mockEvent = { preventDefault() { } }
    wrapper.find('.refresh').simulate('click', mockEvent)
    expect(refreshColorsMock).toHaveBeenCalled();
  })
});