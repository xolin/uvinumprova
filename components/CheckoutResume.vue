<script lang="ts" setup></script>

<script lang="ts">
export default {
  props: {
    attributes: {
      type: Object,
    },
  },
  computed: {
    shippingPrice: function () {
      return this.attributes.estimated_shipping_costs_without_tax
        ? this.attributes.estimated_shipping_costs_without_tax + "€"
        : "Envío gratuito";
    },
    priceWithTax: function () {
      return this.attributes.subtotal_price - this.attributes.total_vat_taxes;
    },
  },
};
</script>

<template>
  <section class="flex-column">
    <div class="flex-center w-full">
      <h2 class="w-full heading">Resumen del pedido</h2>
    </div>
    <div class="flex-column">
      <div class="flex-between">
        <p>Total de productos(IVA incluido):</p>
        <p>{{ attributes.subtotal_price }}</p>
      </div>
      <div class="flex-between">
        <p>Total de envío(imp. excl.):</p>
        <p>{{ shippingPrice }}</p>
      </div>
      <div class="flex-between">
        <p>Total sin IVA:</p>
        <p>{{ priceWithTax }}€</p>
      </div>
      <div class="flex-between">
        <p>Total de impuestos:</p>
        <p>{{ attributes.total_vat_taxes }}€</p>
      </div>
      <div class="flex-between total-price">
        <p>Total a pagar</p>
        <p>{{ attributes.total_price }} €</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.total-price {
  font-weight: bold;
  border-top: 1px solid black;
}
</style>
