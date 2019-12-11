import React from 'react';
import { ColorSmall } from './ColorSmall';
import { shallow } from 'enzyme';

describe('ColorSmall', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ColorSmall
      color={'#baddc3'}
      key='3'
    />)
  });
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});