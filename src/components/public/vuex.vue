<template>
  <div class="vuex">
		<h4 @click="changeCom('data')">{{msg}}{{num|filter1}}</h4>
   </div>
</template>

<script>
/**
 * vuex使用及加本地存储示例
 */
export default {
  name: 'vuexcom',
  data () {
    return {
      msg: 'vuex初始化及本地存储组件:'
    }
  },
	computed:{
		num(){
			return this.$store.state.count;
		}
	},
	methods:{
		changeCom(key){
			//increment()：点击+1 见stroe.js
			this.$store.commit('increment');
			localStorage.setItem(key,this.num);

		},
		getStorage(key){
			//这里获取localStorage是否存在并且修改vuex里的值
			// 用于刷新页面初始化vuex值
			let val = localStorage.getItem(key);
			
			!!val ? this.$store.commit('changeVal',val) : '';
		}
	},
	created:function(){
		this.getStorage('data');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
h4{
	cursor: pointer;
}
</style>
