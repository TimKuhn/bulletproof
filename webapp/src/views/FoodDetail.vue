<template>
  <div>
    <div>Detail</div>
    <div>{{id}}</div>
    <div>{{getData}}</div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          test: "a"
      }
  },
  props: {
    id: String
  },
  computed: {
      getData(){
          return this.$store.state.foods.find(food => food.id == this.id) || "Food not found"
      }
  }
};
</script>

<style>
</style>