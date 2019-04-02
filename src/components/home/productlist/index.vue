<template>
    <div class="product-list">
        <div class="product">
            <div class="pro-content">
                <div class="pro-image">
                    <img src="http://picpro-sz.34580.com/sz/ImageUrl/544390/160.jpeg" />
                </div>
                <div class="pro-name">
                    小竹笋
                </div>
                <div class="pro-label"></div>
                <div class="pro-price">
                    <span>¥3.99</span>
                    /500g
                </div>
            </div>
            <div class="pro-content">
                <div class="pro-image">
                    <img src="http://picpro-sz.34580.com/sz/ImageUrl/544390/160.jpeg" />
                </div>
                <div class="pro-name">
                    小竹笋
                </div>
                <div class="pro-label">
                    <span>2件28.8元</span>
                </div>
                <div class="pro-price">
                    <span>¥3.99</span>/500g
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    created () {
        this.getActionsMattersNeed();
        this.getActionsRushToPay();
    },
    computed: {
        
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
        .product{
            display: flex;
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
                    font-size:.3rem;
                    color: #aaa;
                    width: 2rem;
                    span{
                        color: red;
                        
                    }
                }
            }
        }
    }
</style>