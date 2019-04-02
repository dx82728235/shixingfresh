<template>
  <div class="home">
    <Header/>
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
    </div>
  </div>
</template>

<script>
import Header from '@/common/header'
import Banner from '@/components/home/banner'
import ClickArea from '@/components/home/clickarea'
import Sellpoint from '@/components/home/sellpoint'
import ProductList from '@/components/home/productlist'

export default {
  components: {
    name:"home",
    Header,
    Banner,
    Sellpoint,
    ClickArea,
    ProductList
  },
}
</script>

<style lang="scss">
  .home{
    position: relative;
    .container{
      overflow: auto;
      padding: 1rem 0;
      width: 100%;
      height:100%;
      position:absolute;
      .rush-to-pay{
        padding: 0 .3rem;
        display: flex;
        flex-direction: column;
        .rush-title{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: .2rem;
          padding-bottom: .1rem;
          span{
            font-size: .305rem;
            font-weight: 600;
            color: #333
          }
          .content-down{
            font-size: .28rem;
            color: #666;
          }
        }
      }
    }
  }
</style>
