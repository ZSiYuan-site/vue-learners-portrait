import Vue from 'vue'
import Vuex from 'vuex'

// 引入 vuex 模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 生成store对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

// 暴露
export default store