<template>
  <div>
    <component1></component1>
    <component2></component2>
  </div>
</template>

<script>
  import Component1 from '@/views/Component1'
  //import xxx from  '@/components/xxx' 中的@表示src
  // 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
  import Component2 from '@/views/Component2'
export default {
components:{
  Component1,
  Component2
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

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
