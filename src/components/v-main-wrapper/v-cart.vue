<template>
    <div class="v-cart">
        <h1>Cart</h1>
        <v-cart-item
           v-for  = "(item1,index) in cart_data"
           :key="item1.article"
            :cart_item_data="item1"
            @deleteFromCart="deleteFromCart(index)">

        </v-cart-item>
    </div>
</template>

<script>
    import vCartItem from './v-cart-item'
    import {mapActions} from 'vuex'
    export default {
        components:{
          vCartItem
        },
        props: {
            cart_data:{
                type:Array,
                default() {
                    return [];
                }
            }
        },
        data(){
            return{

            }
        },
        methods:{
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index){
                this.DELETE_FROM_CART(index)
            },

        }
    };
</script>
