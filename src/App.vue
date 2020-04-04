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
              'SET_SESSION_DATA',
          ]),
      },
      methods: {
          ...mapActions([
              'GET_IP_CLIENT',
              'ADD_SESSION_DATA',
              'POST_SESSION_DATA',
              'CHECK_USER',
              'CHECK_LOCAL_STORAGE'
          ]),
          getDataInputClient: function(){
              return Date.now();
          },


      },
    mounted() {
        //ищем юзера если найден то продолжаем дальше, если нет то сессия не создается
        this.CHECK_USER()
            .then((response2) => {
                console.log("1");
                console.log(response2);

                //проверяем если такой пользователь есть, то продолжаем
                if (response2.data) {
                    let idUser = response2.data.id;
                    //заполняем данные по сессии
                    this.GET_IP_CLIENT()
                        .then((response) => {
                            if (response.data) {

                                let session_param = [];
                                //получаем из localstorage код сессии если их нет то создаем
                                let checkLocalStorage = localStorage.getItem('session_code');

                                //установка локальных параметров
                                localStorage.setItem("ip", response.data.ip);
                                localStorage.setItem("dataInput", this.getDataInputClient());
                                localStorage.setItem("idUser", idUser);

                                //если код сессии не найден, то создаем новую сессию
                                if (!checkLocalStorage) {
                                    this.$session.start();
                                    //ip
                                    session_param.push(response.data.ip);
                                    //session_id
                                    session_param.push(this.$session.id().split(':')[1]);
                                    //session_code
                                    let session_code = ("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g, function (c) {
                                        let r = Math.random() * 16 | 0, v = (c == "x") ? r : (r & 0x3 | 0x8);
                                        return v.toString(16);
                                    });
                                    session_param.push(session_code);
                                    //session_data_input_clinet
                                    session_param.push(this.getDataInputClient());
                                    //session_id_user
                                    session_param.push(idUser);


                                    console.log("(3)user_data := " + session_param);
                                    //добавляем собранные параметры в store
                                    this.ADD_SESSION_DATA(session_param);
                                    //отправляем на сервер бэкенд
                                    this.POST_SESSION_DATA();

                                    //установка локальных параметров
                                    localStorage.setItem("session_code", session_code);
                                    localStorage.setItem("session_id", this.$session.id().split(':')[1]);

                                    //уничтожаем экземляр сессии
                                    this.$session.destroy();


                                }
                                //если код сессии найден в localstorage, то передаем эти данные в бэкенд
                                else {
                                    //ip
                                    session_param.push(localStorage.getItem('ip'));
                                    //session_id
                                    session_param.push(localStorage.getItem('session_id'));
                                    //session_code
                                    session_param.push(localStorage.getItem('session_code'));
                                    //session_data_input_clinet
                                    session_param.push(this.getDataInputClient());
                                    //session_id_user
                                    session_param.push(idUser);

                                    //добавляем собранные параметры в store
                                    this.ADD_SESSION_DATA(session_param);
                                    //отправляем на сервер бэкенд
                                    this.POST_SESSION_DATA();
                                    //уничтожаем экземляр сессии
                                }
                            }
                        })
                        .catch((error) => {
                            console.log('(4)GET_IP_CLIENT = ' + error)
                        })
                }
                //если пользователь не найден, то переходим на страницу ошибки
                else {
                    this.$router.push("/errormessage");
                }

            })
            .catch((error) => {
                console.log('(5)CHECK_USER = ' + error)
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
  color: white;
  margin-top: 0;
  background-color: dimgray;
    background-image: url('assets/images/backgorund1.jpg');
    background-size: cover;
    background-repeat: round;

}
</style>
