export interface CheckoutResumeAttributes {
    subtotal_price:                       string;
    total_price:                          string;
    total_items:                          number;
    total_vat_taxes:                      string;
    estimated_shipping_costs:             string;
    estimated_shipping_costs_without_tax: string;
    currency_code:                        string;
}
