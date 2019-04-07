<template>
    <div class="product-list">
        <Search/>
        <NavBar/>
        <Products/>
    </div>
</template>

<script>
import Search from "@/common/header/search"
import NavBar from '@/components/list/nav'
import Products from '@/components/list/products'

export default {
    components: {
        NavBar,
        Products,
        Search
    }
}
</script>

<style lang="scss" scoped>
    .product-list{
        position: relative;
    }
</style>
