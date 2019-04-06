<template>
    <div class="nav">  
        <div class="left">
            {{js}}
        </div>
        <div class="right">
            {{gg}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            js:"介绍",
            gg:"规格"
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        width: 100%;
        height: .8rem;
        display: flex;
        font-size: .32rem;
        position: fixed;
        top: .8rem;
            .left{
                width: 3.75rem;
                height: .8rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
                color:#49aa34;
            }
            .right{
                width: 3.75rem;
                height: .8rem;
                display: flex;
                justify-content: center;
                align-items: center;
                 background: #fff;
                color: #666;
            }
        }
</style>
