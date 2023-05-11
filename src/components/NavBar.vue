<template>
	
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Agente🐾Patita</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarColor02">
				<ul class="navbar-nav ms-auto">
					
					<li class="nav-item">
						<a class="nav-link" href="#">Quienes Somos</a>
					</li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Busca Patitas</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Patitas en Adopción</a>
                            <a class="dropdown-item" href="#">Patitas Perdidas</a>
                            <a class="dropdown-item" href="#">Patitas Encontradas</a>
                        </div>
                    </li>
					<li class="nav-item">
						<a class="nav-link" href="#">Busca Productos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contacto</a>
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

.navbar {
    height: 80px; /* ajusta la altura según sea necesario */
}

.navbar-brand{
    font-size: 1.6em
}
.navbar-nav .nav-link {
    font-size: 1.2em; /* ajusta el tamaño de la fuente según sea necesario */
}




</style>