<template>
  <div class="allBox">
    <div class="listFlesh">
      <ul>
        <li
          :class="activeIndex==index?'is_active':''"
          v-for="(item,index) in productList"
          @touchstart="handleActive(index)"
        >{{item.Name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "list",
  created() {
    this.getClassifyList();
  },
  data() {
    return {
      activeIndex: ""
    };
  },
  computed: {
    ...Vuex.mapState({
      productList: state => state.Classify.productList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getClassifyList: "Classify/getActionsClassifyList",
      getSubCategoryContent: "Classify/getActionsSubCategoryContent"
    }),
    handleActive(index) {
      this.activeIndex = index;
      this.$emit("handleToggle", index);
      if (index) {
        this.getSubCategoryContent(this.productList[index].Id);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.allBox {
  position: relative;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .listFlesh {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    overflow-y: auto;
    left: 0px;
    top: 0px;
    ul {
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 2.2rem;
      border-right: 1px solid #c3c3c3;
      li {
        width: 100%;
        height: 1rem;
        font-size: 0.32rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #c3c3c3;
        border-right: 1px solid #c3c3c3;
        color: #666;
        cursor: pointer;
      }
    }
  }
}

.is_active {
  border-left: 3px solid #45ac2a !important;
  color: #45ac2a !important;
}
.listFlesh::-webkit-scrollbar {
  display: none;
}
</style>
