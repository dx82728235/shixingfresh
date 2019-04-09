<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollX: true,
      click: true,
      pullUpLoad: true
    });
    //console.log(this.scroll);
  },
  methods: {
    getGuessInfo() {
      this.scroll.on("pullingUp", () => {
        //console.log(111)
        this.$store.dispatch("Home/getActionsGuessInfo");
      });
    },
    update(){
      this.scroll.finishPullUp();
    },
    getIh(){
        this.scroll.refresh();
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>