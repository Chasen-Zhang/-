import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
   /* strict: true,*/
    state: {
        jsessionid: null
    },
    mutations: {
        login: (state, data) => {
        	
        },
        logout: (state) => {
        	
        }
        
    },
    modules:{}
})