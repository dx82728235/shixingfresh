<template>
  <div class="void-cart-contents">
    <div class="cart-none">
      <div class="cart-img-wapper">
        <span class="iconfont icon-gouwuche"></span>
        <p>您的购物车空空如也</p>
        <button class="goods-btn">去逛逛</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.void-cart-contents > .cart-none {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  color: #ccc;
}
.void-cart-contents > .cart-none > .cart-img-wapper {
  width: 90%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.void-cart-contents > .cart-none > .cart-img-wapper > span {
  font-size: 150px;
}
.void-cart-contents > .cart-none > .cart-img-wapper > p {
  margin-top: 0.1rem;
  font-size: 30px;
}
.void-cart-contents > .cart-none > .cart-img-wapper > .goods-btn {
  background-color: #49aa34;
  padding: 0 1rem;
  border-radius: 5px;
  margin-top: 0.2rem;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  height: .75rem;
  line-height: .75rem;
  font-size: .4rem;
}
</style>