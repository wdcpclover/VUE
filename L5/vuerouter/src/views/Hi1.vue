<template>
    <div class="hi1">
      <h1>{{ msg }}</h1>
     
    </div>
  </template>
  
  <script>
  export default {
    name: 'hi1',
    data () {
      return {
        msg: 'This is HI1 子页面'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  