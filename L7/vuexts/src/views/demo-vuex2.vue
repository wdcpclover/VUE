<template>
  <div>
    {{gettersMsg}}
  </div>
</template>
<style scoped>

</style>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data(){
      return {}
    },
    computed:{...mapGetters(['gettersMsg'])}

  }
</script>
