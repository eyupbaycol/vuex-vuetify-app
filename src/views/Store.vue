<template>
 <v-container>
     <v-row>
         <v-col md="3" offset-lg="1">
                <Sidebar />
         </v-col>
         <v-col md="9" lg="7">
             <ProductDisplay />
         </v-col>
     </v-row>
 </v-container>
</template>
<script>
import Sidebar from "../components/Store/SideBar"
import ProductDisplay from "../components/Store/ProductDisplay"
export default {
    components : {
        Sidebar,
        ProductDisplay
    }
}
</script>