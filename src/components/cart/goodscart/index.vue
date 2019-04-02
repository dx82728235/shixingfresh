<template>
  <div class="goods-cart-contents">
    <div class="wapper">
      <div class="cart-card"></div>
      <div class="cart-card">
        <div class="flex-box">
          <input type="checkbox" class="cart-check">
          <div class="goods">
            <div class="addition-item flex-box">
              <div class="image">
                <img
                  src="http://picpro-sz.34580.com/sz/ImageUrl/542091/120.jpeg"
                  class="image-source"
                >
              </div>
              <div class="addition-item-info .flex-box">
                <div class="card-title-wrapper">
                  <div class="card-title">埃及橙</div>
                </div>
                <div class="unit-mood">1000g/份</div>
                <div class="flex-box-between flex-box">
                  <div class="flex-box maxmark-gradient">
                    ￥
                    <span>19</span>.80
                  </div>
                  <div class="cart-counter flex-box">
                    <div class="min">-</div>
                    <div class="cart-counter-box">
                      <input type="number" value="1" class="cart-counter-control">
                    </div>
                    <div class="min">+</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="activity-item-tip"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.flex-box {
  display: flex;
}
.goods-cart-contents > .wapper > .cart-card {
  margin: 0.15rem;
  padding: 0.25rem;
  background-color: #fff;
  border-radius: 6px;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box{
  align-items: center;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .cart-check{
  width: .4rem;
  height: .4rem;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods{
  width: 100%;
  margin-left: .2rem;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info{
  margin-left: .2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .card-title-wrapper > .card-title {
  font-size: .3rem;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .unit-mood{
  font-size: .24rem;
  color: #999;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .flex-box-between{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .flex-box-between > .maxmark-gradient{
  line-height: .7rem;
  color: #ff4b46;
  font-size: .2rem;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .flex-box-between > .maxmark-gradient > span{
  line-height: .6rem;
  font-size: .3rem
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .flex-box-between > .cart-counter{
  font-size: .5rem;
}
.goods-cart-contents > .wapper > .cart-card>.flex-box > .goods > .addition-item > .addition-item-info > .flex-box-between > .cart-counter > .cart-counter-box > .cart-counter-control{
  width: .6rem;
  height: .4rem;
  font-size: .3rem;
  text-align: center;
  border: 0;
  outline: none;
  border-radius: 2rem;
  background-color: #f2f3f6;
  margin: 0 .1rem;
}
</style>
