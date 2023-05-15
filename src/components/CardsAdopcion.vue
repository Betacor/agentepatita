<template>
  <div class="container-fluid">

		<div class="row justify-content-center">
      <h1 class="title">🐾Patitas en Adopción</h1>

      <div v-for="patita in patitasAdopcion" :key="patita.nombre" class="card col-md-2" style="width: 18rem;">
        <img :src= "patita.imagen" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">{{ patita.nombreMascota }}</h5>
          <h6 class="card-title">{{ patita.especie}} - {{ patita.sexo }}</h6>
          <p class="card-text">{{ patita.descripcion }}</p>
          <p class="card-text"><strong>Reportante : </strong>{{ patita.nombre }} {{ patita.apellido }}</p>
          <p class="card-text"><strong>Email : </strong>{{ patita.email }}</p>
          <p class="card-text"><strong>Telefono : </strong>{{ patita.telefono }}</p>
          
          <a href="#" class="btn btn-primary">Más Info</a>
        </div>
			</div>
		</div>
  </div>
	
</template>

<script>

import { PatitasAdopcion } from "@/services/patitasAdopcion.js";

export default {
	name: "CardsAdopcion",

	data: function(){
    return{
      patitasAdopcion: PatitasAdopcion.getAllPatitasAdopcion()
    };
  }
}

</script>
  
<style scoped>



.container-fluid{
  background-color: #e59244;
  /* width: 100%;
  margin: 0;
  padding: 0; */
}

.card {
	/* border: 0; */
	margin: 1em;
}

.card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* border: 1px solid rgba(226, 223, 223, 0.488); */

}

.card img {
	max-height: 300px;
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
	background-color: black !important;
	border: solid 1px black !important ;
  color: white;
  margin: 10px;
}

.btn:hover {
	cursor: pointer;
	color: #ffffff;
	border: solid 1px #e59244 !important ;

	background-color: #e59244 !important;
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