import { createRouter,createWebHistory } from 'vue-router'
import store from "../store/index.js"
const routes = [
  //登录页面
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/pages/login.vue')
  },
  {
    path:'/',
    name:'layout',
    component: () => import("../views/layout/Layout.vue"),
    redirect:'/',
    //子路由 / 嵌套路由
    children:[
      {
        path:"/",
        name:"home",
        component:() => import("../views/pages/Homeview.vue")
      },
      {
        path:"/myuser",
        name:"myuser",
        component:() => import("../views/pages/Myuser.vue")
      },
      {
        path:"/user",
        name:"user",
        component:() => import("../views/pages/Userlist.vue")
      },
      {
        path:"/goods",
        name:"goods",
        component:() => import("../views/pages/Goodslist.vue")
      },
      {
        path:"/admin",
        name:"admin",
        component:() => import("../views/pages/Adminlist.vue")
      },
      {
        path:"/update",
        name:"update",
        component:() => import("../views/pages/update.vue")
      },
      {
        path:"/add",
        name:"add",
        component:() => import("../views/pages/add.vue")
      },
      {
        path:"/order",
        name:"order",
        component:() => import("../views/pages/Order.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  /* from 从哪个页面
     to 到哪个页面
     next 执行next（）页面才会跳转 */
  console.log("store",store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if(!uInfo.username){
    //未登录，跳转到login页面
    if(to.path=="/login"){
      next()
      return
    }
    next("/login")
  }else{
    next()
  }
})
export default router
