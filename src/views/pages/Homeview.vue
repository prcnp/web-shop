<template>
    <div style="text-align: center;" class="home">
    <span class="demonstration">欢迎进入商城系统！</span>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in pc" :key="item">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
    </div>
</template>



<script >
export default{
    name:'home',
    data () {
      return {
        loading: true,
        pc:[  
          { url: require("@/assets/2.jpg") },
          { url: require("@/assets/4.jpg") }
        ]
      }
    },
  }
</script>


<style>
 

</style>