<template>
    <div class="AllFlesh">
        <ListLeft/>
      <!--    <LisRight/> -->
        <ListRightDemo1/>
    </div>
</template>
<script>
import ListLeft from "../listLeft/leftAss";
/* import LisRight from "../listRight/rightAss"; */
import ListRightDemo1 from "../listRightdemo1/index"
export default {
    data() {
        return {
            
        }
    },
    components:{
        ListLeft,
      /*   LisRight, */
        ListRightDemo1

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