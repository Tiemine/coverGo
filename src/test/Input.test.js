/* eslint-disable no-undef */
import { beforeEach, expect } from 'vitest';
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

import Input from '../components/Input.vue';

// Pinia store config
const global = {
  plugins: [createTestingPinia()],
}

describe('Unit tests', async() => {

  beforeEach(() => {
    setActivePinia(createPinia());
  })

  test ('Class import', async() => {
    expect(Input).toBeTruthy();
  });

  test('Property: title', async() => {
    const title = 'Input Label';
    const wrapper = mount(Input, { props: { title }, global });
  
    const label = wrapper.find('label');
    const labelAttributes = label.attributes();
    expect(labelAttributes.for).toEqual(`${title}`);

    const input = wrapper.find('input');
    const inputAttributes = input.attributes();
    expect(inputAttributes.name).toEqual(`${title}`);

    wrapper.unmount();
  });

  test('Property: placeholder', async() => {
    const placeholder = 'Placeholder';
    const wrapper = mount(Input, { props: { placeholderText: placeholder }, global });

    const input = wrapper.find('input');
    const inputAttributes = input.attributes();
    expect(inputAttributes.placeholder).toEqual(`${placeholder}`);

    wrapper.unmount();
  });
});

describe('Component tests', async() => {
  test('Default render', async() => {
    const wrapper = mount(Input, { global });
    expect(wrapper).toBeTruthy();

    const label = wrapper.find('label');
    expect(label.attributes('class')).toEqual('label');

    const input = wrapper.find('input');
    expect(input.attributes('class')).toEqual('input');

    wrapper.unmount();
  });

  test('Events calls', async() => {
    const wrapper = mount(Input, { global });
    const input = wrapper.find('input')

    const inputText = 'Input text';
    await input.setValue(inputText);
    expect(input.element.value).toEqual(inputText);
  })
});