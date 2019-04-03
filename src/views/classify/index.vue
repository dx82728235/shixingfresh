<template>
  <div class="classify">
    <Search/>
    <Assfiy/>
  </div>
</template>

<script>
import Search from '@/common/header/search'
import Assfiy from '@/components/classify/assfiy'

export default {
  name:"classify",
  components: {
    Search,
    Assfiy
  }
}
</script>
<style lang="scss" scoped>
  .classify{
    width: 100%;
    height: 100%;
  }
</style>
