import Pagination from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test pagination plugin', () => {
  const app = createApp({}).use(Pagination)
  expect(app.component(Pagination.name)).toBeTruthy()
})

test('test pagination snapshot', () => {
  const wrapper = mount(Pagination)
  expect(wrapper.html()).toMatchSnapshot()
})
