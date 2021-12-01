<template>
  <section class="flex-between">
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeCm1vDXefK5__M4yqDOdOWcnVGqAlW9wkA&usqp=CAU"
        alt="Tu tienda de scrap favorita"
      />
    </div>
    <div class="links-grid">
      <a href="#">Inicio</a>
      <a href="#">Contacto</a>
      <a href="#">Nuestro blog</a>
    </div>
  </section>
</template>

<style scoped>
.links-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.25rem;
  padding: 1rem;
  align-content: center;
}

img {
  width: 120px;
}
</style>