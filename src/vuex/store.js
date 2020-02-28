import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueSession from 'vue-session'


Vue.use(VueSession);
Vue.use(Vuex);

const backendApiItems = 'http://localhost:8081/items';
const getIPApi = 'https://api.ipify.org/?format=json';

let store = new Vuex.Store({
  state: {
   cart: [],
   items: [],
   ipClient: [],
  },
  mutations: {

    SET_IP_CLIENT_TO_STATE:(state, ipClient) =>{
      state.ipClient=ipClient;
    },
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

    GET_IP_CLIENT({commit}){
      return axios(getIPApi,{method: 'GET'})
          .then((response)=>{commit('SET_IP_CLIENT_TO_STATE',response.data.ip)
            return response;
          })
          .catch((error)=>{
            console.log(error)
           })
    },
    GET_ITEMS_FROM_API({commit}){
        return axios(backendApiItems, {method: 'GET'})
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
    IP_CLIENT(state){
      return state.ipClient;
    },
    ITEMS(state){
        return state.items;
    },
    CART(state) {
      return state.cart;
    }
  }
});

export default store;