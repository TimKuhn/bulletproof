<template>
  <div class="flex flex-col">
    <div @click="goToPreviousPage" class="h-12 w-full bg-gray-100 mx-auto my-auto">&#x2190;</div>
    <img class="object-cover h-24" :src="require(`@/assets/foods/${food.img}`)"/>
    <div class="text-gray-700 font-bold truncate px-2 my-auto">{{food.name}}</div>
    <div>{{food}}</div>

    <div class="pt-24">Similar Foods</div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  methods: {
      goToPreviousPage(){
          this.$router.go(-1)
      }
  },
  computed: {
    food() {
      return (
        this.$store.state.foods.find(food => food.id == this.id) ||
        "Food not found"
      );
    }
  }
};
</script>

<style>
</style>