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
        <div class="carousel-caption d-md-block adopcion">
          <div class="text-left">
            <h5 class="lead adopcion">PATITAS EN ADOPCION</h5>
            <h6>Adopta una mascota y dale un hogar</h6>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/encontrados.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-md-block perdidas">
          <div class="text-left">
            <h5 class="lead">PATITAS PERDIDAS</h5>
            <h6>Busca mascotas que se hayan perdido</h6>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/lonelycat.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-md-block encontradas">
          <div class="text-right">
            <h5 class="lead ">PATITAS ENCONTRADAS</h5>
            <h6>Encuentra a los dueños de una mascota perdida</h6>
        </div>
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


.carousel-inner {
  height: 100%;
}

.carousel-caption .text-left {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px ;
  font-weight: lighter;
  padding: 1em;
  width: 100%;

  
}
 
.carousel-caption .text-right {
  text-align: right;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 10px ;



}
.carousel-caption h5 {
  font-size: 2em;
  font-weight: bold;

}

.carousel-caption h6 {
  font-size: 1.5em;
  font-weight: normal;

}

.carousel-caption p {
  font-size: 1.5em;
}

</style>