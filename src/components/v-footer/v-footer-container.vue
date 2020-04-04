<template>
    <div class = "v-footer-container">
        <v-footer-column title="Поддержка:" tag="1"/>
        <v-footer-column title="Соц.сети:" tag="2"/>
        <v-footer-column title="" tag="3"/>
        <v-footer-column title="Контакты:" tag="4"/>
    </div>
</template>

<script>
    import vFooterColumn from "./v-footer-column"
    export default {
        components:{
          vFooterColumn
        },
        name: "v-footer-container"
    }
</script>

<style lang="scss">
    .v-footer-container{
        width: 100%;
        clear: both;
        background-color: darkslategray;
        height: 300px;
        box-shadow: #5c832f;
    }

</style>