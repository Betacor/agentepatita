<template>
  <NavBar/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
	name: "AboutView",
	components:{
		NavBar
	}
}

</script>
