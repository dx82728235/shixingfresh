<template>
  <div id="app">
    <router-view/>
    <TabBar v-if="this.$route.meta.tabBarFlag"/>
  </div>
</template>

<script>
import TabBar from '@/common/tabbar'
import Header from '@/common/header'


export default {
  name:"app",
  components:{
    TabBar,
    Header
  }
}
</script>

<style lang="scss">
#app,.home,.product-list{
  width: 100%;
  height: 100%;
}
</style>
