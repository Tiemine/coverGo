/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import Button from '../components/Button.vue';

describe('Unit tests', async() => {

  test ('Class import', async() => {
    expect(Button).toBeTruthy();
  });

  test('Property: type', async() => {
    const typesArray = ['primary', 'secondary'];
    for (let type of typesArray) {
      const wrapper = mount(Button, { props: { type } });
      const elClasses = wrapper.get('button').classes();
      expect(elClasses).toContain(`button-${type}`);
      wrapper.unmount();
    }
  });

  test('Property: customWidth', async() => {
    const sizesArray = ['', '320px'];
    for (let size of sizesArray) {
      const wrapper = mount(Button, { props: { customWidth: size } });
      const el = wrapper.get('button');
      const elClasses = el.classes();

      if (size === '')
        expect(elClasses).not.toContain('button--customWidth');
      else
        expect(elClasses).toContain('button--customWidth');
      wrapper.unmount();
    }
  });
});

describe('Component tests', async() => {
  test('Default render', async() => {
    const wrapper = mount(Button);
    expect(wrapper).toBeTruthy();
    expect(wrapper.attributes('class')).toEqual('button button-primary');
    wrapper.unmount();
  });

  test('Events calls', async() => {
    const wrapper = mount(Button);
    const button = wrapper.find('button')

    await button.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy()
  })
});