import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';

import Recommends from './components/recommends';

describe('recommends', () => {
  it('should render', () => {
    const component = shallow(<Recommends />);

    expect(component).toMatchSnapshot();
  });

  it('should something', () => {
    const wrapper = shallow(<Recommends />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'handleToggle');
    instance.handleToggle();

    expect(instance.handleToggle).toHaveBeenCalled();
  });
});
