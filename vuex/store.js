import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    tip:'提示信息',
    fn:null
  },
  mutations: {
    show:function(state,tip){
      state.tip = tip.info
      state.fn = tip.callback
    }
  },
  actions: {
    show ( { commit },tip ) {
      commit('show',tip)
    }
  }
})

export {store}


//state 存储数据
//只能通过mutations改变state中的值
//actions就是在调用mutations，区别是它可以执行异步操作
//getters 获取state,并且派生出新的数据  clone
//
//