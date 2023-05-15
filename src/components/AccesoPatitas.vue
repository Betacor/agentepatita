<template>

  <div class="container-fluid">

		<div class="row justify-content-center">

      <h1 class="title">🐾Revisa las mascotas publicadas</h1>

      <div class="card">
        <a href="/patitasAdopcion">
          <img src="../assets/img/cat_adopcion.png" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">Patitas en Adopción</h5>
          <!-- <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p> -->
        </div>
      </div>

      <div class="card">
        <a href="/patitasPerdidas">
          <img src="../assets/img/cat_perdidos.png" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">Patitas Perdidas</h5>
          <!-- <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p> -->
        </div>
      </div>

      <div class="card">
        <a href="/patitasEncontradas">
          <img src="../assets/img/cat_encontrados.png" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">Patitas Encontradas</h5>
          <!-- <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p> -->
        </div>
      </div>
    </div>
  </div>

</template>
  
  <script>
  export default {
    name: "AccesoPatitas",
  };
  </script>
  
  <style scoped>

*{
  background-color: #ffd887;

}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3em;
  /* background-color: #ffd887; */
} 
.card {
  margin: 30px;
  padding: 30px;
  border: 0;
  background-color: #ffd887;
  max-width: 300px;

  
}

.card img {
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.card-img-top {
  /* height: 220px;  */
  object-fit: cover; /*para asegurarse de que las imágenes se ajusten al tamaño especificado sin deformarse */
  max-width: 100%;
}

.card-title{
  text-align: center;
  font-size: 1.5em;
}

.title {
    font-size: 2.5em;
    margin: 1.5em;
    text-align: center;
    /* font-weight: bold; */
    color: rgb(0, 0, 0);

}

</style>
  