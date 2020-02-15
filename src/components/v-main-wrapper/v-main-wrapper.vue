<template>
    <div class="v-main-wrapper">
        <v-header-wrapper/>
        <v-catalog/>
        <v-cart/>
        <p>{{title}}</p>
        <temp/>
    </div>
</template>

<script>
    import vHeaderWrapper from "./v-header-wrapper.vue"
    import vCatalog from "./v-catalog.vue"
    import vCart from "./v-cart.vue"
    import temp from "./temp.vue"

    export default {
        name: "v-main-wrapper",
        components:{
            vHeaderWrapper,
            vCatalog,
            vCart,
            temp
        },
        props:{
        },
        data(){
            return{
                title: "Main Wrapper Hallo Hallo"
            }
        },
        computed:{
        },
        methods: {},
        watch:{},
        mounted(){
            console.log("Hello main first internet-shop")
        }




    };
</script>
<style>
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;

}
</style>