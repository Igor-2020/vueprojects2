<template>
    <div class="v-header-wrapper">
        <router-link :to="{name:'Home'}">
            <div class ="v-header-wrapper-logo"/>
        </router-link>
        <div class="v-header-wrapper-text">
            {{text}}
        </div>

    </div>
</template>

<script>
    export default {
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

    height: 160px;
    display: flex;
    background-image: url('../../assets/images/banner1.png');
    background-size: cover;
    background-repeat: round;
    align-items: center;
    justify-content: center;
}
.v-header-wrapper-text{
    margin: 0 auto;
    font-style: normal;
    font-family: "Tahoma";
    font-size: 40px;
    color:white;
    font-weight: bold;
}
.v-header-wrapper-logo {
    margin: 0;
    background-image: url('../../assets/images/128x128_logo.png');
    width: 128px;
    height: 128px;
}
</style>