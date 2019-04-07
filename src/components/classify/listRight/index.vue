<template>
  <div class="listFleshRight">
    <div class="listFleshCon">
      <router-link
        tag="div"
        class="fleshAll"
        v-for="(item,index) in hotWardCon"
        @touchstart.native="handleToList(index)"
        :key='index'
        to="/list"
        >
        <img :src="item.PictureId | toPath()" alt>
        <span>{{item.Name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "listRight",
  created() {
    this.getHotWardContent();
  },
  computed: {
    ...Vuex.mapState({
      hotWardCon: state => state.Classify.hotWardCon
    })
  },
  methods: {
    ...Vuex.mapActions({
      getHotWardContent: "Classify/getActionsHotWardContent",
      sendApiParameter:"Classify/sendActionsApiParameter"
    }),
    handleToList(index) {
      this.sendApiParameter(this.hotWardCon[index].Id)
    }
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
.listFleshRight::-webkit-scrollbar {
  display: none;
}
</style>
