<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="#">Agente🐾Patita</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse show" id="navbarColor02" style="">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/quienessomos">QuienesSomos</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Busca Patitas</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/patitasAdopcion">Patitas en Adopción</router-link>
              <router-link class="dropdown-item" to="/patitasPerdidas">Patitas Perdidas</router-link>
              <router-link class="dropdown-item" to="/patitasEncontradas">Patitas Encontradas</router-link>
            </div>
          </li>

          
          <li class="nav-item">
            <router-link class="nav-link" to="/comunidad">Comunidad</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>




</template>

<style>


</style>