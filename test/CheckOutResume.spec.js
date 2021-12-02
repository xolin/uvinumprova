import { mount } from '@vue/test-utils'
import CheckoutResume from '@/components/CheckoutResume.vue'

describe('CheckoutResume', () => {
  test('CheckoutResume is mounted and display', () => {
    const wrapper = mount(CheckoutResume, {
     propsData: {
      attributes: {
        "currency_code":"EUR",
        "estimated_shipping_costs":"0.00",
        "estimated_shipping_costs_without_tax":"4.09",
        "subtotal_price":"244.00",
        "total_items":4,
        "total_price":"244.00",
        "total_vat_taxes":"43.21"
      }
     }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.props('attributes')).toBeDefined();
    expect(wrapper.find(".total-price > p:nth-child(2)").text()).toContain("244.00 €");
  })
})
