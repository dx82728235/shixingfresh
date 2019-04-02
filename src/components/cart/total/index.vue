<template>
  <div class="cart-bottom">
    <div class="cart-bottom-information">
      <div class="select">
        <span class="mn-icon">
          <input type="checkbox" class="select-check">
          <span>全选</span>
        </span>
      </div>
      <div class="information">
        <div class>
          合计:
          <span>
            ￥
            <span>19</span>.80
          </span>
        </div>
        <div class="information-tip">
          已省:¥0.00
          <span>（已免运费）</span>
        </div>
      </div>
      <div class="Settlement">
        <div class="Settlement-btn">
          去结算
          <span>(2)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cart-bottom {
  width: 100%;
  height: 1.2rem;
  display: flex;
  background-color: #fff;
  padding: 0 0.3rem;
  position: absolute;
  bottom: 1.1rem;
  left: 0;
  font-size: 0.28rem;
}
.cart-bottom > .cart-bottom-information {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-bottom > .cart-bottom-information > .select > .mn-icon > .select-check{
  width: .4rem;
  height: .4rem;
  margin-right: .1rem;
}
.cart-bottom > .cart-bottom-information > .select > .mn-icon{
    display: flex;
    align-items: center;
}
.cart-bottom > .cart-bottom-information > .information {
  margin-left: 0.3rem;
}
.cart-bottom > .cart-bottom-information > .Settlement{
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg,#ff705b,#ff3f57);
    padding: .2rem .3rem;
    border-radius: 1rem;
    color: #fff;
}
</style>
