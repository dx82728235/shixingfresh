<template>
  <div class="shop">
    <div class="category-filter">
      <div class="category-filter-item is-active">{{mr}}</div>
      <div class="category-filter-item">{{zx}}</div>
      <div class="category-filter-item">{{xl}}</div>
      <div class="category-filter-item">
        {{jg}}
        <div class="icon">
          <i class="iconfont icon-shangjiantou"></i>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        mr:"默认",
        zx:"最新",
        xl:"销量",
        jg:"价格"
    }
    
  }
};
</script>

<style lang="scss" scoped>
 .category-filter {
      display: flex;
      justify-content: space-around;
      background: #fff;
      width:100%;
      height: 0.94rem;
      font-size: .3rem;
    }
    .category-filter-item {
      width: 1.4rem;
      height: 0.47rem;
      border-bottom: 3px solid transparent;
      padding: .3rem  0 .6rem;
      position: relative;
      text-align: center;
    }


    .category-filter-item>.icon {

      width: 24px;
      height: 24px;
      line-height: 24px;
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      top: 22px;
      i{
       font-size: .25rem;
       color: #ddd;
      }
    }
    .is-active {
      color: #49aa34;
      border-bottom: .07rem solid #49aa34;
    }
</style>