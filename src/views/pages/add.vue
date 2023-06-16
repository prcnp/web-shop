<template>
    <p>商品添加</p>
   <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  
  <el-form-item label="名称" height="150px">
      <el-input v-model="commodity.commodityName"></el-input>
    </el-form-item>
    <el-form-item label="描述" height="500px">
      <el-input v-model="commodity.commodityDepict"></el-input>
    </el-form-item>
    <el-form-item label="总量">
      <el-input v-model="commodity.commodityAmout"></el-input>
    </el-form-item>
    <el-form-item label="余量">
      <el-input v-model="commodity.commodityLeaveNum"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="commodity.commodityPrice"></el-input>
    </el-form-item>
    <el-form-item label="商城价">
      <el-input v-model="commodity.webPrice"></el-input>
    </el-form-item>
  </el-form>
  <div style="text-align: center;">
      <el-button @click="test">提交</el-button>
  </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'add',
    data(){
        return{
            commodity:{
                commodityAmout:null,
                commodityDepict:"",
                commodityLeaveNum:null,
                commodityName:"",
                commodityPrice:null,
                webPrice:null,
            }
        }
    },
    methods:{
        test(){
            axios.post("/commodities/addCommodity",{commodityName:this.commodity.commodityName,commodityDepict:this.commodity.commodityDepict,
            commodityAmout:this.commodity.commodityAmout,commodityLeaveNum:this.commodity.commodityLeaveNum,commodityPrice:this.commodity.commodityPrice,webPrice:this.commodity.webPrice})
            alert("添加完成！")
        }
  }
}
</script>