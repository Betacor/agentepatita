<template>

	<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/gato-mano.jpeg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Patitas en adopción</h5>
          <p>Adopta una mascota y dale un hogar</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/lonelycat.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Patitas Perdidas</h5>
          <p>Busca mascotas que se hayan perdido</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/dog-girl.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Patitas Encontradas</h5>
          <p>Encuentra a los dueños de una mascota perdida</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>

</template>

<script setup>

</script>

<style scoped>
/* 
.carousel {
  height: 500px;
} */
</style>