<template>
  <div class="banner">
    <div class="swiper-container banner_bar" ref="banner_bar">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerUrl" :key="index">
          <a :href="item.jumpUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </div>
      <div class="swiper-pagination banner-pagination"></div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  created() {
    this.getBannerSwpier();
  },
  data() {
    return {
      banner_img: [
        "http://pic2.34580.cn/group1/M00/91/5D/wKgNY1yUTduALEnwAADY3ZuW8Zk113.jpg"
      ]
    };
  },
  computed: {
    ...Vuex.mapState({
      bannerUrl: state => state.Home.bannerUrl
    })
  },
  methods: {
    ...Vuex.mapActions({
      getBannerSwpier: "Home/getActionsBannerSwpier"
    })
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.banner_bar, {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".banner-pagination"
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  .banner_bar {
    padding: 5px 10px;
    padding-bottom: 0;
    background: #fff;
     overflow: hidden;
    a,
    img {
      width: 100%;
      height: 3.12rem;
      border-radius: 4px;
    }
  }
}
</style>