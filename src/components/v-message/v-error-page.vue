<template>
    <div class="v-error-page">
        <span style="align-content: center">{{messageError}}</span>
        <a href="#"><router-link :to="{name:'Home'}">Назад</router-link></a>
    </div>
</template>

<script>
    export default {
        name: "v-error-page",
        props:{
            messageError:{
                type:String,
                default:"Ошибка"
            }
        }
    }
</script>

<style lang="scss">
    .v-error-page {
        background-color: mistyrose;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>