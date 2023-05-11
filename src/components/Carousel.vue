<template>

  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/gato-mano.jpeg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>PATITAS EN ADOPCION</h5>
          <p>Adopta una mascota y dale un hogar</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/encontrados.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>PATITAS PERDIDAS</h5>
          <p>Busca mascotas que se hayan perdido</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/lonelycat.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>PATITAS ENCONTRADAS</h5>
          <p>Encuentra a los dueños de una mascota perdida</p>
          
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>


</template>

<script setup>

</script>

<style scoped>

.carousel-item img {
  height: 500px; /* o cualquier otra altura deseada */
  object-fit: cover;
}

.carousel-caption {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  left: -40%;
  transform: translateY(-100%);
}

.carousel-inner {
  height: 100%;
}

.carousel-caption h5 {
  font-size: 2em;
}

.carousel-caption p {
  font-size: 1.5em;
}

</style>