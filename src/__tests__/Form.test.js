import { shallow } from 'enzyme';
import React from 'react';
import Form from '../Form';

const onChange = jest.fn();
const wrapper = shallow(<Form onChange={onChange} />);

describe('Form:', () => {
  it('expect to render Form component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render 5 TextFields and 1 Button', () => {
    expect(wrapper.find('TextField').length).toBe(5);
    expect(wrapper.find('WithStyles(Button)').exists()).toBe(true);
  });
});

describe('Events:', () => {
  it('should validate on change', () => {
    const event = {
      target: {
        name: 'yourName',
        value: 'Matti',
      },
    };
    const fields = {
      error: '',
      value: 'Matti',
      valid: true,
    };
    wrapper.find('#yourName').simulate('change', event);
    expect(wrapper.state('yourName')).toEqual(fields);
  });

  it('should show error on change', () => {
    const event = {
      target: {
        name: 'username',
        value: 'Matt',
      },
    };
    const fields = {
      error: 'Username must be at least 5 characters long',
      value: 'Matt',
      valid: false,
    };
    wrapper.find('#username').simulate('change', event);
    expect(wrapper.state('username')).toEqual(fields);
  });

  it('should validate on blur', () => {
    const event = {
      target: {
        name: 'surname',
        value: '',
      },
    };
    const fields = {
      error: 'This field is required',
      value: '',
      valid: false,
    };
    wrapper.find('#surname').simulate('blur', event);
    expect(wrapper.state('surname')).toEqual(fields);
  });

  it('should validate on submit', () => {
    const state = {
      yourName: {
        error: '',
        value: 'Matti',
        valid: true,
      },
      surname: {
        error: 'This field is required',
        value: '',
        valid: false,
      },
      username: {
        error: 'Username must be at least 5 characters long',
        value: 'Matt',
        valid: false,
      },
      email: {
        error: 'This field is required',
        value: '',
        valid: false,
      },
      password: {
        error: 'This field is required',
        value: '',
        valid: false,
      },
    };
    wrapper.find('#button').simulate('click');
    expect(wrapper.state()).toEqual(state);
  });
});
