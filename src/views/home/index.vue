<template>
  <div class="home">
    <Header/>
    <BScroll ref="forGuessInfo">
    <div class="container">
      <Banner/>
      <Sellpoint/>
      <ClickArea/>
      <div class="rush-to-pay">
        <div class="rush-title">
          <span>限时抢购</span>
          <div class="content-down">
            距结束
            <p class="time"></p>
          </div>
        </div>
        <ProductList/>
      </div>
      <Prosection/>
      <Guess/>
    </div>
    </BScroll>
  </div>
</template>

<script>
import Header from "@/common/header";
import Banner from "@/components/home/banner";
import ClickArea from "@/components/home/clickarea";
import Sellpoint from "@/components/home/sellpoint";
import ProductList from "@/components/home/productlist";
import Prosection from "@/components/home/prosection";
import Guess from "@/components/home/guess";

import Vuex from "vuex"

export default {
  components: {
    name: "home",
    Header,
    Banner,
    Sellpoint,
    ClickArea,
    ProductList,
    Prosection,
    Guess
  },
  computed: {
    ...Vuex.mapState({
      guessInfo:state=>state.Home.guessInfo
    })
  },
   watch: {
      guessInfo(){
        this.$refs.forGuessInfo.update();
      }
  },
  mounted(){
    this.$refs.forGuessInfo.getGuessInfo();
  },
  update(){
    this.$refs.forGuessInfo.getIh();
  }
};
</script>

<style lang="scss">
.home {
  .container {
    padding: 1rem 0;
    width: 100%;
    height: max-content;
    .rush-to-pay {
      padding: 0 0.3rem;
      display: flex;
      flex-direction: column;
      .rush-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.2rem;
        padding-bottom: 0.1rem;
        span {
          font-size: 0.305rem;
          font-weight: 600;
          color: #333;
        }
        .content-down {
          font-size: 0.28rem;
          color: #666;
        }
      }
    }
  }
}
</style>
