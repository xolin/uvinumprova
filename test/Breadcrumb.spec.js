import { mount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'

describe('Breadcrumb', () => {
  test('Breadcrumb is a Vue instance', () => {
    const wrapper = mount(Breadcrumb)
    expect(wrapper.vm).toBeTruthy()
  }),
  test('Breadcrumb links present', () => {
    const wrapper = mount(Breadcrumb)
    const links = wrapper.findAll('a');
    expect(links.length).toBe(2)
  })
})
