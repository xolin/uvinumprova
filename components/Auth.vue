<script lang="ts" setup></script>

<template>
  <section>
    <div class="flex-between">
      <h2 class="heading">Crea tu cuenta</h2>
      <p><a href="#">Entra si ya estás registrado</a></p>
    </div>
    <form>
      <div>
        <label for="username">Nombre*</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label for="surname">Apellidos*</label>
        <input type="text" name="surname" />
      </div>
      <div>
        <label for="email">Correo electrónico*</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label for="password">Contraseña*</label>
        <input type="password" name="password" />
      </div>
    </form>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
}
</style>
