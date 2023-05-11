<template>
	<NavBar/>
  <CardsProducts/>
  <Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CardsProducts from '@/components/CardsProducts.vue'
import Footer from '@/components/Footer.vue';


export default {
	name: "Productos",
	components:{
		NavBar,
    CardsProducts,
    Footer
	}
}

</script>
