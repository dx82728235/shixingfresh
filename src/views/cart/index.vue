<template>
  <div class="cart">
      <!-- <GoodScart/> -->
      <VoidCart/>
      <Total/>
  </div>
</template>

<script>
import GoodScart from '@/components/cart/goodscart'
import Total from '@/components/cart/total'
import VoidCart from '@/components/cart/voidcart'

export default {
  name:"cart",
  components: {
    GoodScart,
    VoidCart,
    Total
  }
}
</script>

<style lang="scss" scoped>
  .cart{
    height: 100%;
  }
</style>
