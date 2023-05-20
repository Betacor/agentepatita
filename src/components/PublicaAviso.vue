<template>
	
	<div class="container-fluid">
    <div>
      <h1>🔎Publica tu mascota</h1>
      <div class="container-btn">
        <FormAdopcion/>
        <FormPerdidos/>
        
      </div>
    </div>
  </div>


  
	
    
</template>

<script>
import FormAdopcion from './FormAdopcion.vue';
import FormPerdidos from './FormPerdidos.vue'

export default {
  name: "publicaAviso",

  components: {
    FormAdopcion,
    FormPerdidos,
  }
  
}

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