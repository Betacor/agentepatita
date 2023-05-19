import { createStore } from 'vuex'

export default createStore({
  state: {
    listaGatos: null,
    listaPerros: null,
    loading: false,

  },
  
  mutations: {
    rellenarListaGatos(state,payload){
      state.listaGatos = payload;
    },

    rellenarListaPerros(state,payload){
      state.listaPerros = payload;
    },

    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  
  actions: {
    async cargarGatos({commit}){
      commit('setLoading', true);
      try {
        let key = 'live_6f65DJomb0NDI6Xa2cLJ5fMHEotnAO0jLScOU4MdpnpuBiyC0IAHUFRmc0PUr85R' 
        let url = await `https://api.thecatapi.com/v1/images/search?limit=8&api_key=`

        let promesa = await fetch(url + key)
        let gatos = await promesa.json();
        commit('rellenarListaGatos', gatos)
        console.log(gatos) 
      } finally {
        commit('setLoading', false);
      }
    },
  

    async cargarPerros({commit}){
      commit('setLoading', true);
      try {
        let key = 'live_20rj4PcdC0yJyJuQimx6kmoQwiYwPIzY0l0WwLvUqzOrpINNURDW9lR0W3A47H6O' 
        let url = await 'https://api.thedogapi.com/v1/images/search?limit=8&api_key='

        let promesa = await fetch(url + key)
        let perros = await promesa.json();
        commit('rellenarListaPerros', perros)
        console.log(perros) 
      } finally {
        commit('setLoading', false);
      }

    },

  },
  
})
