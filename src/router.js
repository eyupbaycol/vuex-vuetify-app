import Home from "./views/Home"
import Cart from "./views/Cart"
import Store from "./views/Store"
import Checkout from "./views/Checkout"

import Vue from 'vue'
import VueRouter from 'vue-router'


const routes = [
    {path : "/", name: 'home', component : Home},
    {path : "/store", name: 'store', component : Store},
    {path : "/cart", name: 'cart', component : Cart},
    {path : "/checkout", name: 'checkout', component : Checkout}
]

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

export default router