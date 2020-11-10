<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/">点击进入hello首页</router-link> |
      <router-link to="/hello1">点击进入hello1</router-link> |
      <router-link to="/hello2">点击进入hello2</router-link>
       </div>
    <router-view/>
     <p> 我是App.vue中的， 【gettersMsg】 的值是 {{gettersMsg}}</p>
  
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
export default {
  name: 'app',
  computed:{...mapGetters(['gettersMsg'])}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
