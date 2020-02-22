import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueSession from 'vue-session'


Vue.use(VueSession);
Vue.use(Vuex);


let store = new Vuex.Store({
  state: {
   cart: [],
   items: []
  },
  mutations: {

    SET_ITEMS_TO_STATE: (state, items) => {
          state.items = items;
    },
    SET_CART: (state, item) => {
      if (state.cart.length) {
        let isItemExists = false;
        state.cart.map(function (item) {
          if (item.article === item.article) {
            isItemExists = true;
            item.quantity++
          }
        })
        if (!isItemExists) {
          state.cart.push(item)
        }
      } else {
        state.cart.push(item)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {

    GET_ITEMS_FROM_API({commit}){
        return axios('http://localhost:8081/items', {method: 'GET'})
                .then((items)=>{commit('SET_ITEMS_TO_STATE',items.data)
                    return items;
                })
                .catch((error)=>{
                    console.log(error)
                })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  getters: {
    ITEMS(state){
        return state.items
    },
    CART(state) {
      return state.cart;
    }
  }
});

export default store;