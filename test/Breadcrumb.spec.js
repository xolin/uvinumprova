import { mount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'

describe('Breadcrumb', () => {
  test('Breadcrumb is mounted and display', () => {
    const wrapper = mount(Breadcrumb)
    expect(wrapper.vm).toBeTruthy()
    const links = wrapper.findAll('a');
    expect(links.length).toBe(2)
  })
})
