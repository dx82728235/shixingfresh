<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
import Header from '@/common/header'
import {rushToPay} from "@/api/api"
import axios from 'axios';

export default {
  components: {
    name:"home",
    Header
  },
  // async created(){
  //   let data = await rushToPay();
  //   console.log(data);
  // }
  created() {
//http://m.maoyan.com/ajax/movieOnInfoList?token=
    axios({
      method:"get",
      url:"/api/ajax/movieOnInfoList?token="
    })
  },
}
</script>
