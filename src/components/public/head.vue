<template>
  <div class="header">
		<center>
			<h3>{{msg}}</h3>
		</center>
	</div>
</template>

<script>
export default {
  name: 'heads',
  data () {
    return {
      msg : 'header头组件'
    }
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
