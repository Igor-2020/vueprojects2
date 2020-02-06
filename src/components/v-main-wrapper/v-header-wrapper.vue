<template>
    <div class="v-header-wrapper">
       {{text}}
    </div>
</template>

<script>
    export default {
        props: {
        },
        data(){
            return{
               text: "THis is HEador Wrapper"
            }

        }

    };
</script>
<style>
.v-header-wrapper {
   border-style: solid;
   border-color: red;
   height: 256px;
   display: flex;
}

</style>