<template>
	
	<div class="container-fluid">
    <div>
      <h1>Publica tu aviso</h1>
      <div class="container-btn">
        <button type="button" class="btn btn-dark"><a href="/patitas"> Patitas</a></button>
        <button type="button" class="btn btn-dark"><a href="/patitas"> Productos</a></button>
        <!-- <button type="button" class="btn btn-dark">Servicios</button> -->
      </div>
      
    </div>
  </div>
	
    
</template>

<script setup>

</script>

<style scoped>

h1{
  display: block;
}

.container-fluid{
  background-color: #e59244;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1{
  text-align: center;
}
.btn{
  margin: 5px;
  padding: 10px;
  font-size: 1.5em;

}

.container-btn{
  display: flex;
  justify-content: center;
  align-items: center;

}

a{
  text-decoration: none;
  color: white;
}

</style>