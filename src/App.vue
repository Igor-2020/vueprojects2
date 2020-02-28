<template>
  <div id="app">
      <keep-alive>
      <router-view>

      </router-view>
      </keep-alive>

  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

  export default {
  name: 'app',
    data() {
        return {

        }
    },
      computed: {
          ...mapGetters([
              'IP_CLIENT',
          ]),
      },
      methods: {
          ...mapActions([
              'GET_IP_CLIENT',
          ]),
          getDataInputClient: function(){
              return Date.now().toString();
          }
      },
    mounted() {

        //заполняем данные по сессии
        this.GET_IP_CLIENT()
            .then((response) => {
                if (response.data) {
                    //TODO: получаем из куки код сессии и id сессиu если их нет то создаем
                    let session_param = [];

                    this.$session.start();
                    //ip
                    session_param.push(response.data.ip);
                    //session_id
                    session_param.push(this.$session.id().split(':')[1]);
                    //session_code
                    session_param.push(this.session_code = ("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g, function(c) {
                        let r = Math.random() * 16 | 0, v = (c == "x") ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    }));
                    //session_data_input_clinet
                    session_param.push(this.getDataInputClient());

                    console.log("user_data := " + session_param);
                    this.$session.destroy();
                }
            })
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color: dimgray;
}
</style>
