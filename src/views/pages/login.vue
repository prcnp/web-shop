<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="first">
        <div class="login_wrap">
        <div class="form_wrap">
            <el-form
                ref="formRef"
                :model="loginData"
                label-width="100px"
                class="demo-dynamic"
            >
                    <el-form-item
                    prop="username"
                    label="用户名"
                    :rules="[
                        {
                        required: true,
                        message: '此项目为必填',
                        trigger: 'blur',
                        }
                        
                    ]"
                    >
                    <el-input v-model="loginForm.username"/>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="密码"
                    :rules="[
                        {
                        required: true,
                        message: '此项目为必填',
                        trigger: 'blur',
                        }
                        
                    ]"
                    >
                    <el-input v-model="loginForm.password"
                    type="password"  />
                    </el-form-item>
            </el-form>
            <el-button type="primary" class="login_btn" @click="handleLogin">登录</el-button>
        </div>
    </div>

    </el-tab-pane>
    <el-tab-pane label="注册" name="second">
        <div class="login_wrap">
        <div class="form_wrap">
            <el-form
                ref="formRef"
                :model="registerItem"
                label-width="100px"
                class="demo-dynamic"
            >
                    <el-form-item
                    prop="username"
                    label="输入用户名"
                    :rules="[
                        {
                        required: true,
                        message: '此项目为必填',
                        trigger: 'blur',
                        }
                        
                    ]"
                    >
                    <el-input v-model="registerItem.username"/>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="输入密码"
                    :rules="[
                        {
                        required: true,
                        message: '此项目为必填',
                        trigger: 'blur',
                        }
                        
                    ]"
                    >
                    <el-input v-model="registerItem.password"
                    type="password"  />
                    </el-form-item>
            </el-form>
            <el-button type="primary" class="login_btn" @click="registeruser">注册</el-button>
        </div>
    </div>

    </el-tab-pane>
    <el-tab-pane label="管理员登录" name="third">
        <div class="login_wrap">
        <div class="form_wrap">
            <el-form
                ref="formRef"
                :model="loginForm"
                label-width="100px"
                class="demo-dynamic"
            >
                    <el-form-item
                    prop="username"
                    label="用户名"
                    :rules="[
                        {
                        required: true,
                        message: '此项目为必填',
                        trigger: 'blur',
                        }
                        
                    ]"
                    >
                    <el-input v-model="loginForm.username"/>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="密码"
                    :rules="[
                        {
                        required: true,
                        message: '此项目为必填',
                        trigger: 'blur',
                        }
                        
                    ]"
                    >
                    <el-input v-model="loginForm.password"
                    type="password"  />
                    </el-form-item>
            </el-form>
            <el-button type="primary" class="login_btn" @click="handleLogin2">登录</el-button>
        </div>
    </div>

    </el-tab-pane>
    </el-tabs>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex';
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default{
    name:'login',
    setup(){
        const store = useStore()
        const router = useRouter()
        const data=reactive({
            loginForm:{
                username:"",
                password:""
            },
            registerItem:{
                username:"",
                password:""
            },
            adminItem:{
                username:"",
                password:""
            }
        })
        const handleLogin=()=>{
            store.commit('setUserInfo',data.loginForm);
            localStorage.setItem("loginData",JSON.stringify(data.loginForm))
            axios.post("/users/login",{username:data.loginForm.username,password:data.loginForm.password}).then(function(resp){
                if(resp.data.code==0){
                    console.log(resp.data)
                    alert('用户名或密码错误')
                }else{
                    alert('登录成功')
                    router.push({
                        path:"/"
                    })
                }
            })
        }
        const handleLogin2=()=>{
            store.commit('setUserInfo',data.loginForm);
            localStorage.setItem("loginData",JSON.stringify(data.loginForm))
            axios.post("/admins/login",{username:data.loginForm.username,password:data.loginForm.password}).then(function(resp){
                if(resp.data.code==0){
                    console.log(resp.data)
                    alert('用户名或密码错误')
                }else{
                    alert('登录成功')
                    router.push({
                        path:"/"
                    })
                }
            })
        }
        const registeruser=()=>{
            axios.post("/users/register",{username:data.registerItem.username,password:data.registerItem.password}).then(function(resp){
                if(resp.data.code==1){
                    console.log(resp.data)
                    alert('注册成功')
                }else{
                    alert('用户名已存在')
                }
            })
        }
        return{
            ...toRefs(data),
            handleLogin,
            handleLogin2,
            registeruser,
            activeName: 'first'
        }
    }
    
}
</script>
<style scoped>
    .login_wrap{
        width: 100%;
        height: 100vh;
        background:rgb(56,89,139);
        position: relative;
    }
    .form_wrap{
        position: fixed;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        padding: 30px 50px;
        border-radius: 5px;

    }
    .login_btn{
        display: block;
        margin: 10px auto;
    }
</style>