<template>
    <v-footer absolute color="black" dark class="pa-4">
        &copy; {{ new Date().getFullYear()}} - <strong>Awesome Shop</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-2"
          dark
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
    </v-footer>
</template>
<script>
export default {
    data(){
        return{
            icons: [
                {icon:"mdi-instagram"},
                {icon:"mdi-youtube"},
                {icon:"mdi-twitter"},
                {icon:"mdi-facebook"}
                ]
        }
    }
}
</script>