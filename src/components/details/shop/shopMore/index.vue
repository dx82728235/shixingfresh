<template>
  <div class="more">
    <div class="title">
      <span>{{title}}</span>
    </div>
    <div class="gd">
      <div class="inner">
        <div class="pic">
          <img src="http://picpro-sz.34580.com/wx/ImageUrl/541919/500.jpeg" alt>
        </div>
        <div class="name">{{tomato}}</div>
        <div class="info">
          <div class="weight">{{weight}}</div>
          <div class="price">
            <span>￥{{money}}</span>
            <span class="cart">
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="inner">
        <div class="pic">
          <img src="http://picpro-sz.34580.com/wx/ImageUrl/541919/500.jpeg" alt>
        </div>
        <div class="name">{{tomato}}</div>
        <div class="info">
          <div class="weight">{{weight}}</div>
          <div class="price">
            <span>￥{{money}}</span>
            <span class="cart">
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "您可能会喜欢",
      tomato: "西红柿（红果）",
      weight: "/500g",
      money: "5.60"
    };
  }
};
</script>

<style lang="scss">
.more{
  width: 100%;
.title {
  text-align: center;
  color: #999;
  font-size: .3rem;
}
.gd {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .96rem;
  .inner {
    width: 3.5rem;
    height: 5.75rem;
    margin: .2rem 0;
    margin-left: .17rem;
    border-radius: .1rem;
    overflow: hidden;
    background: #fff;
    .pic {
      width: 3.5rem;
      height: 3.5rem;
      img {
        width: 100%;
        height: 100%;
      }
     
    }
     .name {
        width: 100%;
        height: .64rem;
        color: #333;
        font-size: 0.3rem;
        line-height: .64rem;
      }
      .info{
          width: 3.5rem;
          height: 1.28rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .weight{
              width: 100%;
              height: .42rem;
              color: #999;
          }
          .price{
              width: 100%;
              height: .42rem;
              font-size: .3rem;
              color: #f05423;
              display: flex;
              justify-content: space-between;
              padding-right: .18rem;
                .cart{
                  text-align: center;
                  line-height: .54rem;
                  width:.54rem;
                  height: .54rem;
                  border-radius: 60%;
                  border: 1px solid #ccc;
                  i{
                    font-size: .25rem;
                  }
                }
          }
      }
  }
}
}
</style>