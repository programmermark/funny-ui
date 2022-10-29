import Input from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test input plugin', () => {
  const app = createApp({}).use(Input)
  expect(app.component(Input.name)).toBeTruthy()
})

test('test input snapshot', () => {
  const wrapper = mount(Input)
  expect(wrapper.html()).toMatchSnapshot()
})
