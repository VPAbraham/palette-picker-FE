import React from 'react';
import { Color } from './Color';
import { shallow } from 'enzyme';

describe('Color', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Color
      position={'color1'}
      color={'#baddc3'}
    />)
  });
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});