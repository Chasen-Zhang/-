<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  created:function(){
  	console.log(1)
  }
}
</script>

<style lang="scss">
.list{
	color: red;
}
</style>
