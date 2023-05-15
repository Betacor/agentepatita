<template>
	<NavBar/>
  <CardsAdopcion/>
  <Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CardsAdopcion from '@/components/CardsAdopcion.vue';


export default {
	name: "Productos",
	components:{
    NavBar,
    Footer,
    CardsAdopcion
  }
}

</script>
