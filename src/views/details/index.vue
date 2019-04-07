<script>
import Vuex from "vuex"

import ProductDetails from "@/components/details/shop/shopDetails";
import ProductInfo from "@/components/details/shop/shopInfo";
import ProductMore from "@/components/details/shop/shopMore";
import ProductEvaluate from "@/components/details/shop/shopEvaluate";
import ProductOther from "@/components/details/shop/shopOther";

import DetailsNav from "@/components/details/gdetails/detailsNav";
import DetailsHead from "@/components/details/shop/detailshead";
import DetailsFoot from "@/components/details/shop/detailsfoot";
import DetailsContent from "@/components/details/gdetails/detailsContent";
import DetailsInfo from "@/components/details/gdetails/goodsInfo";

export default {
  created () {
    this.getProductDetails(this.$store.state.List.detailsProId);
  },
  components: {
    DetailsHead,
    ProductDetails,
    ProductInfo,
    ProductMore,
    ProductOther,
    ProductEvaluate,
    DetailsFoot,
    DetailsNav,
    DetailsContent,
    DetailsInfo
  },
  computed: {
    ...Vuex.mapState({
      productActivityList:state=>state.Details.productActivityList,
      productInfo:state=>state.Details.productInfo,
      productInfoServiceList:state=>state.Details.productInfoServiceList,
      productBanner:state=>state.Details.productBanner
    })
  },
  methods: {
    ...Vuex.mapActions({
      getProductDetails:"Details/getActionsProductDetails"
    })
  },
};
</script>


<template>
  <div class="product-details">
    <div class="product-row">
      <div class="bccl">
        <DetailsHead/>
        <ProductDetails/>
        <ProductInfo />
        <ProductOther/>
        <ProductEvaluate/>
        <ProductMore/>
        <DetailsFoot/>
      </div>
      <div v-if='false'>

      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .product-details {
    position: relative;
    height: 100%;
    .product-row {
      position: absolute;
      height: 100%;
      overflow: auto;
      .bccl{
        background: rgba(51, 51, 51, 0.06);
      }
    }
  }
  .product-row::-webkit-scrollbar {
    display: none;
  }
</style>

