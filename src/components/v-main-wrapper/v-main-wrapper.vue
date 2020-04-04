<template>
    <div class="v-main-wrapper">
        <v-header-wrapper/>
        <v-catalog/>
        <v-cart
            v-if="CART.length"
            :cart_data="CART"
        />
        <v-footer-container/>
    </div>
</template>

<script>
    import  vHeaderWrapper from "./v-header-wrapper.vue"
    import vCatalog from "./v-catalog.vue"
    import vCart from "./v-cart.vue"
    import vFooterContainer from "../v-footer/v-footer-container"
    import {mapGetters} from 'vuex'

    export default {
        name: "v-main-wrapper",
        components:{
            vHeaderWrapper,
            vCatalog,
            vCart,
            vFooterContainer
        },
        props:{
        },
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters([
                'CART'
            ])
        },
        methods: {},
        watch:{},
    };

</script>
<style>
.v-main-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    background-color: #bcccaa;


}
</style>