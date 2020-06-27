import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import cart from './../modules/moudleA'
const store = new Vuex.Store({
    modules: {
        cart
    },

}) ;

export default store;
