<template>
    <div>
        <Header /> 
        <PopularProducts />
        <Footer />
    </div>
</template>
<script>
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import PopularProducts from '../components/Home/PopularProducts';
export default {
    components:{
        Header,
        Footer,
        PopularProducts
    }
}
</script>