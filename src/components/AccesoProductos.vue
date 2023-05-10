<template>
    <div class="card-container">
      <div class="card adoption">
        <img src="ruta-de-tu-imagen-adopcion.jpg" alt="Mascotas en adopción">
        <h2>Mascotas en adopción</h2>
        <p>Adopta una mascota y dale un hogar</p>
      </div>
      <div class="card lost">
        <img src="../assets/img/catinspector.png" alt="Mascotas perdidas">
        <h2>Mascotas perdidas</h2>
        <p>Busca mascotas que se hayan perdido</p>
      </div>
      
      <div class="card found">
        <img src="ruta-de-tu-imagen-encontradas.jpg" alt="Mascotas encontradas">
        <h2>Mascotas encontradas</h2>
        <p>Encuentra a los dueños de una mascota perdida</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PetCards",
  };
  </script>
  
  <style>
  .card-container {
    display: flex;
    justify-content: space-between;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #e6e6e6;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.1);
  }
  
  .lost {
    background-color: #ff8c00;
  }
  
  .adoption {
    background-color: #32cd32;
  }
  
  .found {
    background-color: #1e90ff;
  }
  .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

  </style>
  