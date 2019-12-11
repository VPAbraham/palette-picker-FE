import React from 'react';
import { Palette } from './Palette';
import { shallow } from 'enzyme';

describe('Palette', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Palette
      color1={'#baddc3'}
      color2={'#d8ac97'}
      color3={'#993f42'}
      color4={'#b4r35'}
      color5={'#ff6767'}
      key='palette'      
    />)
  });
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});