<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper,{
            scrollX:true,
            click:true
        })
        //console.log(this.scroll);
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        width: 100%;
        height:100%;
    }
</style>