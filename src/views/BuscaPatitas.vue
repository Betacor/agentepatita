<template>
	<NavBar/>
	<CardsPatitas/>
  <Footer/>
  

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CardsPatitas from '@/components/CardsPatitas.vue'
import Footer from '@/components/Footer.vue';


export default {
	name: "Patitas",
	components:{
		NavBar,
		CardsPatitas,
    Footer
	}
}

</script>
