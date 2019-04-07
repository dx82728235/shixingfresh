<template>
  <div class="Products">
    <div class="goods">
      <div class="goods_one" v-for="(item,index) in products" :key="index">
        <router-link tag="div" to="/details">
          <img :src="item.PictureId | toPath()" alt @touchstart="handleToDetials(item.ProductId)">
        </router-link>
        <div class="goods_name">
          <div class="title">{{item.ProductName}}</div>
          <div class="pro-num">{{item.PvStandard}}</div>
        </div>
        <div class="info">
          <div class="unit">{{item.MaxUnitPeriodMoney | toPrice("￥")}}</div>
          <p class="iconfont icon-gouwuche"></p>
        </div>
      </div>
      <div class="cart-icon">
        <span class="iconfont icon-gouwuche"></span>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";

export default {
  created() {
    this.toProductList(this.$store.state.Classify.listId);
  },
  computed: {
    ...Vuex.mapState({
      products: state => state.List.products,
      listId: state => state.List.listId
    })
  },
  methods: {
    ...Vuex.mapActions({
      toProductList: "List/toActionsProductList",
      toProductDetails: "List/toActionsProductDetails"
    }),
    handleToDetials(proId) {
      this.toProductDetails(proId);
    }
  }
};
</script>
<style lang="scss" scoped>
.Products {
  background: rgba(51, 51, 51, 0.06);
  position: absolute;
  overflow: auto;
  height: max-content;
  .goods {
    width: 100%;
    display: flex;
    text-align: left;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .goods_one {
    width: 3.5rem;
    display: block;
    border-radius: 0.1rem;
    margin: 0.1rem;
    background: #fff;
    overflow: hidden;
    .info {
      display: flex;
      justify-content: space-between;
      color: #f05423;
      padding-right: 0.1rem;
      padding-bottom: 0.1rem;
      .unit {
        font-size: 0.38rem;
      }
      p {
        width: 0.64rem;
        height: 0.64rem;
        border-radius: 100%;
        font-size: 0.3rem;
        line-height: 0.64rem;
        text-align: center;
        border: 1px solid #ccc;
      }
    }
  }
  .goods_one {
    img {
      width: 100%;
      display: block;
    }
  }
  .goods_one > .goods_name {
    padding: 0.1rem 0.1rem 0;
    width: 100%;
    overflow: hidden;
    box-sizing: inherit;
    font-size: 32px;
    line-height: 48px;
    text-align: left;
    background: white;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.35rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .pro-num {
      color: #999899;
      font-size: 0.3rem;
    }
  }
  .goods_one > .goods_info {
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
