<template>
  <v-stepper-content step="1">
    <v-text-field
      class="mt-1"
      outlined
      v-model="data.name"
      :rules="[rules.required]"
      label="Name"
      required
    />

    <v-text-field
      outlined
      v-model="data.email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
      required
    />
    <v-text-field
      outlined
      v-model="data.phone"
      :rules="[rules.required, rules.phone]"
      label="Phone Number"
      required
    />
    <v-btn color="primary" @click="next">Continue</v-btn>
    <v-btn class="mt-1 ml-2"  text @click="$router.replace({name: 'cart'})">
        Cancel
    </v-btn>
  </v-stepper-content>
</template>
<script>
export default {
  props: {
    data: Object,
    rules: Object,
    next: Function
  }
};
</script>