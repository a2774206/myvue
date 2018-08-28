/**
 * 全局过滤器
 */

import Vue from 'vue'

//过滤函数列表
let filter = {
	filter1: function(value) {
		return value + '次';
	},
	filter2:function(value){
		return value;
	}
}

//注册过滤器
for (let i in filter) {  
    Vue.filter(i,filter[i]);
}

export default Vue;
