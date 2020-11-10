<template>
   <div>
    <h1>郑州大学荷园食堂</h1>
    <div>请选择你喜欢的食物</div>
  </div>
  <div>
    <button
      v-for="(item, index) in foods"
      v-bind:key="index"
      @click="selectFoodFun(index)"
    >
      {{ index }} + {{ item }}
    </button>
  </div>
  <div>你选择了【{{ selectFood }}】来吃</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const foods = ref(["米饭", "面条", "粥"]);
    const selectFood = ref("");
    const selectFoodFun = (index: number) => {
      selectFood.value = foods.value[index];
    };
    //因为在模板中这些变量和方法都需要条用，所以需要return出去。
    return {
      foods,
      selectFood,
      selectFoodFun,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
