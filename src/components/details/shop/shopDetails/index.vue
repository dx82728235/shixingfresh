<template>
  <div class="shopDetails">
    <div class="pic">
      <img v-for="(item,index) in productBanner" :key="index" :src="item | toPath()">
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState({
      productBanner: state => state.Details.productBanner
    })
  }
};
</script>

<style lang="scss">
.shopDetails {
  display: flex;
  width: 100%;
  height: 7.5rem;
  .pic {
    width: 100%;
    display: flex;
    overflow: hidden;
    img {
      width: 100%;
     // height: 100%;
    }
  }
}
</style>