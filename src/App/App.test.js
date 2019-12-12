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
  let wrapper;

  beforeEach(() => {
    let wrapper = shallow(<App />)
  })

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
})
