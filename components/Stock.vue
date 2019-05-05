<template>
  <v-flex xs12 sm6 md4 lg2>
    <v-card
      :color="stock.background_color"
      height="150"
      class="ma-1">
      <div class="text-xs-center pa-1">
        <div class="py-3 title">{{ stock.name }}</div>
        <div class="py-3 body-1">
         <v-icon size="24" v-if="stock.background_color == 'green'">arrow_drop_up</v-icon>
         <v-icon size="24" v-if="stock.background_color == 'red'">arrow_drop_down</v-icon>
         {{ stock.price }}
        </div>
        <div class="py-2 caption">
          {{ stock.last_updated_at | timeFilter }}
        </div>
      </div>
    </v-card>
  </v-flex>
</template>

<script type="text/javascript">
  export default {
    props: {
      stock: {
        type: Object,
        required: true
      }
    }
  }
</script>