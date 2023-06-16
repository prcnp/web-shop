import axios from "axios"
import { ElLoading } from "element-plus"
import { ElMessage } from "element-plus"
const loadingObj=ElLoading.service({
    lock:true,
    text:'loading',
    background:'rgba(0,0,0,0.7)',
})
const Service = axios.create({
    timeout:8000,
    baseURL:"http://localhost:8081",
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})
//请求拦截
Service.interceptors.request.use(config=>{
    loadingObj=ElLoading.service({
        lock:true,
        text:'loading',
        background:'rgba(0,0,0,0.7)',
    })
    return config
})
//响应拦截
Service.interceptors.response.use(response=>{
    loadingObj.close()
    return response.data
},error=>{
    loadingObj.close()
    ElMessage({
        message:"服务器错误",
        type:"error",
        duration:2000
    })
})

//post
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}
//get
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        data:config.data
    })
}