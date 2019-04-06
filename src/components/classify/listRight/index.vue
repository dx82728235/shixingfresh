<template>
  <div class="listFleshRight">
    <div class="listFleshCon">
        <div class="fleshAll" v-for="(item,index) in hotWardCon">
          <img :src='item.PictureId | toPath()' alt>
          <span>{{item.Name}}</span>
        </div>
        <div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"

export default {
  name: "rightAss",
  created () {
    this.getHotWardContent()
  },
  computed: {
    ...Vuex.mapState({
      hotWardCon:state=>state.Classify.hotWardCon
    })
  },
  methods: {
    ...Vuex.mapActions({
      getHotWardContent:"Classify/getActionsHotWardContent",
    })
  }
};
</script>
<style lang="scss" scoped>
.listFleshRight {
  width: 80%;
   overflow: auto;
  .listFleshCon {
    display: flex;
    flex-wrap: wrap;
    .fleshAll {
      width: 33.3%;
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
      }
      span {
        text-align: center;
        margin-top: 0.1rem;
      }
    }
  }
}
.listFleshRight::-webkit-scrollbar {display:none}
</style>
