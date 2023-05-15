<template>
	<NavBar/>
  <CardsPerdidas/>
  <Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CardsPerdidas from '@/components/CardsPerdidas.vue';


export default {
	name: "Productos",
	components:{
    NavBar,
    Footer,
    CardsPerdidas
}
}

</script>
