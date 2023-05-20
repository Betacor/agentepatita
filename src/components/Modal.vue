<template>
  <div class="modal" v-if="selectedImage">
    <div class="modal-content">
      <img :src="getImageUrl()" alt="" class="modal-image">
      <button class="modal-close" @click="closeModal">Cerrar</button>
    </div>
    

</div>
</template>

<script>
export default {
  props: ['selectedImage'],
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.$emit('closeModal');
      history.pushState(null, null, '/comunidad/' + this.$route.params.pet);
    },
    getImageUrl() {
    const currentUrl = new URL(window.location.href);
    return decodeURIComponent(currentUrl.searchParams.get('img'));
  }
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  width: auto;
  max-height: 80vh;
  background-color: white;
  padding: 20px;
  text-align: center;
}

.modal-image {
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.modal-close {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #0088cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
