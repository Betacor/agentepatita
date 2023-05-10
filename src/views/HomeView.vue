<template>
  <NavBar/>
  <Carousel/>
  <AccesoPatitas/>
	<AccesoProductos/>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';
import AccesoPatitas from '@/components/AccesoPatitas.vue';
import AccesoProductos from '@/components/AccesoProductos.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar,
    Carousel,
    AccesoPatitas,
    AccesoProductos
}
}
</script>
