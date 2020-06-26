<template>
  <v-card outlined>
    <v-img :src="'https://image.tmdb.org/t/p/w500' + product.poster_path" height="200px" />
    <v-card-title style="overflow-y: auto; height:100px">{{product.original_title}}</v-card-title>
    <v-card-subtitle>${{product.vote_average}}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined>
        <v-icon small left>mdi-plus</v-icon>Add to Chart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props : {
        product : Object
    }
}
</script>