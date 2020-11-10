<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Hi">Hi页面</router-link>|
    <router-link to="/hi/Hi1">Hi1子页面</router-link>|
    <router-link to="/Hi/Hi2">Hi2子页面</router-link>|
    <router-link :to="{name:'par',params:{username:'cpc',id:'1234'}}">Params页面</router-link>|
    <router-link to="/fenye">分页页面</router-link>|
    <router-link to="/goparams/1234/test for params">urlPAram页面</router-link>|
    <router-link to="/gohome">跳转页面</router-link>|
    <router-link to="/goparams/54321/test for 带参数跳转">带参数跳转页面</router-link>|
    <router-link to="/chongdingxiang">重定向页面</router-link>
    <router-view/>
    <!-- <router-view/> -->
    <!-- <router-view name="about"></router-view> -->
    <router-view name="left1" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right1" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>

</template>

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
