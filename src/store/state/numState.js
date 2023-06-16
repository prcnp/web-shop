export default{
    namespaced:true,
    state: {
        count:1,
      },
      //计算state,获取对应的值
      getters: {
        countStatus(state){
          return state.count>=1
        }
      },
      //更新状态的方法-更新state唯一方法,commit mutations
      mutations: {
        setCount(state,num){
          state.count=num
        }
      },
      //可以异步操作，可以返回promise
      actions: {
        setCountPromise(context,num){
          return new Promise((resolve,reject)=>{
            if(num>100)
            {
              reject("值不能大于100")
            }else{
              context.commit("setCount",num)
              resolve()
            }
          })
        }
      },
}