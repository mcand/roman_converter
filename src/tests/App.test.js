import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Menu from '../Components/Menu';
import RomanNumberConverter from '../Components/RomanNumberConverter';

describe('Menu', () => {
  it('renders a Menu', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Menu).length).toBe(1)
  });

  it('renders the Converter', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RomanNumberConverter).length).toBe(1)
  });
})
