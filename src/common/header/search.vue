<template>
  <div class="search">
    <div class="search_box_bar">
      <div class="search_box">
        <span class="imgwrap iconfont icon-magnifier"></span>
        <div class="search_info">海南凤梨买1赠1，快抢！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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