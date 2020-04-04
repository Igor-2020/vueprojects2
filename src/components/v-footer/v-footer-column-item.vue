<template>
    <div class="v-footer-column-item">
        <div v-if="type_footer_item==='1'">
            <a href="#"><router-link :to="{name:router_path}">{{caption}}</router-link></a>
        </div>
        <div v-if="type_footer_item==='2'">
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-footer-column-item",
        props:{
            router_path:{
                type: String,
                default: "Home"
            },
            caption:{
                type:String,
                default: ""
            },
            type_footer_item:{
                type: String,
                default:"1"
            }
        }
    }
</script>

<style lang="scss">
    .v-footer-column-item {
        font-size: 16px;
        color: #ffffff;
        text-align: left;
        padding-left: 85px;
        a {
            text-decoration: none;
            color: #888;
            transition: all 0.45s;
        }
        a:hover {
            color: lightgreen; /* Цвет текста */
            background: transparent; /* Цвет фона */
        }

    }

</style>