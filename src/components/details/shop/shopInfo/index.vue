<template>
  <div class="shopInformation">
    <div class="produce">
      <h3>{{productInfo.productName}}</h3>
      <div class="price">
        <div class="shopPrice">
          <span>
            <span>￥</span>
            {{productInfo.periodMoney}}
          </span>
          <b>{{productInfo.pvStandard}}</b>
        </div>
      </div>
      <div class="origin">
        <del class="originPrice">
          <span>
            <span>￥</span>
            {{productInfo.defaultMoney}}
          </span>
          <b>{{productInfo.pvStandard}}</b>
        </del>
        <div class="sell">已售{{productInfo.soldNumber}}份</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  computed: {
    ...Vuex.mapState({
      productInfo:state=>state.Details.productInfo,
    })
  },
};
</script>

<style lang="scss" scoped>
.shopInformation {
  width: 100%;
  background: #fff;
  display: flex;
  padding: 0.34rem;
  padding-bottom:0;
  .produce {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      font-size: 0.35rem;
      color: #333;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }
    .price {
      width: 100%;
      height: 0.68rem;
      margin: 10px 0 5px;
      display: flex;
      .shopPrice {
        height: 0.68rem;
        display: flex;
        align-items: center;
        span {
          font-size: 0.3rem;
          color: #ff3e3e;
          i {
            font-size: 0.25rem;
          }
        }
        b {
          font-size: 0.25rem;
          color: rgb(153, 153, 153);
        }
      }
      p {
        width: 1.2rem;
        height: 0.48rem;
        display: block;
        background: linear-gradient(90deg, #ffa033, #ff5551);
        border-radius: 20px;
        font-size: 0.22rem;
        line-height: 0.48rem;
        text-align: center;
        color: #fff;
        padding: 0 6px;
        margin: 10px 0 0 8px;
      }
    }
    .origin {
      width: 100%;
      height: 0.42rem;
      display: flex;

      .originPrice {
        width: 5.15rem;
        height: 0.42rem;
        font-size: 0.25rem;
        color: rgb(153, 153, 153);
      }
      .sell {
        width: 1.6rem;
        height: 0.42rem;
        font-size: 0.25rem;
        color: rgb(153, 153, 153);
      }
    }
    .weigh {
      width: 100%;
      height: 0.68rem;
      display: flex;
      position: relative;
      align-items: center;
      span {
        padding-left: 10px;
      }
      .weight {
        width: 0.64rem;
        height: 0.44rem;
        margin-left: 12px;
        color: #ff9535;
        font-size: 0.25rem;
        background-color: rgba(255, 166, 85, 0.2);
        border-radius: 0.75rem;
        padding: 4px 4px;
      }
      img {
        width: 0.32rem;
        height: 0.32rem;
      }
      .jt {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>