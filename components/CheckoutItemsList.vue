<script lang="ts">
export default ({
  props: {
    items: Array,
  }
})
</script>

<template>
  <section class="flex-column mt-2 p-4">
    <div class="flex-center w-full">
      <h2 class="heading">Resumen de tu cesta</h2>
    </div>
    <div>
      <table class="w-full">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">precio unidad</th>
            <th scope="col">cantidad</th>
            <th scope="col" class="bold">subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td><img :src="item.attributes.image_url" /></td>
            <td>
              <a :href="item.attributes.url">{{ item.attributes.name }}a</a>
            </td>
            <td>{{ item.attributes.current_unit_price }} €</td>
            <td>
              <select>
                <option v-for="(option, index) in item.attributes.stock" :value="option" :selected="item.attributes.quantity === index ? true : false ">
                  {{option}}
                </option>
              </select>
            </td>
            <td class="bold">{{ item.attributes.price_without_tax }} €</td>
            <td><a href="#">Eliminar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
tr {
  border-bottom: 1px solid black;
  text-align: center;
}

th {
  text-transform: uppercase;
}

th:not(.bold) {
  font-weight: 400;
}

img {
  max-width: 200px;
  max-height: 200px;
}

.bold{
  font-weight: 600;
}
</style>
