<template>
  <div id="app">
      <keep-alive>
      <router-view>
        {{ip_user}}
      </router-view>
      </keep-alive>

  </div>
</template>

<script>

    import axios from 'axios'
    let getIP = 'https://api.ipify.org?format=json'


export default {
  name: 'app',
    data(){
      return{
          ip_user: []
      }
    },
    mounted() {
        axios.get(getIP)
            .then(response => (this.ip_user = JSON.stringify(response.data)))
            .catch(error => console.log(error));
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
  margin-top: 0px;
}
</style>
