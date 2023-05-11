<template>
  <NavBar/>
  <Carousel/>
  <AccesoPatitas/>
  <Footer/>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';
import AccesoPatitas from '@/components/AccesoPatitas.vue';
import Footer from '@/components/Footer.vue';



export default {
  name: 'HomeView',
  components: {
    NavBar,
    Carousel,
    AccesoPatitas,
    Footer
  }
}
</script>
