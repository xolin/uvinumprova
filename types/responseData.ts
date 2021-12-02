export interface ResponseData {
    data: Data;
}

export interface Data {
    type:       string;
    id:         number;
    attributes: DataAttributes;
    stores:     Stores;
    messages:   Message[];
}

export interface DataAttributes {
    subtotal_price:                       string;
    total_price:                          string;
    total_items:                          number;
    total_vat_taxes:                      string;
    estimated_shipping_costs:             string;
    estimated_shipping_costs_without_tax: string;
    currency_code:                        string;
}

export interface Message {
    code:    string;
    type:    string;
    message: string;
    context: Context;
}

export interface Context {
    id_store:    number;
    id_discount: number;
    code:        string;
}

export interface Stores {
    data: Datum[];
}

export interface Datum {
    type:          string;
    id:            number;
    attributes:    DatumAttributes;
    relationships: Relationships;
}

export interface DatumAttributes {
    name:               string;
    estimated_delivery: EstimatedDelivery;
    slug:               string;
    shipping_costs:     string;
    shipping_name:      string;
}

export interface EstimatedDelivery {
    from: From;
    to:   From;
}

export interface From {
    quantity: number;
    type:     string;
}

export interface Relationships {
    items: Item[];
}

export interface Item {
    type:       string;
    id:         number;
    attributes: ItemAttributes;
}

export interface ItemAttributes {
    name:                   string;
    size:                   string;
    original_unit_price:    string;
    current_unit_price:     string;
    price_without_tax:      string;
    has_offer:              boolean;
    quantity:               number;
    image_url:              string;
    url:                    string;
    options:                any[] | OptionsClass;
    stock:                  number;
    min_sale_quantity:      number;
    max_sale_quantity:      number;
    min_sale_quantity_pack: boolean;
    brand:                  string;
    category:               string;
    vintage:                string;
}

export interface OptionsClass {
    other_vintage: boolean;
}
