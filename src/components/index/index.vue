<template>
  <div class="index">
		<h2>Vue自定义脚手架</h2>
		<heading></heading>
			<vuexcom></vuexcom>
			<p>vuex：store/store.js</p>
			<p>全局过滤器：static/filter.js</p>
			<p>后台接口集合：static/interface.js</p>
			<p>全局公共方法：static/public.js</p>

		<footing></footing>
	</div>
</template>

<script>
import heading from '../public/head'
import footing from '../public/foot'
import vuexcom from '../public/vuex'
export default {
  name: 'index',
  data () {
    return {
      msg : 'index'
    }
  },
	components:{
		heading,footing,vuexcom
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

</style>
