<template>

    <v-card outlined min-width="100%" class="mb-5 pa-4">
      <div class="d-flex">
        <div>
          <v-img
            :src="'https://image.tmdb.org/t/p/w500' + product.poster_path"
            width="120px"
            height="120px"
          ></v-img>
        </div>
        <div  class="d-flex flex-column justify-center">
          <v-card-title class="pt-0">{{product.original_title}}</v-card-title>
          <v-card-subtitle>${{product.vote_average}}</v-card-subtitle>
          <v-btn  width="200" color="error" class="ml-4" outlined small>
            <v-icon small left>mdi-minus</v-icon>Remove form Cart
          </v-btn>
        </div>
      </div>
    </v-card>
</template>
<script>
export default {
  props: {
    product: Object,
    updateCart: Function,
    btnAction: String,
    i: Number
  }
};
</script>