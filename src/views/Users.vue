<template>
  <div>
    <div>this is page users</div>
<!-- <div>{{ $route.params.nameuser }}</div> -->
<table border="1">
  <tr v-for="item in list" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.title}}</td>
  </tr>
</table>
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: "Users",
  data()
  {
    return {list:undefined}
  },
  created() {
    
    this.axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
     //console.log(data);
     this.list=resp.data;
    })
  }
}
</script>
