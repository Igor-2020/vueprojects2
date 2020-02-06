<template>
    <div class="v-catalog-item">
        <p>Name: Item1</p>
        <p>Price: 500.0$</p>
        <p>Count: 1</p>
        <button>Add to cart</button>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
<style lang="scss">
    .v-catalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0;
        padding: $padding+2;
        margin-bottom: $margin*2
    }
</style>