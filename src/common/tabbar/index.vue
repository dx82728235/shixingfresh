<template>
  <div class="fixed_tabBar footer">
    <div class="tabBar">
      <ul>
        <router-link
          v-for="(item,index) in tabBarList"
          :key="index"
          :class="item.listClassName"
          :to="item.path"
          tag="li"
        >
          <p>{{item.title}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarList: [
        {
          listClassName: "iconfont icon-zhuye",
          path: "/home",
          title: "首页"
        },
        {
          listClassName: "iconfont icon-fenlei",
          path: "/classify",
          title: "分类"
        },
        {
          listClassName: "iconfont icon-gouwuche",
          path: "/cart",
          title: "购物车"
        },
        {
          listClassName: "iconfont icon-wode",
          path: "/mine",
          title: "我的"
        }
      ]
    };
  }
};
</script>

<style scope lang='scss'>
.fixed_tabBar {
  color: #999;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fafafa;
  .tabBar {
    background: #fafafa;
    height: 1.1rem;
    white-space: nowrap;
    ul {
      display: flex;
      align-items: center;
      height: 100%;
      li {
        width: 25%;
        text-align: center;
        font-size: 0.4rem;
        p {
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>
