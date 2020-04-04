<template>
    <div class="v-catalog-item">
        <v-my-popup
                v-if="isInfoPopupVisible"
                @closePopup="closePopupInfo"
                rightBtnTitle="В корзину"
                :popupTitle=item_data.name>
            <img class="v-catalog-item__image" :src=" require('../../assets/images/' + item_data.image) " alt="img">
           <div>
               <p class="v-catalog-item__name">{{item_data.name}}</p>
               <p class="v-catalog-item__price">Цена: {{item_data.price}} тнг.</p>
           </div>
        </v-my-popup>

        <img class="v-catalog-item__image" :src=" require('../../assets/images/' + item_data.image) " alt="img">
        <p class="v-catalog-item__name">{{item_data.name}}</p>
        <p class="v-catalog-item__price">Цена: {{item_data.price}} тнг.</p>
        <button class="v-catalog-item__show-info-btn"
                @click="showInfoItem"
        >
            Показать
        </button>
        <button
                class="v-catalog-item__add_to_cart_btn"
                @click="addToCart">
            Купить
        </button>
    </div>

</template>

<script>
    import vMyPopup from "../v-popup/v-popup"
    export default {
        name: "v-catalog-item",
        components:{
          vMyPopup
        },
        data(){
            return{
                isInfoPopupVisible: false
            }
        },
        props: {
            item_data:{
                type: Object,
                default(){
                    return{
                }
            }
          }
        },
        methods:{
            closePopupInfo(){
                this.isInfoPopupVisible = false;
            },

            addToCart(){
              this.$emit('addToCart',this.item_data);
            },

            showInfoItem(){
                this.isInfoPopupVisible = true;
            }
        }
    };
</script>
<style lang="scss">
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0;
        padding: $padding+2;
        margin-bottom: $margin*2;

        &__image {
            width: 100px;
        }

        &__show-info-btn {
            color: black;
        }

        &__add_to_cart_btn {
            position: relative;
            display: inline-block;
            font-family: Arial, Helvetica, FreeSans, "Liberation Sans", "Nimbus Sans L", sans-serif;
            font-size: 1em;
            font-weight: 700;
            color: rgb(245, 245, 245);
            text-shadow: 0 -1px rgba(0, 0, 0, .1);
            text-decoration: none;
            user-select: none;
            padding: .3em 1em;
            outline: none;
            border: none;
            border-radius: 3px;
            background: #0c9c0d linear-gradient(#82d18d, #0c9c0d);
            box-shadow: inset #72de26 0 -1px 1px, inset 0 1px 1px #98ff98, #3caa3c 0 0 0 1px, rgba(0, 0, 0, .3) 0 2px 5px;
            -webkit-animation: pulsate 1.2s linear infinite;
            animation: pulsate 1.2s linear infinite;
        }

        &__add_to_cart_btn:hover {
            -webkit-animation-play-state: paused;
            animation-play-state: paused;
            cursor: pointer;
        }

        &__add_to_cart_btn:active {
            top: 1px;
            color: #fff;
            text-shadow: 0 -1px rgba(0, 0, 0, .3), 0 0 5px #ffd, 0 0 8px #fff;
            box-shadow: 0 -1px 3px rgba(0, 0, 0, .3), 0 1px 1px #fff, inset 0 1px 2px rgba(0, 0, 0, .8), inset 0 -1px 0 rgba(0, 0, 0, .05);
        }

        @-webkit-keyframes pulsate {
            50% {
                color: #fff;
                text-shadow: 0 -1px rgba(0, 0, 0, .3), 0 0 5px #ffd, 0 0 8px #fff;
            }
        }
        @keyframes pulsate {
            50% {
                color: #fff;
                text-shadow: 0 -1px rgba(0, 0, 0, .3), 0 0 5px #ffd, 0 0 8px #fff;
            }
        }
    }

</style>