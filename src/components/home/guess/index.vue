<template>
  <div class="guess">
    <div class="guess-title">猜你喜欢</div>
    <ul>
      <li v-for="(item,index) in guessInfo" :key="index">
        <img :src="item.PictureIds | toPicPath">
        <div class="pro-info">{{item.ProductName}}</div>
        <div class="pro-price">
          <p class="price">{{item.PeriodMoney | toPirceTwo("￥")}}</p>
          <span class="iconfont icon-gouwuche"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  created() {
    this.getGuessInfo(this.$store.state.Home.guessInfoId);
  },
  computed: {
    ...Vuex.mapState({
      guessInfo: state => state.Home.guessInfo
    })
  },
  methods: {
    ...Vuex.mapActions({
      getGuessInfo: "Home/getActionsGuessInfo"
    })
  }
};
</script>

<style lang="scss" scoped>
.guess {
  width: 100%;
  .guess-title {
    width: 100%;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #333;
    font-weight: 700;
    font-size: 0.4rem;
    background: #f2f3f7;
  }
  ul {
    padding: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      img {
        width: 100%;
      }
      .pro-info {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0.16rem;
        font-size: 0.3rem;
        font-weight: 700;
      }
      .pro-price {
        display: flex;
        justify-content: space-between;
        color: #f05423;
        font-size: 0.4rem;
        padding-top: 0.5rem;
        padding-right: 0.2rem;
        span {
          width: 0.64rem;
          height: 0.64rem;
          border: 1px solid #ccc;
          font-size: 0.3rem;
          line-height: 0.64rem;
          text-align: center;
          border-radius: 100%;
          color: #f05423;
        }
      }
    }
  }
}
</style>