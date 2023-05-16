<template>
  <NavBar/>
  <Carousel/>
  <AccesoPatitas/>
  <PublicaAviso/>
  <GatosCards/>
  <!-- <WidgetTelegram/> -->
  <Footer/>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';
import AccesoPatitas from '@/components/AccesoPatitas.vue';
import PublicaAviso from '@/components/PublicaAviso.vue';
import Footer from '@/components/Footer.vue';
import GatosCards from '@/components/GatosCards.vue';

import {mapActions} from 'vuex'
import WidgetTelegram from '@/components/WidgetTelegram.vue';


export default {
  name: 'Home',
  components: {
    NavBar,
    Carousel,
    AccesoPatitas,
    PublicaAviso,
    Footer,
    GatosCards,
    WidgetTelegram
},
  computed: {
    ...mapActions(['cargarGatos'])
  },
  async created() {
    await this.cargarGatos;
  }
}
</script>

<style scoped>

*{
  background-color: #ffd887;

}

</style>
