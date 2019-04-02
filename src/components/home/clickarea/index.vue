<template>
  <div class="click-area">
    <div class="click-block">
      <a :href="topCenterInfos.linkUrl">
        <img :src="topCenterInfos.ImageUrl" alt>
      </a>
    </div>
    <div class="mn-section">
      <div class="mn-card">
        <div class="mn-card-item">
          <div class="mn-card-body">
            <div class="mn-card-box">
              <div class="home-shortcunicons" v-for="(item,index) in firstPage">
                <a :href="item.JumpValue">
                  <img :src="item.URL" alt>
                </a>
                <p>{{item.Name}}</p>
              </div>
            </div>
            <div class="mn-card-box">
              <div class="home-shortcunicons" v-for="(item,index) in secondPage">
                <a :href="item.JumpValue">
                  <img :src="item.URL" alt>
                </a>
                <p>{{item.Name}}</p>
              </div>
            </div>
          </div>
          <div class="freshes">
            <div class="freshes-carousel is-active"></div>
            <div class="freshes-carousel"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mn-section member-floor">
      <img src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" alt>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "click-area",
  created() {
    this.getActionsUrlList();
  },
  computed: {
    ...Vuex.mapState({
      firstPage: state => state.Home.urlList[0],
      secondPage: state => state.Home.urlList[1],
      topCenterInfos: state => state.Home.topCenterInfos
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsUrlList: "Home/getActionsUrlList"
    })
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.click-area > .click-block > a > img {
  width: 100%;
}
.mn-section {
  background: #fff;
  margin-bottom: 0.25rem;
  .mn-card {
    width: 6.66rem;
    overflow: hidden;
    .mn-card-item {
      width: max-content;
      padding: 0.25rem;
      padding-bottom: 0px;
      .mn-card-body {
        display: flex;
        .mn-card-box {
          width: 6.66rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .home-shortcunicons {
            img {
              width: 0.8rem;
              height: 0.8rem;
              margin: 0.25rem 0.25rem 0;
            }
            p {
              text-align: center;
              padding: 0.25rem 0 0;
              color: #666;
            }
          }
        }
      }
    }
  }
}

.member-floor {
  img {
    width: 100%;
  }
}
.freshes {
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 0.3rem;
  margin-top: .1rem;
  .freshes-carousel {
    width: 0.2rem;
    height: 0.1rem;
    background-color: #edeef0;
    margin-right: 0.1rem;
  }
  .is-active {
    width: 0.35rem;
    height: 0.05rem;
    background-color: #3db51e;
  }
}
</style>