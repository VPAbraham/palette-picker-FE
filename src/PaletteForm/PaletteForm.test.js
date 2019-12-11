import React from 'react';
import { PaletteForm } from './PaletteForm';
import { shallow } from 'enzyme';

describe('ProjectForm', () => {
  let wrapper;
  beforeEach(() => {
    const projects = [{ id: 20, name: 'Fall Colors' }, { id: 21, name: 'Ocean Vibes' }, { id: 22, name: 'Seeing Red' }];
    const palettes = [
      { id: 6, name: 'Pal1', projects_id: 20, color1: '#baddc3', color2: '#ff6767', color3: '#ffe596', color4: '#b3e6ff', color5: '#632ad7' },
      { id: 7, name: 'Pal2', projects_id: 20, color1: '#ab7146', color2: '#b3e6ff', color3: '#41406d', color4: '#b3e66tr', color5: '#41406d' },
      { id: 8, name: 'Pal3', projects_id: 22, color1: '#993f42', color2: '#d8ac97', color3: '#4e6cc4', color4: '#b4r35', color5: '#41406d' }
    ]
    wrapper = shallow(<PaletteForm
      projects={projects}
      color1={'#baddc3'}
      color2={'#d8ac97'}
      color3={'#993f42'}
      color4={'#b4r35'}
      color5={'#ff6767'}
      key='palette-form'
    />)
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update paletteName in state when handleChange is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'paletteName',
        value: 'Fish'
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('paletteName')).toEqual('Fish')
  })

  it('should update projectName in state when handleClick is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'projectName',
        value: 'Sea',
        innerText: 'Sea'
      }
    }

    wrapper.instance().getProjectNames()
    wrapper.instance().handleClick(mockEvent)

    expect(wrapper.state('projectName')).toEqual('Sea')
  })

  it('should reset paletteName, projectName, and error in state when resetAllInputs is called', () => {
    const defaultState = {
      paletteName: 'Fish',
      projectName: 'Sea',
      error: 'Maybe an error here',
      savingPalette: false,
      buttonText: 'Select Project'
    }

    const expectedState = {
      paletteName: '',
      projectName: '',
      error: '',
      savingPalette: false,
      buttonText: 'Select Project'
    }

    wrapper.instance().setState(defaultState)
    wrapper.instance().resetAllInputs()

    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should call submitForm when the save palette button is clicked', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().submitForm = jest.fn();
    const defaultState = {
      paletteName: '',
      projectName: '',
      error: '',
      savingPalette: true
    }

    wrapper.instance().setState(defaultState)
    wrapper.find('.save-palette').simulate('click', mockEvent);

    expect(wrapper.instance().submitForm).toHaveBeenCalled();
  })
});
