<template>
	<NavBar/>
  <CardsEncontradas/>
  <Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CardsEncontradas from '@/components/CardsEncontradas.vue';


export default {
	name: "Productos",
	components:{
    NavBar,
    Footer,
    CardsEncontradas
}
}

</script>
