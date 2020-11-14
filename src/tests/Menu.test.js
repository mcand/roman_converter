import React from 'react';
import Menu from '../Components/Menu';
import { shallow, mount } from 'enzyme';

describe('Menu', () => {
  it('renders a div', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.type()).toBe('div');
  })

  it('passes `brand` through', () => {
    const brandName = 'Optiopay test';
    const wrapper = mount(<Menu />);
    wrapper.setProps({ brand: brandName });
    expect(wrapper.prop('brand')).toBe(brandName);
  });
})
