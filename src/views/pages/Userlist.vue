<template>
    <div>
        <p align="center">用户列表</p>
        <el-form :inline="true" :model="searchmod" class="demo-form-inline">
            <el-form-item>
                <el-input v-model="searchmod.tempname" placeholder="请输入用户名"></el-input>
            </el-form-item>
         
            <el-form-item>
                <el-button type="primary" @click="testview">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="users.data"
            height="500"
            border
             style="width: 100%">
                <el-table-column
                    prop="userId"
                    label="编号"
                    width="400">
                </el-table-column>
                <el-table-column
                    prop="username"
                    label="用户名"
                    width="400">
                </el-table-column>
                <el-table-column
                    prop="password"
                    label="密码">
                </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'user',
    data(){
        return{
            users:[],
            searchItem:[],
            searchmod:{
                tempname:"",
            }
        }
    },
    created(){
        var that = this;
        axios.get("/users/getAllUsers",{params:{pageNum:1,pageSize:50}}).then(function(resp){
            that.users=resp.data
            console.log(resp.data)
        })
    },
    methods:{
        testview(){
            console.log(this.searchmod.tempname)
            var that = this;
            axios.get("/users/findUserByUsername",{params:{username:this.searchmod.tempname}}).then(function(resp){
                that.users=resp.data
                console.log(resp.data)
            })
        }
    }
}
</script>
