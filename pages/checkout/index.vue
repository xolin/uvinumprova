<script lang="ts">
import CartDataService from "~/services/CartDataService";
import responseData from "~/types/responseData";

export default {
  data() {
    return {
      cartData: {},
    };
  },
  methods: {
    getData() {
      CartDataService.getAll()
        .then((response: responseData) => {
          this.$data.cartData = response.data;
        })
        .catch((e: Error) => {
          console.log("Error on getData():", e);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<template>
  <div>
    <Header></Header>
    <Breadcrumb></Breadcrumb>
    <CheckoutItemsList
      v-if="cartData.stores"
      :items="cartData.stores.data[0].relationships.items"
    ></CheckoutItemsList>
    <div class="flex mt-2">
      <div class="flex-column ckeckout-details">
        <CheckoutResume
          v-if="cartData.attributes"
          :attributes="cartData.attributes"
        ></CheckoutResume>
        <CheckoutCoupon></CheckoutCoupon>
      </div>
      <div class="ckeckout-auth border">
        <Auth></Auth>
      </div>
    </div>
  </div>
</template>
<style>
.ckeckout-details {
  width: 33%;
  padding-right: 0.5rem;
}
.ckeckout-auth {
  width: 66%;
}
</style>
