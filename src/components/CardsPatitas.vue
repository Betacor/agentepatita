<template>
  <h1 class="title">Busca Patitas</h1>
  <div class="container">
    <div class="row g-3 justify-content-center">

      <!-- <div v-for="item in cursos" :key="item" class="card col-md-3" style="width: 18rem;">
        <img class="card-img-top" :src="item.img" alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">Curso {{ item.nombre }}</h2>
          <div class="info-curso">
            <p class="card-text">Precio: ${{ parseInt(item.precio).toLocaleString('es') }}</p>
            <p class="card-text">Duracion:{{ item.duracion }}</p>
            <p class="card-text">Cupos:{{ item.cupos }}</p>
            <p class="card-text">Inscritos:{{ item.inscritos }}</p>
          </div>

          <a href="#" class="btn btn-primary">Inscribir Curso</a>
        </div>
      </div> -->

      <div class="card col-md-3" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/ciudad_gatica-camita.jpg" alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">Camita para gato</h2>
          <div class="info-curso">
            <p class="card-text">Precio: $12.000</p>
            <p class="card-text">Descripción: Camita 50x 50 cm. Hecha a mano, ideal para gatitos adultos. 
</p>
            <p class="card-text">Tienda: Ciudad Gática</p>
            <p class="card-text">Envío: Por pagar con Starken</p>
            <p class="card-text">Entregas: Valparaíso, Viña, Quilpué</p>

          </div>

          <a href="#" class="btn btn-primary">Ir al website</a>
        </div>
      </div>

			<div class="card col-md-3" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/ciudad_gatica-catnip_pared.jpg" alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">Catnip de pared</h2>
          <div class="info-curso">
            <p class="card-text">Precio: $3.000</p>
            <p class="card-text">Descripción: El Catnip es una hierba que produce en los gatos un efecto de felicidad, se frotan en ella lo lamen, muerden y es 100% natural. Ayuda a los dientes y Relajará a tu gatito. Incluye adhesivo doble contacto para pegarlos.</p>
            <p class="card-text">Tienda: Ciudad Gática</p>
            <p class="card-text">Envío: Por pagar con Starken</p>
            <p class="card-text">Entregas: Valparaíso, Viña, Quilpué</p>

          </div>

          <a href="#" class="btn btn-primary">Ir al website</a>
        </div>
      </div>

			<div class="card col-md-3" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/ciudad_gatica-camita.jpg" alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">Camita para gato</h2>
          <div class="info-curso">
            <p class="card-text">Precio: $12.000</p>
            <p class="card-text">Descripción: Camita 50x 50 cm. Hecha a mano, ideal para gatitos adultos. </p>
            <p class="card-text">Tienda: Ciudad Gática</p>
            <p class="card-text">Envío: Por pagar con Starken</p>
            <p class="card-text">Entregas: Valparaíso, Viña, Quilpué</p>

          </div>

          <a href="#" class="btn btn-primary">Ir al website</a>
        </div>
      </div>

			

			

    </div>
  </div>

</template>

<script>

</script>

<style scoped>

.card {
	/* border: 0; */
	margin-right: 1em;
}

.card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* border: 1px solid rgba(226, 223, 223, 0.488); */

}

.card img {
	max-height: 100px;
	width: auto;
	overflow: hidden;
	object-fit: scale-down;
	margin: 1em;
}

h2 {
	font-size: 1rem;
	font-weight: 700;
}

.btn {
	background-color: #ffffff !important;
	border: solid 1px #ed8e1e !important ;
    color: #ed8e1e;
}

.btn:hover {
	cursor: pointer;
	color: #ffffff;
	background-color: #ed8e1e !important;
}


.title {
    font-size: 2.5em;
    margin: 1em;
    text-align: center;
    /* font-weight: bold; */
    color: rgb(0, 0, 0);

}

.card-text{
    margin: 0;
    text-align: left;
}

.info-curso{
    padding-bottom: 1em;
}

.card-title{
    font-size: 20px;
}
</style>