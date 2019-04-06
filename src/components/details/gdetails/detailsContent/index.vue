<template>
    <div class="introduce">
       <Nav/>
        <div class="pic">
            <img src="https://pic2.34580.cn/group1/M00/56/CC/wKgNY1whxAaAHuFrAAPH15PeBQI529.jpg" alt="" class="pic1">
            <img src="https://pic2.34580.cn/group1/M00/56/C7/wKgNY1whv9uAQ1McAAIuFDvZfPU257.jpg" alt="" class="pic2">
            <img src="https://pic2.34580.cn/group1/M00/56/C7/wKgNY1whv9uAYBDuAAaaqGFzV00600.jpg" alt="" class="pic3">
            <img src="https://pic2.34580.cn/group1/M00/56/C7/wKgNY1whv9uAB6nCAAgGu2KryF0723.jpg" alt="" class="pic4">
            <img src="https://pic2.34580.cn/group1/M00/42/14/wKgNYlwiL8SAAuLdAAeC2ewW5Ms036.jpg" alt="" class="pic5">
            <img src="https://pic2.34580.cn/group1/M00/42/14/wKgNYlwiL8SABqPqAAk4F68S6Hg835.jpg" alt="" class="pic6">
            <img src="https://pic2.34580.cn/group1/M00/56/C7/wKgNY1whv9yAbLzfAAXDLBJ0XfE097.jpg" alt="" class="pic7">
            <img src="https://pic2.34580.cn/group1/M00/42/14/wKgNYlwiL8SAGeCbAAkY3ODYvCo232.jpg" alt="" class="pic8"> 
        </div>
    </div>
</template>

<script>
import Nav from '@/components/gdetails/detailsNav'
export default {
    name:"introduce",
    data(){
        return{
           
        }
    },
    components:{
        Nav
    }
}
</script>

<style lang="scss" scoped>
    .introduce{
        width: 100%;
        height: max-content;
        
        .pic{
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column;
            padding-bottom: .96rem;
          
            .pic1{
                height: 9.28rem;
                margin-top: .8rem;
            }
            .pic2{
                height: 6.64rem;
            }
            .pic3{
                height: 18.07rem;
            }
            .pic4{
                height: 18.07rem;
            }
            .pic5{
                height: 18.07rem;
            }
            .pic6{
                height: 18.07rem;
            }
            .pic7{
                height: 18.07rem;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    
</style>
