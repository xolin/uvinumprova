import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('Header is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  }),
  test('Image is present', () => {
    const wrapper = mount(Header)
    const image = wrapper.findAll('img');
    expect(image.length).toBe(1);
  }),
  test('Header links present', () => {
    const wrapper = mount(Header)
    const links = wrapper.findAll('a');
    expect(links.length).toBe(3)
  })
})
