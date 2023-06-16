import { createStore } from 'vuex'
import number from "./state/numState.js"
import uInfo from "./state/userInfo.state.js"
export default createStore({
  

  //数据较多，分模块
  modules: {
    number,
    uInfo
  }
})
