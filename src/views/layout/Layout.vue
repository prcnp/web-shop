<template>
    <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
            <img class="logo" src="../../assets/shop.png" alt="">
            <h1 class="title">二手商城管理系统</h1>
        </div>
        <el-button type="danger" @click="loginOut">退出</el-button>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
            <el-menu
                background-color="none"
                text-color="#fff"
                :router="true"
            >
                    <el-menu-item-group>
                        <el-menu-item index="/">主页</el-menu-item>
                     </el-menu-item-group>

                <el-sub-menu index="1">
                    <template #title>
                        <span>账号管理</span>
                    </template>
                     <el-menu-item-group>
                        <el-menu-item index="/myuser">个人信息</el-menu-item>
                        <el-menu-item index="/user">账号列表</el-menu-item>
                        <el-menu-item index="/admin">管理员列表</el-menu-item>
                     </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <span>商品管理</span>
                    </template>
                     <el-menu-item-group>
                        <el-menu-item index="/goods">商品列表</el-menu-item>
                        <el-menu-item index="/order">我的订单</el-menu-item>
                     </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
    <div>
        <!--router-view-->

    </div>
</template>
<script>
import { useRouter } from "vue-router"
    export default{
        name:'layout',
        setup(){
            const router = useRouter()
            const loginOut=()=>{
                router.push({
                    path:"/login"
                })
            }
            return{
                loginOut
            }
        }
    }
</script>
<style>
    .el-container{
        height: 100vh;
        overflow: hidden;
    }
    .common-header{
        background: rgba(0, 0, 0, 0.834);
        display: flex;
    }
    .common-aside{
        background: rgba(0, 0, 0, 0.8);

    }
    .logo{
        width: 60px;
    }
    .title{
        color: beige;
    }
</style>