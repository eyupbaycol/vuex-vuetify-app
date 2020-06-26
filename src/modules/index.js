import Vuex from 'vuex';
import Vue from 'vue';
import jsonData from './store'

//Load vuex

Vue.use(Vuex);


//Create Store

export default new Vuex.Store({
    modules:{
        jsonData
    }
})