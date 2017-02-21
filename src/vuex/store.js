import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   count: 0
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
   INCREMENT (state, amount) {
     state.count = state.count + amount
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})