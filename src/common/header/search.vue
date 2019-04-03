<template>
  <div class="search">
    <div class="search_box_bar">
      <router-link class="search_box" to='/searchPage'  tag="div">
        <span class="imgwrap iconfont icon-magnifier"></span>
        <div class="search_info">{{searchInfo}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  created() {
    this.getSearcgInfo();
  },
  computed: {
    ...Vuex.mapState({
      searchInfo:state=>state.Home.searchInfo
    })
  },
  methods: {
    ...Vuex.mapActions({
      getSearcgInfo:"Home/getActionsSearcgInfo"
    })
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 0.2rem;
  flex: 1;
  flex-shrink: 1;
  .search_box_bar {
    border-radius: 4rem;
    background: rgba(51, 51, 51, 0.06);
    height: 0.7rem;
    .search_box {
      font-size: 0.3rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .imgwrap {
        color: #666 !important;
        font-size: 0.45rem !important;
      }
      .search_info {
        margin-left: 0.2rem;
        color: #999;
      }
    }
  }
}
</style>