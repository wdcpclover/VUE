<template>
    <div>
        <h2>{{ msg }}--{{$route.params.username}}</h2>
        <H2>我们的ID是{{$route.params.id}}</H2>
   </div>
</template>
<script>
export default {
  name: 'par',
  data () {
    return {
      msg: 'params page'
    }
  }
}
</script>