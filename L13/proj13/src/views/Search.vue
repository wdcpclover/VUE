<template>
    <div >
<cube-input v-model="value" @change="ch" >
</cube-input>
<i class="cubeic-search"></i>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods:{
      ch(){
          console.log("搜索开始")
          console.log(this.value)
               }
      
  }
}
</script>

<style lang="stylus" scoped>

.cubeic-search
        position  fixed
        top  15px
        right 10px 
        z-index 1000
        width 30px
        height 100px 
        
</style>