<template>
	
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">Agente🐾Patita</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarColor02">
				<ul class="navbar-nav ms-auto">
					
					<li class="nav-item">
						<router-link class="nav-link" to="/quienessomos">Quienes Somos</router-link>
					</li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Busca Patitas</a>
              <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/patitasAdopcion">Patitas en Adopción</router-link>
                  <router-link class="dropdown-item" to="/patitasPerdidas">Patitas Perdidas</router-link>
                  <router-link class="dropdown-item" to="/patitasEncontradas">Patitas Encontradas</router-link>
              </div>
          </li>
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/patitas-json">Busca Productos</router-link>
					</li> -->

          <li class="nav-item">
						<router-link class="nav-link" to="/comunidad">Comunidad</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/contacto">Contacto</router-link>
					</li>
					
				</ul>
				<!-- <form class="d-flex">
					<input class="form-control me-sm-2" type="search" placeholder="Buscar">
					<button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
				</form> -->
			</div>
		</div>
	</nav>
    
</template>

<script setup>

</script>

<style scoped>

/* .navbar {
    height: 80px;
    
} */

.navbar-brand{
    font-size: 1.6em
}
.navbar-nav .nav-link {
    font-size: 1.2em; /* ajusta el tamaño de la fuente según sea necesario */
}

nav{
  z-index: 100 !important;
  border-color: blueviolet;
}



</style>