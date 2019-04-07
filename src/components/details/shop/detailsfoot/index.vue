<template>
    <div class="bottom">
        <div class="left">
            <div class="kf">
                 <i class="iconfont">&#xe652;</i><span>{{kf}}</span>
            </div>
            <div class="sc">
                 <i class="iconfont">&#xe652;</i><span>{{sc}}</span>
            </div>
            <div class="gwc">
                 <i class="iconfont">&#xe652;</i><span>{{gwc}}</span>
            </div>
        </div>
        <div class="right">
            <button>{{btn}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            kf:"客服",
            sc:"收藏",
            gwc:"购物车",
            btn:"加入购物车"
        }
    }
}
</script>

<style lang="scss">
    .bottom{
        width: 7.5rem;
        height: .96rem;
        background: #fff;
        display: flex;
        position: fixed;
        bottom: 0;
        .left{
            width: 4.5rem;
            height: .84rem;
            display: flex;
            justify-content: space-around;
            padding-top: 10px;
            .kf,.sc,.gwc{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: .25rem;
                i{
                    font-size: .45rem;
                }
            }
            .kf>i{
                color: skyblue;
            }
        }
        .right{
            width: 3rem;
            height: .96rem;
            button{
                width: 2.5rem;
                height: .84rem!important;
                background: linear-gradient(90deg,#ff705b,#ff3f57);
                color: #fff;
                font-size: .25rem;
                border: 0;
                height: 40px;
                border-radius: .6rem;
                display: block;
                outline: none;
                margin-right: .5rem;
            }
        }
        
    }
</style>