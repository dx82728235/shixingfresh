<template>
  <div class="banner">
    <div class="banner_bar">
      <div class="banner_box" v-for="(item,index) in banner_img" :key="index">
        <img :src="item" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner_img: [
          "http://pic2.34580.cn/group1/M00/91/5D/wKgNY1yUTduALEnwAADY3ZuW8Zk113.jpg",
      ]
    }
  }
};
</script>

<style>
.banner>.banner_bar {
  padding: 5px 10px;
  padding-bottom: 0;
  background: #fff;
}


.banner>.banner_bar>.banner_box>img {
  width: 100%;
  border-radius: 4px;
}
</style>