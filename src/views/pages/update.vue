<template>
    <p>更新</p>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  
<el-form-item label="用户ID" height="150px">
    <el-input v-model="newuser.userId"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="newuser.email"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-input v-model="newuser.sex"></el-input>
  </el-form-item>
  <el-form-item label="名字">
    <el-input v-model="newuser.name"></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="newuser.phone"></el-input>
  </el-form-item>
  <el-form-item label="邮编">
    <el-input v-model="newuser.post"></el-input>
  </el-form-item>
</el-form>
<div style="text-align: center;">
    <el-button @click="test">提交</el-button>
</div>
</template>



<script >
import axios from 'axios';

export default{
    name:'update',
    data(){
        return{
            newuser:{
                userId:null,
                email:"",
                address:"",
                sex:"",
                name:"",
                phone:"",
                post:"",
                money:""
            }
        }
    },
    methods:{
        test(){
            console.log(this.newuser.userId)
            axios.put("/users",{userId:this.newuser.userId,email:this.newuser.email,
            address:this.newuser.email,sex:this.newuser.sex,name:this.newuser.name,phone:this.newuser.phone,post:this.newuser.post})
            alert("修改完成！")
        }
  }
}
</script>