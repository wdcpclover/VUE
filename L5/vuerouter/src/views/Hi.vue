<template>
    <div class="hi">
      <h1>{{ msg }}</h1>
     <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'This is HI 页面'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  