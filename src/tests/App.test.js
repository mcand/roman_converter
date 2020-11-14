import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Menu from '../Components/Menu';

describe('Menu', () => {
  it('renders a Menu', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Menu).length).toBe(1)
  });
})

