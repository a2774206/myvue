<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	created:function(){
		this.fn.console('全局公共函数:"static/public.js"');
		this.fn.console('后台接口集合:"static/interface.js"');
		console.log(this.InterFace);
		this.fn.console('全局过滤器:"static/filter.js"');
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
