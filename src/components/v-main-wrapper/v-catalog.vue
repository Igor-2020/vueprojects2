<template>
    <div class="v-catalog">
        <h1>Welcome to Catalog</h1>
        <v-catalog-item/>
        <v-catalog-item/>
        <v-catalog-item/>
    </div>
</template>

<script>

    import vCatalogItem from "./v-catalog-item.vue"

    export default {
        components: {
            vCatalogItem
        },
        props: {
        },
    };
</script>
