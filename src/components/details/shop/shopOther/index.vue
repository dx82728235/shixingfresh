<template>
    <div class="other">
        <div class="otherTop">
            <span class="tag">{{promotion}}</span>
            <span class="repurchase">{{repurchase}}</span>
            <span class="txt">{{text}}</span>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="">
        </div>
        <div class="otherBottom">
            <span class="tag">{{promotion2}}</span>
            <span class="txt"><span v-for="(item,index) in productInfoServiceList">{{item.name}} · </span></span>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="">
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    computed: {
      ...Vuex.mapState({
          productInfoServiceList:state=>state.Details.productInfoServiceList
      })  
    },
    data() {
        return {
            promotion:"促销",
            repurchase:"换购",
            text:"【全场】购物满49元可换购1件",
            promotion2:"服务",
        }
    },
}
</script>

<style lang="scss">
    .other{
        height: 2rem;
        background-color: #fff;
        margin: 20px 0;
        padding: 12px 16px;
        font-size: .275rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .otherTop{
            width: 6.86rem;
            height: .7rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: .48rem;
                height: .48rem;
            }
            .tag{
                    color: #999;
                    font-size: .275rem;
            }
            .repurchase{
                    width: .8rem;
                    height: .36rem;
                    border-radius: 20%;
                    padding: 0 6px;
                    background: linear-gradient(90deg,#ffa033,#ff5551);
                    color: #fff;
                    margin-left: 8px;
                    font-size: .275rem;
            }
        }
         .otherBottom{
            width: 6.86rem;
            height: .7rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
             img{
                width: .48rem;
                height: .48rem;
            }
            .tag{
                    color: #999;
                    font-size: .275rem;
            }
            
        }
    }
</style>