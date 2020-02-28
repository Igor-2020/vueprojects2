<template>
    <div class="v-header-wrapper">
        <router-link :to="{name:'Home'}">
            <div class ="v-header-wrapper-logo"/>
        </router-link>
        <div class="v-header-wrapper-text">
            {{text}}
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
               text: "ИНТЕРНЕТ-МАГАЗИН ВСЕ ДЛЯ ДОМА"
            }

        }

    };
</script>
<style>
.v-header-wrapper {

    height: 200px;
    display: flex;
    background-image: url('../../assets/images/banner1.png');
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
    margin-left: 50px;
}
.v-header-wrapper-logo {
    margin: 0 0px 50px 20px;
    background-image: url('../../assets/images/128x128_logo.png');
    width: 128px;
    height: 128px;
}
</style>