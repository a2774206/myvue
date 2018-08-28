/**
 * 	示例组件：vuex.vue
 */
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
  // state存放数据
  state:{
      count:0
  },
 //修改vuex写在mutaitons
  mutations:{
    // 在mutations 中定义的方法中 参数一 为操作的数据 ， 参数二 为 指定的数量 类型可以为数字、字符串或者对象类型
    //使用注意事项: mutations里尽量不要异步操作数据，如果异步操作数据了，组件在commit后，数据不能立即改变，而且不知道什么时候会改变。
    increment (state){
      state.count ++;
    },
    decrease (state){
      state.count --;
    },
    addclick(state , n){
      state.count += n;
    },
    //另外一种使用方式为直接使用包含type属性的对象例如
    addobject(state ,  params){
      state.count += params.count;
    },
	changeVal(state , n){
	state.count = n;
	}
  }
  //除了 state mutations 还有 getters actions modules （这三个为高级用法）
  
})

export default store;