<template>

  <div class="container-fluid">
		<div class="row justify-content-center">
      <h1 class="title">🐾Revisa las mascotas publicadas</h1>
      <div class="card">
        <a href="/patitasAdopcion">
          <img src="../assets/img/cat-adopcion.png" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">Patitas en Adopción</h5>
        </div>
      </div>
      <div class="card">
        <a href="/patitasPerdidas">
          <img src="../assets/img/cat_perdidos.png" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">Patitas Perdidas</h5>
        </div>
      </div>
      <div class="card">
        <a href="/patitasEncontradas">
          <img src="../assets/img/cat_encontrados.png" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">Patitas Encontradas</h5>
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
  object-fit: cover; 
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
  