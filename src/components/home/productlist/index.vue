<template>
    <div class="product-list">
        <BScroll>
        <div class="product">
            <div class="pro-content" v-for="(item,index) in productsList" >
                <div class="pro-image">
                    <img :src="item.PictureId | toPath()" />
                </div>
                <div class="pro-name">
                    {{item.ProductName}}
                </div>
                <div class="pro-label">
                    <span>{{item.ActivityLabel}}</span>
                </div>
                <div class="pro-price">
                    <span>{{item.MaxPeriodMoney | toPrice("￥")}}</span>{{item.Unit | toPrice("/")}}
                </div>
            </div>
            <p class="view-all">{{all}}</p>
        </div>
        </BScroll>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    created () {
        this.getActionsMattersNeed();
        this.getActionsRushToPay();
    },
    data() {
        return {
            all:"查看全部"
        }
    },
    computed: {
        ...Vuex.mapState({
            productsList:state=>state.Home.productsList
        })
    },
    methods: {
        ...Vuex.mapActions({
            getActionsMattersNeed:"Home/getActionsMattersNeed",
            getActionsRushToPay:"Home/getActionsRushToPay"
        })
    }
}
</script>

<style lang="scss">
    .product-list{
        width: 100%;
        overflow:hidden;
        .product{
            width:max-content;
            display: flex;
            padding-right: .2rem;
            .pro-content{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 2.2rem;
                padding-right: .1rem;
                padding-bottom:.1rem;
                height: 3.4rem;;
                .pro-image{
                    img{
                        width: 100%;
                    }
                }
                .pro-name{
                    font-size: .3rem;
                    color: #333;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .pro-label{
                    display: flex;
                    height: 0.4rem;
                    width: 100%;
                    span{
                        padding: .05rem;
                        text-overflow: ellipsis;
                        border-radius: 1rem;
                        overflow: hidden;
                        white-space: nowrap;
                        color: #ff550f;
                        font-size: .2rem;
                        border: 1px solid #ff550f;
                        background-color: #fff;
                    }
                }
                .pro-price{
                    font-size:.28rem;
                    color: #aaa;
                    width: 2rem;
                    span{
                        color: red;
                        
                    }
                }
            }
            .view-all{
                width: .2rem;
                font-size: .25rem;
                color:#999;
                padding:.15rem .3rem;
            }
        }
    }
</style>