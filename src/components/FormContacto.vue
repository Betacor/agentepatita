<template>
	
  <div class="container-fluid">

    <div class="row justify-content-center">
      <h1 class="title">Contacta al Agente🐾Patita!</h1>

      <div class="card mb-3" style="max-width: 1000px;">
        <div class="row g-0 justify-content-center">
          <div class="col-md-6 d-flex justify-content-center">
            <img src="../assets/img/review.png" class="img-fluid mx-auto rounded-start" alt="...">
          </div>
          <div class="col-md-5">
            <div class="card-body">
                            
              <form>
                <div class="mb-3">
                  <label for="nombre" class="form-label">Tu Nombre</label>
                  <input v-model="nombre" type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                  <label for="correo" class="form-label">Correo</label>
                  <input v-model="correo" type="email" class="form-control" id="correo" required>
                </div>
                <div class="mb-3">
                  <label for="mensaje" class="form-label">Mensaje</label>
                  <textarea v-model="mensaje" class="form-control" id="mensaje" rows="3" required></textarea>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
	
    
</template>

<script setup>

</script>

<style scoped>



.container-fluid{
  background-color: #ffd887;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}



.card{
  background-color: #ffd887;
  padding-bottom: 5em;
  border: 0;

}

img{
  margin: 3em;
  
}

.card-body{
  margin: 2em;
  text-align: justify;
  border: 0;

}



.title {
    font-size: 2.5em;
    margin: 1.5em;
    text-align: center;
    /* font-weight: bold; */
    color: rgb(0, 0, 0);

}

</style>