<template>
    <div class="hi2">
      <h1>{{ msg }}</h1>
     
    </div>
  </template>
  
  <script>
  export default {
    name: 'hi2',
    data () {
      return {
        msg: 'This is HI2 子页面'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>