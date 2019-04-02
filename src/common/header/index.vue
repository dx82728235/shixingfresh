<template>
  <div class="header">
    <div class="head_box">
      <Place/>
      <Search/>
    </div>
  </div>
</template>

<script>
import Place from "./place";
import Search from "./search";

export default {
  components: {
    Place,
    Search
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 5;
  .head_box {
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.2rem;
    background-color: #fff;
  }
}
</style>