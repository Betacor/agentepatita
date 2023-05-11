<template>
  <NavBar/>
  <AgentePatita/>
  <Footer/>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AgentePatita from '@/components/AgentePatita.vue';
import Footer from '@/components/Footer.vue';


export default {
	name: "QuienesSomos",
	components:{
		NavBar,
    AgentePatita,
    Footer
	}
}

</script>
