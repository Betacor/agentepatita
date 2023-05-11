<template>
  <NavBar/>
  <Carousel/>
  <AccesoPatitas/>
  <PublicaAviso/>
  <Footer/>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';
import AccesoPatitas from '@/components/AccesoPatitas.vue';
import PublicaAviso from '@/components/PublicaAviso.vue';
import Footer from '@/components/Footer.vue';



export default {
  name: 'Home',
  components: {
    NavBar,
    Carousel,
    AccesoPatitas,
    PublicaAviso,
    Footer,
    
}
}
</script>

<style scoped>

*{
  background-color: #ffd887;

}

</style>
