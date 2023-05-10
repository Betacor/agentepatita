<template>
	<NavBar/>
  <h1>Productos</h1>
  <CardsProducts/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CardsProducts from '@/components/CardsProducts.vue'

export default {
	name: "Productos",
	components:{
		NavBar,
    CardsProducts
	}
}

</script>
