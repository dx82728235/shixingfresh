<template>
    <div class="top">
        <div :class="activeIndex==index?'head is_active':'head'" v-for="(item,index) in head" :key="index" @touchstart="handleActive(index)">{{item}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            head:["商品","详情","评价"],
            activeIndex:0
        }
    },
    methods: {
        handleActive(index){
            this.activeIndex = index;
        }
    },
}
</script>

<style lang="scss">
    .top{
        width: 100%;
        height: 0.8rem;
        background: #fafafa;
        display: flex;
        color: #666;
        font-size: 0.32rem;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: space-around;
            .head{
                height: .8rem;
                width: 20%;
                line-height: .8rem;
                text-align: center;
            }
           .is_active{
               color:#49aa34;
               border-bottom: #49aa34 4px solid;
           }
     }
</style>