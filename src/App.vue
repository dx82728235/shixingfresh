<template>
  <div id="app">
    <router-view/>
    <TabBar/>
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
#app,.home{
  width: 100%;
  height: 100%;
}
</style>
