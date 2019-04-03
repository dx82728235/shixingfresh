<template>
  <div class="listFleshRight">
    <div class="listFleshCon">
      <div class="fleshAll">
        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' alt>
        <span>柑橘橙柚</span>
      </div>
      <div class="fleshAll">
        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' alt>
        <span>柑橘橙柚</span>
      </div>
      <div class="fleshAll">
        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' alt>
        <span>柑橘橙柚</span>
      </div>
    </div>
    <div class="listFleshCon">
      <div class="fleshAll">
        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' alt>
        <span>柑橘橙柚</span>
      </div>
      <div class="fleshAll">
        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' alt>
        <span>柑橘橙柚</span>
      </div>
      <div class="fleshAll">
        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' alt>
        <span>柑橘橙柚</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightAss"
};
</script>
<style lang="scss" scoped>
.listFleshRight {
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
.listFleshRight>.listFleshCon{
    width: 100%;
    height: 2.2rem;

    display: flex;
    justify-content: space-around;
    margin-top: 0.1rem;

}
.listFleshRight >.listFleshCon> .fleshAll {
  margin-top: 0.1rem;
  width: 1.76rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

}
.listFleshRight >.listFleshCon> .fleshAll>span{
      color: #333;
  font-size: 0.28rem;

}
</style>
