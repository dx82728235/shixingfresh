<template>
  <div class="list-container">
    <div class="list-contariner-right">
      <div class="list-banner">
        <img src="http://pic2.34580.cn/group1/M00/6E/8C/wKgNYlxua2OAQX_hAAJWTBIz33E216.jpg">
      </div>
      <div class="list-section" v-for="(item,index) in subCategoryCon">
        <div class="list-title">
          <div class="sectuin-little">
            <h4>{{item.MetaKeywords}}</h4>
            <span>
              全部
              <p>▶</p>
            </span>
          </div>
        </div>
        <div class="list-square" >
          <div class="list-square-all" v-for="(item,index) in subCategoryConList[index]">
            <div class="list-square-alldata">
              <img :src="item.PictureId | toPath()">
              <span>{{item.Name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapState({
      subCategoryCon:state=>state.Classify.subCategoryCon,
      subCategoryConList:state=>state.Classify.subCategoryConList
    })
  }
};
</script>
<style lang="scss" scoped>
.list-container {
  padding-bottom: 2.2rem;
  width: 100%;
  flex: 1;
  overflow: auto;
  .list-contariner-right {
    width: 100%;
    padding: 0.16rem;
    display: flex;
    flex-direction: column;
    .list-banner {
      width: 5.2rem;
      height: 2.2rem;
      display: flex;
      img {
        width: 100%;
        height: 90%;
      }
    }
    .list-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom:.64rem;
      .list-title {
        width: 100%;
        height: 0.96rem;
        display: flex;
        .sectuin-little {
          width: 100%;
          height: 0.64rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 0.3rem;
          padding-right: 0.6rem;
          h4 {
            font-size: 0.35rem;
          }
          span {
            width: 1.2rem;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.35rem;
            font-weight: 400;
            color: #999;
            p {
              font-size: 0.3rem;
            }
          }
        }
      }
      .list-square {
        height: 100%;
        display: flex;
        flex-flow: wrap;
        .list-square-all {
          height: 2.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img{
            width: 1.6rem;
            height: 1.6rem;
          }
          .list-square-alldata {
            width: 1.76rem;
            height: 2.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
.list-container::-webkit-scrollbar {display:none}
</style>
