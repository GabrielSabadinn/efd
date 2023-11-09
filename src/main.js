import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";
import router  from './routes/index.js'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'

const store = new createStore({
    state:()=>( {        
            id:null,
            titulo:null,
            idItem:null,
            codigo:null          
    }),
    mutations: {
        setId(state,id ){
            state.id = id;
        },
        setTitulo(state,titulo ){
            state.titulo = titulo;
        },
        setIdItem(state,idItem ){
            state.idItem = idItem;
        },
        setCodigo(state,codigo){
            state.codigo = codigo;
        }
    },
  })



createApp(App).use(router).use(BootstrapVue3).use(store).mount('#app')