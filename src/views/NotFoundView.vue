<template>
  
  <div class="container">

    <div class="card" style="width: rem;">
      <img src="../assets/img/7_1-SamFind-mascota.jpeg" class="card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">Parece que te has perdido</h5>
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        
        <div class="container-btn d-flex justify-content-center">
          <a href="/" class="btn btn-primary">Volver</a>
        </div>
        
      </div>
    </div>
  </div>


</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


export default {
	name: "NotFoundView",
	components:{
    NavBar,
    Footer,
  }
}

</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Para centrar verticalmente */
}

/* .card-body{
  display: flex;
  justify-content: center;
  align-items: center;

} */

.card-title{
  text-align: center;
}

.btn{
  align-items: center;
}

/* .card-img-top{
  width: 500px;
} */


</style>
