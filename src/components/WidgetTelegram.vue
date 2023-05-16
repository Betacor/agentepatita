<template>

  <div class="container-fluid ">
    <div class="row justify-content-center align-items-center pb-5">

      <div>
        <div id="telegram-widget-container"></div>
      </div>
      
      
    </div>
  </div>
</template>

<script>

export default {

  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', 'PortalPatitas/1');
    script.setAttribute('data-width', '100%');
    document.getElementById('telegram-widget-container').appendChild(script);
  }
  
  
}
</script>

<style scoped>

* {
  background-color: white;
}


.gatos{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.img-fluid {
  transition: transform 0.2s;
}

.img-fluid:hover {
  transform: scale(1.1);
}

.cat-image {
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 30px;

}

.title {
  font-size: 2.5em;
  margin: 2em 0;
  text-align: center;
  color: rgb(0, 0, 0);
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
}

#telegram-widget-container{
  margin: 4em 0;
}





</style>