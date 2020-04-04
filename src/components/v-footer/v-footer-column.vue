<template>
    <div class ="v-footer-column">
        <p class="v-footer-column__title">
            {{title}}
        </p>
        <div v-if="tag==='1'">
            <p></p>
            <v-footer-column-item type_footer_item="1" router_path="Home" caption="Как купить"/>
            <p></p>
            <v-footer-column-item caption="Возврат товара"/>
            <p></p>
            <v-footer-column-item caption="Другие нормативные документы"/>
        </div>
        <div v-if="tag==='2'">
            <v-footer-column-item caption="ВКонтакте"/>
            <p></p>
            <v-footer-column-item caption="Instagram"/>
            <p></p>
            <v-footer-column-item caption="Facebook"/>
            <p></p>
            <v-footer-column-item caption="Twitter"/>

        </div>
        <div v-if="tag==='3'"></div>

        <div v-if="tag==='4'">
        <p></p>
        <v-footer-column-item caption="Адрес: ул. Гоголя 144 "/>
        </div>
    </div>
</template>

<script>
    import vFooterColumnItem from "./v-footer-column-item"
    export default {
        components:{
          vFooterColumnItem
        },
        props:{
           title:{
               type: String,
               default: "empty"
           },
           tag:{
               type:String,
               default:"empty"
           }

        },
        name: "v-footer-column"
    }
</script>

<style lang="scss">
    .v-footer-column{
        display: inline-block;
        white-space: normal;
        vertical-align: top;
        margin-right: -3px;
        width: 25%;
        padding-right: 20px;
        box-sizing: border-box;
        text-align: left;
        &__title{
            text-align: center;
            font-size: large;
        }
    }
</style>