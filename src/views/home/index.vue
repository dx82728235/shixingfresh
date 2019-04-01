<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
import Header from '@/common/header'
import {rushToPay} from "@/api/api"
import axios from '../../utils/http.js'

export default {
  components: {
    name:"home",
    Header
  },
  async created() {
    let data = await rushToPay();
    console.log(data)
  },
}
</script>
