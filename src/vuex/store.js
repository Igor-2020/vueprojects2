import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueSession from 'vue-session'


Vue.use(VueSession);
Vue.use(Vuex);

//backendAPI
const api='http://localhost:8081/';
const apiItems = api + 'items';
const apiSessionData = api + 'sessiondata';
const apiUser = api+'user';
const apiCheckUser =apiUser+'/checkUser/';

//foreign
const getIPApi = 'https://api.ipify.org/?format=json';

//config request
const contentType = 'application/json';
const config = {
    headers: {
        'Content-Type': contentType
    }
};

//other params
const clientUser = {
    name: "ClientUser"
};


let store = new Vuex.Store({
  state: {
      cart: [],
      items: [],
      ipClient: [],
      sessionData: [],
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
    },

    SET_SESSION_DATA: (state, sessionData) =>{
        if(sessionData) {
            state.sessionData.push(sessionData);
        }
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
        return axios(apiItems, {method: 'GET'})
                .then((items)=>{commit('SET_ITEMS_TO_STATE',items.data)
                    return items;
                })
                .catch((error)=>{
                    console.log(error)
                })
    },
    ADD_TO_CART({commit}, items) {
      commit('SET_CART', items);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },

    ADD_SESSION_DATA({commit},sessionData){
       commit('SET_SESSION_DATA',sessionData)
    },
    POST_SESSION_DATA(){
         // const sessionData = this.state.sessionData[0];
          const _data = JSON.stringify({
              ip: this.state.sessionData[0][0],
              sessionId: this.state.sessionData[0][1],
              sessionCode: this.state.sessionData[0][2],
              dateInput:this.state.sessionData[0][3],
              idUser:this.state.sessionData[0][4]
          });
          console.log(_data);

          axios.post(apiSessionData, _data, config)
             .catch((error) => {
                  console.log(error);
              });
      },

    CHECK_USER(){
          return axios.get(apiCheckUser+clientUser.name)
              .then((response)=>{
                  console.log(response);
                  return response;
              })
              .catch((error)=>{
                  console.log(error);
                  this.$router.go(1);
              })
      },


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
    },
    SESSION_DATA(state){
        return state.sessionData;
    }
  }
});

export default store;