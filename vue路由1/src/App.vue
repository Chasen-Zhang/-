<template>
  <div id="app">
    <router-link class="list" :to="{ path: '/home', query: { userId: 123 }}">跳转到home</router-link>
    <router-link class="list" to="/detail">跳转到detail</router-link>
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
  }
}
</script>

<style lang="scss">
.list{
	color: red;
}
</style>
