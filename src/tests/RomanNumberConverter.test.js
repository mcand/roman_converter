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

  it('can convert a roman to a decimal', () => {
    wrapper.find(TextField).at(0).simulate('change', {target:{ value: 'V'}});
    wrapper.find(Button).at(0).simulate('click');
    expect(wrapper.find(TextField).at(1).prop('value')).toBe(5);
  });

  it('can convert a decimal number to decimal', () => {
    wrapper.find(TextField).at(1).simulate('change', {target:{ value: '10'}});
    wrapper.find(Button).at(1).simulate('click');
    expect(wrapper.find(TextField).at(0).prop('value')).toBe('X');
  });

  it('should show an error when typed an invalid roman number', () => {
    wrapper.find(TextField).at(0).simulate('change', {target: { value: '10'}});
    wrapper.find(Button).at(0).simulate('click');
    expect(wrapper.find(TextField).at(0).prop('helperText')).toBe('Invalid roman number');
  });

  it('should show an error when typed an invalid decimal number', () => {
    wrapper.find(TextField).at(1).simulate('change', {target: { value: 'VVV'}});
    wrapper.find(Button).at(1).simulate('click');
    expect(wrapper.find(TextField).at(1).prop('helperText')).toBe('Must be integer from 1 to 4000');
  });
});