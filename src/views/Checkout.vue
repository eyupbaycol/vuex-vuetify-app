<template>
    <v-container>
        <v-row>
            <v-col sm="6" offset-sm="3">
                <v-stepper v-model="step">
                    <v-stepper-header>
                        <v-stepper-step 
                            step="1"
                            :complete="step > 1" 
                        />
                        <v-divider />
                        <v-stepper-step 
                            step="2"
                            :complete="step > 2"
                        />
                        <v-divider />
                        <v-stepper-step 
                            step="3"
                            :compelte="step > 3" 
                        />
                    </v-stepper-header>
                    <v-stepper-items>
                        <!-- <v-stepper-content step="1">
                            
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            
                        </v-stepper-content> -->
                        <ContactInfo 
                            :data = "data"
                            :rules = "rules"
                            :next = "next"    
                        />

                        <ShippingInfo 
                            :data = "data"
                            :rules = "rules"
                            :next = "next"
                            :previous = "previous"
                        />

                        <Review 
                            :data = "data"
                            :submitOrder = "submitOrder"
                            :previous = "previous"
                        />
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ContactInfo from '../components/Checkout/ContactInfo'
import ShippingInfo from '../components/Checkout/ShippingInfo'
import Review from '../components/Checkout/Review'
export default {
    components : {
        ContactInfo,
        ShippingInfo,
        Review
    },
    data() {
        return {
            step: 1,
            checkoutForm: false,
            data : {
                email: '',
                name: '',
                phone: '',
                streat: '',
                state: '',
                zip: ''
            },
            rules: {
                required: value => !!value || 'Required',
                zip: value => value.length == 5 || 'Must be five characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail'
                },
                phone: value => {
                    const pattern = /\d{10}/
                    return pattern.test(value) || 'Invalid phone number.'
                }
            }
        }
    },
    methods: {
        next() {
            this.step +=1;
        },
        previous() {
            this.step -=1;
        },
        submitOrder(){
            this.$router.replace({name: 'thank-you'})
        }
    }
}
</script>