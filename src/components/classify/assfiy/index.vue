<template>
    <div class="AllFlesh">
        <ListLeft @handleToggle="toggle"/>
        <keep-alive>
            <component :is="componentId"></component>
        </keep-alive>
    </div>
</template>
<script>
import ListLeft from "../listLeft";
import ListRight from "../listRight"; 
import ListRightDemo from "../listRightdemo"
export default {
    data() {
        return {
            componentId:"ListRight"
        }
    },
    components:{
        ListLeft,
        ListRight,
        ListRightDemo
    },
    methods: {
        toggle(index){
            if(!index){
                this.componentId = ListRight;
            }else{
                this.componentId = ListRightDemo;
            }
        }
    }
}
</script>
<style scoped>
    .AllFlesh{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>