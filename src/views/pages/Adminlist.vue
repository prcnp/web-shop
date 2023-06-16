<template>
    <div>
        <p align="center">管理员列表</p>
        <el-table
            :data="admins.data"
            height="250"
            border
             style="width: 100%">
                <el-table-column
                    prop="adminId"
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
            admins:[]
        }
    },
    created(){
        var that = this;
        axios.get("/admins/getAllAdmins").then(function(resp){
            that.admins=resp.data;
        })
    }
}
</script>