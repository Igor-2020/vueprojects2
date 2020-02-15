import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    items: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_ITEMS_TO_STATE: (state, items) => {
          state.items = items;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
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
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error)
          return error;
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
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  }
});

export default store;