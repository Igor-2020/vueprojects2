<template>
    <div class="popup-wrapper">
    <div class="v-my-popup">
        <div class = "v-my-popup__header">
            <span>{{popupTitle}}</span>
            <span>
                <i class ="material-icons"
                    @click="closePopup"
                >
                    close
                </i>
            </span>
        </div>
        <div class = "v-my-popup__content">
            <slot>

            </slot>
        </div>
        <div class = "v-my-popup__footer">
            <button
                    class="close_modal"
                    @click="closePopup"
            >
                Закрыть
            </button>

            <button class="submit_btn">
                {{rightBtnTitle}}
            </button>
        </div>
    </div>
    </div>
</template>

<script>

    export default {
        name: "v-my-popup",
        components:{
        },
        props:{
            popupTitle:{
                type:String,
                default:"Popup name"
            },
            rightBtnTitle:{
                type: String,
                default:'OK'
            }
        },
        data(){
            return{
            }
        },
        computed:{},
        methods: {
            closePopup(){
                this.$emit("closePopup");
            },
        },
        watch:{},
    };
</script>

<style lang="scss">
    .popup-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left:0;
        top:0;
        bottom:0;
        background: rgba(64,64,64,0.5);
    }
    .v-my-popup {
        padding: 16px;
        position: fixed;
        top:50px;
        width: 400px;
        background: #bcccaa;
        box-shadow: 0 0 17px 0;
        z-index: 10;
        &__header,&__footer {
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .submit_btn{
            padding: 8px;
            color: black;
            background: lightgreen;
        }
        .close_modal{
            padding: 8px;
            color: black;
            background: lightcoral;
        }
    }
</style>