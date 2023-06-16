<template>
    <div>
      <el-descriptions  class="margin-top" title="个人信息" :column="3" :size="size">
      </el-descriptions>
      <el-table
            :data="myuser.data"
            height="100"
            border
             style="width: 100%">
                <el-table-column
                    prop="userId"
                    label="编号"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="username"
                    label="用户名"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="名字"
                    width="500">
                </el-table-column>
        </el-table>
        <el-table
            :data="myuser.data"
            height="100"
            border
             style="width: 100%">
                <el-table-column
                    prop="phone"
                    label="手机"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
        </el-table>
        <el-table
            :data="myuser.data"
            height="100"
            border
             style="width: 100%">
                <el-table-column
                    prop="post"
                    label="邮编"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别"
                    width="500">
                </el-table-column>
        </el-table>
        <div style="text-align: center;">
          <el-button  type="text" size="small" @click="update">编辑</el-button>
        </div>
    </div>
</template>

<script >
import router from '@/router';
import axios from 'axios';
export default{
    name:'myuser',
    data(){
      return{
        myuserItem:JSON.parse(localStorage.getItem('loginData')),
        myuser:[],
        myuserForm:{
          address:""
        }
      }
    },
    created(){
      console.log("This is"+this.myuserItem.username)
      var that = this;
      axios.get("/users/findUserByUsername",{params:{username:this.myuserItem.username}}).then(function(resp){
        that.myuser=resp.data
        console.log(resp.data)
      })
    },
    methods:{
        update:()=>{
            router.push({
                path:"/update"
            })
        }
    }
}
</script>