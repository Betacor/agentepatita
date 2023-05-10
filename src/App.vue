<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/">Registro</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/quienessomos">Quienes Somos</router-link> |
    <router-link to="/patitas">Patitas</router-link> |
    <router-link to="/productos">Productos</router-link> |
    <router-link to="/contacto">Contacto</router-link> |
    <!-- <router-link to="/about">Administrador</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
