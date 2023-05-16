import { createStore } from 'vuex'


export default createStore({
  state: {
    listaGatos: null
  },
  
  mutations: {
    rellenarListaGatos(state,payload){
      state.listaGatos = payload;
    }
  },
  actions: {
    async cargarGatos({commit}){
      let key = 'live_6f65DJomb0NDI6Xa2cLJ5fMHEotnAO0jLScOU4MdpnpuBiyC0IAHUFRmc0PUr85R' 
      // let url = await 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key='
      let url = await 'https://api.thecatapi.com/v1/images/search?limit=8&api_key='

      let promesa = await fetch(url + key)
      let gatos = await promesa.json();
      commit('rellenarListaGatos', gatos)
      console.log(gatos) 
    }
  },
  modules: {
  }
})
