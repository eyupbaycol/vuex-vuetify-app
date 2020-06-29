<template>
    <div>
        <h3>Products</h3>
        <v-row>
        <v-col sm="6" md="4" v-for="product in salaryData" :key="product.id">
           <VerticalProduct :product="product"/>
        </v-col>
        </v-row>
    </div>
</template>
<script>
import VerticalProduct from "../Cards/VerticalProduct"
import {mapGetters, mapActions} from 'vuex';
export default {
    created() {
    this.fetchData();
    },
    computed: mapGetters(["salaryData"]),
    methods :{
        ...mapActions(["fetchData"]),
    },
    components :{
        VerticalProduct
    }
}
</script>