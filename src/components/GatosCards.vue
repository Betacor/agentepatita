<template>

  <div class="container-fluid ">
    <div class="row justify-content-center align-items-center pb-5">

      <h1 class="title">🐾Sé parte de nuestra Comunidad en Telegram</h1>

      

      <div class="d-flex justify-content-center text-center">
        <div class="row telegram row-cols-2 row-cols-md-4 g-4">
          <!-- <img src="../assets/img/patitastg.jpg" alt="" class="patitas"> -->
          <div id="telegram-widget-container"></div>
        </div>
      </div>

      <div class="spinner-container">
        <div v-if="!listaGatos" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="gatos d-flex justify-content-center text-center">
        <div class="row row-cols-2 row-cols-md-4 g-4">
          <div v-for="gato in listaGatos" :key="gato.id">
            <img :src="gato.url" alt="" class="img-fluid cat-image">
          </div>
        </div>
      </div>
      
      
      
      
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', 'PortalPatitasCanal/35');
    script.setAttribute('data-width', '50%');
    document.getElementById('telegram-widget-container').appendChild(script);
  },
  
  computed: {
    ...mapState(['listaGatos'])

  }
}
</script>

<style scoped>

* {
  background-color: #0088cc;
}


.gatos{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
}



.img-fluid {
  transition: transform 0.2s;
}

.img-fluid:hover {
  transform: scale(1.1);
}

.cat-image {
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 30px;

}

.title {
  font-size: 2.5em;
  margin: 2em 0;
  text-align: center;
  color: rgb(0, 0, 0);
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
}

#telegram-widget-container{
  margin: 2.5em 2em 2.5em 1.9em;
  /* border-radius: 50px; */
  height: auto;
  /* width: 520px; */
  background-color: white;
}

.telegram{
  /* max-width: 1000px; */
  /* margin-left: auto; */
  /* margin-right: 20px; */
  /* border: 2px solid green; */
  background-color: white;
  border-radius: 20px;

}

.patitas{
  height: 200px;
  width: 200px;
  object-fit: cover;
  
  border-radius: 50%;
  margin: 10px;
  
}



/* .telegram{
  border: 2px solid red;
} */





</style>