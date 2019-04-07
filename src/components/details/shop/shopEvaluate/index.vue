<template>
  <div class="evaluate">
    <div class="title">
      <span class="pj">{{pj}}</span>
      <span class="hp">
        {{hp}}
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMTYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdmcvc2hvcF9saXN0X2VudGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iui0reeJqei9pi3nirbmgIEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODcuMDAwMDAwLCAtMjAyLjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSLmjaLotK0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMTUwLjAwMDAwMCkiIGZpbGw9IiNDNEM0QzQiIHN0cm9rZT0iI0M0QzRDNCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NjYuNDAwOTg1LDY1LjAwMDY4NjEgTDY3Ny43MTkzMjIsNzUuMzcxOTk3NSBDNjc4LjA5MjIzLDc1Ljc0NDc1NCA2NzguMDkyMjMsNzYuMzQ3NTUxNSA2NzcuNzE5MzIyLDc2LjcyMDgwNjkgQzY3Ny4zNDY5MTQsNzcuMDkzMDY0NCA2NzYuNzQyNjg0LDc3LjA5MzA2NDQgNjc2LjM3MDI3NSw3Ni43MjA4MDY5IEw2NjQuNDMwMjU5LDY1Ljc3NzYzNjMgQzY2NC4zODE0MDIsNjUuNzQ0NzAyIDY2NC4zMTY1OTIsNjUuNzU2Njc4MSA2NjQuMjczNzE3LDY1LjcxMzI2NDcgQzY2NC4wNzc3OTEsNjUuNTE3MTU1OSA2NjMuOTkxNTQ0LDY1LjI1ODY3MTUgNjY0LjAwMTAxNiw2NS4wMDMxODEyIEM2NjMuOTg5NTUsNjQuNzQ0MTk3OCA2NjQuMDc0OCw2NC40ODI3MTk0IDY2NC4yNzIyMjIsNjQuMjg1NjEyNiBDNjY0LjMxNzU4OSw2NC4yNDA3MDIxIDY2NC4zODQzOTMsNjQuMjUyNjc4MyA2NjQuNDM1MjQ0LDY0LjIxNzI0ODkgTDY3Ni4zNzEyNzIsNTMuMjc4MDcwMyBDNjc2Ljc0NDE3OSw1Mi45MDczMDk5IDY3Ny4zNDc5MTEsNTIuOTA3MzA5OSA2NzcuNzIwMzE5LDUzLjI3ODA3MDMgQzY3OC4wOTMyMjcsNTMuNjUwODI2NyA2NzguMDkzMjI3LDU0LjI1NDEyMzMgNjc3LjcyMDMxOSw1NC42MjY4Nzk3IEw2NjYuNDAwOTg1LDY1LjAwMDY4NjEgWiIgaWQ9InNob3BfbGlzdF9lbnRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcxLjAwMDAwMCwgNjUuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02NzEuMDAwMDAwLCAtNjUuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
        >
      </span>
    </div>
    <div class="row">
      <div class="content">
        <div class="con">
          <div class="left">
            <div class="user">
              <div class="tx">
                <img
                  src="data:image/png;base64,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"
                  alt
                >
              </div>
              <div class="xx">
                <div class="name">{{sj}}</div>
                <div class="pf">{{pf}}</div>
              </div>
            </div>
            <div class="txt">{{txt}}</div>
          </div>
          <div class="pic">
            <img src="http://pic2.34580.cn/group1/M00/82/EB/wKgNYlykkW6AJKFRAABqfmwudGw67.jpeg" alt>
          </div>
        </div>
        <div class="con">
          <div class="left">
            <div class="user">
              <div class="tx">
                <img
                  src="data:image/png;base64,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"
                  alt
                >
              </div>
              <div class="xx">
                <div class="name">{{sj}}</div>
                <div class="pf">{{pf}}</div>
              </div>
            </div>
            <div class="txt">{{txt}}</div>
          </div>
          <div class="pic">
            <img src="http://pic2.34580.cn/group1/M00/82/EB/wKgNYlykkW6AJKFRAABqfmwudGw67.jpeg" alt>
          </div>
        </div>
        <div class="con">
          <div class="left">
            <div class="user">
              <div class="tx">
                <img
                  src="data:image/png;base64,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"
                  alt
                >
              </div>
              <div class="xx">
                <div class="name">{{sj}}</div>
                <div class="pf">{{pf}}</div>
              </div>
            </div>
            <div class="txt">{{txt}}</div>
          </div>
          <div class="pic">
            <img src="http://pic2.34580.cn/group1/M00/82/EB/wKgNYlykkW6AJKFRAABqfmwudGw67.jpeg" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  created () {
    this.getUeserComment(this.$store.state.List.detailsProId);
  },
  data() {
    return {
      pj: "商品评价(2682)",
      hp: "好评95%",
      sj: "181****5093",
      pf: "★★★★★5分",
      txt: "为了评分，不走心好评！"
    };
  },
  computed: {
    ...Vuex.mapState({
      
    })
  },
  methods: {
    ...Vuex.mapActions({
      getUeserComment:"Details/getActionsUeserComment"
    })
  },
};
</script>

<style lang="scss">
.evaluate {
  width: 100%;
  height: 3.8rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-bottom: .3rem;
  .title {
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pj {
      display: flex;
      color: #333;
      font-weight: 700;
      font-size: 0.275rem;
      padding-left: 20px;
    }
    .hp {
      display: flex;
      color: #ff3f57;
      font-size: 0.25rem;
      padding-right: 20px;
      img {
        width: 0.16rem;
        height: 0.26rem;
        margin-left: 10px;
      }
    }
  }
  .row {
    position: relative;
    width: 100%;
    height:100%;
    overflow: hidden;
    overflow-x: auto;
    .content {
      position: absolute;
      width: max-content;
      height: 2.88rem;
      display: flex;
      overflow: auto;
      flex-shrink: 1;
      .con {
        width: 5.8rem;
        height: 2.5rem;
        display: flex;
        border: 2px solid #dfdfdf;
        margin:.1rem;;
        .left {
          width: 3.4rem;
          height: 2.44rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding:.2rem;
          .user {
            width: 2.46rem;
            height: 0.56rem;
            display: flex;
            .tx {
              width: 0.56rem;
              height: 0.56rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .xx {
              width: 1.66rem;
              height: 0.56rem;
              display: flex;
              flex-direction: column;
              padding-left: 20px;
            }
          }
          .txt {
            width: 2.86rem;
            height: 1.12rem;
            font-size: 0.275rem;
          }
        }
        .pic {
          width: 2.46rem;
          height: 2.44rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

.row::-webkit-scrollbar {display:none}
</style>