<template>
  <div>
    {{name}}
    <button @click="changeMsg">点击改变msg</button>
    <br>
    gettersMsg: {{gettersMsg}}
  </div>
</template>
<style scoped>

</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    data(){
      return {
        name:"demo-vuex"
      }
    },
    computed: {...mapGetters(['gettersMsg'])},  //对应getters.技术中的gettersMsg
    methods: {...mapActions(['changeMsg'])}   //对应 Actions中changeMsg方法|| 映射this.changeMsg() 为 this.$store.dispatch('changeMsg')
  }
</script>
