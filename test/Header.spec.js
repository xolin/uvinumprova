import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('Header is mounted and display', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
    
    const image = wrapper.findAll('img');
    expect(image.length).toBe(1);

    const links = wrapper.findAll('a');
    expect(links.length).toBe(3)
  })
})
