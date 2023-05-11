<template>
	<NavBar/>
  <FormContacto/>
  <Footer/>  
  

  
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import FormContacto from '@/components/FormContacto.vue';


export default {
	name: "Contacto",
	components:{
    NavBar,
    Footer,
    FormContacto
  }
}

</script>
