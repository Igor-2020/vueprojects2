<template>
    <div class="v-header-wrapper">
        <router-link :to="{name:'Home'}">
            <div class ="v-header-wrapper-logo"/>
        </router-link>
        <div class="v-header-wrapper-text">
            <p>
            {{text}}
            </p>
        </div>
        <v-menu/>

    </div>
</template>

<script>
    import vMenu from "./v-menu.vue"
    export default {
        name:"v-header-wrapper",
        components:{
            vMenu

        },
        props: {
        },
        data(){
            return{
               text: "ИНТЕРНЕТ-МАГАЗИН Всё для ванной комнаты"
            }

        }

    };
</script>
<style>
.v-header-wrapper {

    height: 270px;
    display: flex;
    background-image: url('../../assets/images/banner5.png');
    background-size: cover;
    background-repeat: round;
    align-items: center;
    justify-content: center;
    position: relative;
}
.v-header-wrapper-text{
   /* margin: 0 auto;*/
    font-style: normal;
    font-family: "Tahoma";
    font-size: 40px;
    color:white;
    font-weight: bold;
    margin-top: -65px;
    margin-left: 150px;
}
.v-header-wrapper-logo {
    margin: 0 0px 50px 20px;
    background-image: url('../../assets/images/256x256_logo.png');
    width: 180px;
    height: 180px;
    background-size: cover;
}
</style>