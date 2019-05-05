<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-layout row wrap>
        <template v-for="stock in getStocks">
          <Stock :stock="stock" />
        </template>
      </v-layout>      
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    getStocks() {
      return this.$store.getters.getAllStocks;
    }
  },
  components: {
    Stock: () => import('~/components/Stock'),
  },
  mounted() {
    if (process.browser) {
      this.$options.sockets.onmessage = (data) => {
        this.$options.parent.$store.commit('SET_ALL_STOCKS', data)
      }
    }
  },
  beforeDestroy() {
    delete this.$options.sockets.onmessage;
  }
}
</script>
