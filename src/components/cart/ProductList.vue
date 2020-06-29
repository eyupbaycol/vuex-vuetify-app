<template>
   <div>
       <v-row v-for="product in salaryData" :key="product.id">
           <HorizontalProduct 
           :product="product"
           btnAction = "remove"
            />
       </v-row>
   </div>
</template>
<script>
import HorizontalProduct from "../Cards/HorizontalProduct"
import { mapGetters, mapActions } from 'vuex'
export default {
    computed:  mapGetters(["salaryData"]),
    components :{
        HorizontalProduct
    }
    ,methods :{
        ...mapActions(["fetchData"]),
    },
    created () {
        this.fetchData()
    }
}
</script>