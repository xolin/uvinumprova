import { mount } from '@vue/test-utils'
import CheckoutItemsList from '@/components/CheckoutItemsList.vue'

describe('CheckoutItemsList', () => {
  test('CheckoutItemsList is mounted and display', () => {
    const wrapper = mount(CheckoutItemsList, {
      propsData: {
        "items": [{
          "id": 1,
          "attributes": {
            "currency_code":"EUR",
            "estimated_shipping_costs":"0.00",
            "estimated_shipping_costs_without_tax":"4.09",
            "subtotal_price":"244.00",
            "total_items":4,
            "total_price":"244.00",
            "total_vat_taxes":"43.21"}
          }]
        }
      })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.props('items')).toBeDefined();
    const tds = wrapper.findAll('td img')
    expect(tds.length).toBe(1)
  })
})
