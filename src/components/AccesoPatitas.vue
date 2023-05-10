<template>
  <div class="container">

    <div class="card-container col-10">
      <div class="card adoption">
        <img src="../assets/img/cat_adopcion.png" alt="Mascotas en adopción">
        <h2>Mascotas en adopción</h2>
      </div>
      <div class="card lost">
        <img src="../assets/img/cat_perdidos.png" alt="Mascotas perdidas">
        <h2>Mascotas perdidas</h2>
      </div>
      
      <div class="card found">
        <img src="../assets/img/cat_encontrados.png" alt="Mascotas encontradas">
        <h2>Mascotas encontradas</h2>
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

/* *{
    
    box-sizing: border-box;
    
} */

	.container{
		border: 5px solid green;
		margin: 1em auto;
    height: auto;

	}

  .card-container {
		margin: 1em auto;
		border: 5px solid red;
    display: flex;
    height: auto;

    justify-content: space-between;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #ca1212;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.1);
  }
  
  .lost {
    background-color: hsl(210, 87%, 46%);
  border-radius: 10%;

  }
  
  .adoption {
    background-color: #32cd32;
  }
  
  .found {
    background-color: #1e90ff;
  }
  .card img {
  width: 80%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 50%; */
}

  </style>
  