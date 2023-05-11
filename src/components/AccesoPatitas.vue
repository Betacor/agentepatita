<template>

  <div class="container">

    <div class="card">
      <a href="/patitas">
        <img src="../assets/img/cat_adopcion.png" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">Patitas en Adopción</h5>
        <!-- <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p> -->
      </div>
    </div>

    <div class="card">
      <a href="/patitas">
        <img src="../assets/img/cat_perdidos.png" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">Patitas Perdidas</h5>
        <!-- <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p> -->
      </div>
    </div>

    <div class="card">
      <a href="/patitas">
        <img src="../assets/img/cat_encontrados.png" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">Patitas Encontradas</h5>
        <!-- <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p> -->
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

  
}

.card img {
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.card-img-top {
  height: 220px; /* ajustar según sea necesario */
  object-fit: cover; /*para asegurarse de que las imágenes se ajusten al tamaño especificado sin deformarse */
}

.card-title{
  text-align: center;
  font-size: 1.5em;
}

</style>
  