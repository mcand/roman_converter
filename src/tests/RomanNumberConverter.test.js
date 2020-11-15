import React from 'react';
import RomanNumberConverter from '../Components/RomanNumberConverter';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

describe('RomanNumberConverter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RomanNumberConverter />);
  })
  it('renders the converter', () => {
    expect(wrapper.find('h2').text()).toBe('Roman Number Converter');
  });

  it('renders 2 TextFields for each type of number', () => {
    expect(wrapper.find(TextField).at(0).prop('placeholder')).toBe('Roman Number');
    expect(wrapper.find(TextField).at(1).prop('placeholder')).toBe('Decimal Number');
  });

  it('renders two buttons to convert numbers', () => {
    expect(wrapper.find(Button).at(0).text()).toBe('Convert');
    expect(wrapper.find(Button).at(1).text()).toBe('Convert');
  });

  // I shold probably test the handlers functions and how they react
  // to state changes
});