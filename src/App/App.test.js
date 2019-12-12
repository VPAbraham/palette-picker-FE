import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {

  it('should match the snapshot with all data passed in', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should update color1 in state when refreshPalettes is called', () => {
    let wrapper = shallow(<App />)

    const mockPalette = {
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84"
  }

    wrapper.instance().refreshPalettes(mockPalette)

    expect(wrapper.state('color1')).toEqual('#baddc3')
  })

  it('should update color2 in state when refreshPalettes is called', () => {
    let wrapper = shallow(<App />)

    const mockPalette = {
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84"
  }

    wrapper.instance().refreshPalettes(mockPalette)

    expect(wrapper.state('color2')).toEqual('#ff6767')
  })

  it('should update color3 in state when refreshPalettes is called', () => {
    let wrapper = shallow(<App />)

    const mockPalette = {
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84"
  }

    wrapper.instance().refreshPalettes(mockPalette)

    expect(wrapper.state('color3')).toEqual('#ffe596')
  })

  it('should update color4 in state when refreshPalettes is called', () => {
    let wrapper = shallow(<App />)

    const mockPalette = {
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84"
  }

    wrapper.instance().refreshPalettes(mockPalette)

    expect(wrapper.state('color4')).toEqual('#b3e6ff')
  })

  it('should update color5 in state when refreshPalettes is called', () => {
    let wrapper = shallow(<App />)

    const mockPalette = {
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84"
  }

    wrapper.instance().refreshPalettes(mockPalette)

    expect(wrapper.state('color5')).toEqual('#41406d')
  })

  it('should set state to true when openModal is called', () => {
    let wrapper = shallow(<App />)

    wrapper.instance().openModal()

    expect(wrapper.state('modalIsOpen')).toEqual(true)
  })

  it('should set state to false when closeModal is called', () => {
    let wrapper = shallow(<App />)

    wrapper.instance().closeModal()

    expect(wrapper.state('modalIsOpen')).toEqual(false)
  })

  it('should set color1 in state when selectPalette is called', () => {
    let wrapper = shallow(<App />)
    let color1 = '#FFFFFF'
    let color2 = '#000000'
    let color3 = '#FFFFFF'
    let color4 = '#000000'
    let color5 = '#FFFFFF'

    wrapper.instance().selectPalette(color1, color2, color3, color4, color5)

    expect(wrapper.state('color1')).toEqual('#FFFFFF')
  })

  it('should set color2 in state when selectPalette is called', () => {
    let wrapper = shallow(<App />)
    let color1 = '#FFFFFF'
    let color2 = '#000000'
    let color3 = '#FFFFFF'
    let color4 = '#000000'
    let color5 = '#FFFFFF'

    wrapper.instance().selectPalette(color1, color2, color3, color4, color5)

    expect(wrapper.state('color2')).toEqual('#000000')
  })

  it('should set color3 in state when selectPalette is called', () => {
    let wrapper = shallow(<App />)
    let color1 = '#FFFFFF'
    let color2 = '#000000'
    let color3 = '#FFFFFF'
    let color4 = '#000000'
    let color5 = '#FFFFFF'

    wrapper.instance().selectPalette(color1, color2, color3, color4, color5)

    expect(wrapper.state('color3')).toEqual('#FFFFFF')
  })

  it('should set color4 in state when selectPalette is called', () => {
    let wrapper = shallow(<App />)
    let color1 = '#FFFFFF'
    let color2 = '#000000'
    let color3 = '#FFFFFF'
    let color4 = '#000000'
    let color5 = '#FFFFFF'

    wrapper.instance().selectPalette(color1, color2, color3, color4, color5)

    expect(wrapper.state('color4')).toEqual('#000000')
  })

  it('should set color5 in state when selectPalette is called', () => {
    let wrapper = shallow(<App />)
    let color1 = '#FFFFFF'
    let color2 = '#000000'
    let color3 = '#FFFFFF'
    let color4 = '#000000'
    let color5 = '#FFFFFF'

    wrapper.instance().selectPalette(color1, color2, color3, color4, color5)

    expect(wrapper.state('color5')).toEqual('#FFFFFF')
  })
})
