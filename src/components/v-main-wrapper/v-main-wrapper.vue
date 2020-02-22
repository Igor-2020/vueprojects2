<template>
    <div class="v-main-wrapper">
        <v-header-wrapper/>
        <v-catalog/>
        <v-cart/>

    </div>
</template>

<script>
    import vHeaderWrapper from "./v-header-wrapper.vue"
    import vCatalog from "./v-catalog.vue"
    import vCart from "./v-cart.vue"


    export default {
        name: "v-main-wrapper",
        components:{
            vHeaderWrapper,
           vCatalog,
            vCart
        },
        props:{
        },
        data(){
            return{

            }
        },
        computed:{},
        methods: {},
        watch:{},
    };

</script>
<style>
.v-main-wrapper {
    max-width: 1100px;
    margin: 0 auto;

}
</style>