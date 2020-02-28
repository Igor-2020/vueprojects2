<template>
    <div class='v-catalog'>
        <h1>Товары</h1>

        <div class="v-catalog__list">
            <v-catalog-item
                    v-for="item in ITEMS"
                    :key="item.id"
                    :item_data="item"
                    @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "v-catalog",
    components: {
      vCatalogItem
    },
    props: {},
    data() {
      return {
      }
    },

    computed: {
        ...mapGetters([
        'ITEMS',
      ]),
    },
    methods: {
      ...mapActions([
        'GET_ITEMS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted() {

      this.GET_ITEMS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data ITEMS YESS!'+response)
        }
      })

      }
  }
</script>

<style lang="scss">
  .v-catalog {

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }
  }
</style>