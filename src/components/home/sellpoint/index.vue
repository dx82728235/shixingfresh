<template>
  <div class="section">
    <div class="sell-point">
      <div class="point-wapper" v-for="(item,index) in sellPoint">
        <img :src="item.PicUrl">
        {{item.Description}}
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  created () {
    
  },
  computed:{
    ...Vuex.mapState({
      sellPoint:state=>state.Home.sellPoint[0]
    })
  }
};
</script>

<style>
.section>.sell-point {
  display: flex;
  padding: 0.25rem 0.2rem;
  font-size: 0.25rem;
  justify-content: space-between;
  background: #fff;
  color: #666;
}
.section>.sell-point > .point-wapper {
  display: flex;
}
.section>.sell-point > .point-wapper > img {
  width: 0.35rem;
  height: 0.35rem;
}
</style>