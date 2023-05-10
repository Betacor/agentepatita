<template>
	<NavBar/>
  <h1>Patitas</h1>
	<CardsPatitas/>
  

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CardsPatitas from '@/components/CardsPatitas.vue'

export default {
	name: "Patitas",
	components:{
		NavBar,
		CardsPatitas
	}
}

</script>
