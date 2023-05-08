<template>
  <NavBar/>
  <Carousel/>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Carousel,
  }
}
</script>
