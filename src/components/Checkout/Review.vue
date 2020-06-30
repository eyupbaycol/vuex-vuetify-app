<template>
    <v-stepper-content step="3">
        <v-list disabled dense>
            <v-subheader class="title">Review Order</v-subheader>
            <v-list-item-group color="primary">
                <v-lis-item
                    v-for="(value, name) in data"
                    :key="name"
                >
                 <v-list-item-content>
                    <v-list-item-title>
                        {{ name }}: {{ value }}
                    </v-list-item-title>
                 </v-list-item-content>
                </v-lis-item>
            </v-list-item-group>
        </v-list>
        <v-btn class="primary" @click="submitOrder">
            Submit
        </v-btn>
        <v-btn class="mt-1 ml-2" @click="previous" text>go back</v-btn>
    </v-stepper-content>
</template>

<script>
export default {
    props: {
        previous : Function,
        submitOrder: Function,
        data: Object
    }
}
</script>