<template>
  <div class="flex flex-col bg-gray-900 text-gray-100">
    <div @click="goToPreviousPage" class="border-b border-blue-600 sticky top-0 h-12 pl-4 w-full bg-gray-900 flex items-center">
      <div class="text-blue-600">&#x2190;</div>
      <div class="pl-8 w-2/3 flex-row">
        <div class="whitespace-no-wrap truncate">{{food.name}}</div>
        <div class="text-gray-700 font-light text-sm">
          <span>{{food.nutrition_basic.kcal}} kcal</span>
          <span class="pl-2">/</span>
          <span class="pl-2">{{food.nutrition_basic.unit}}</span>
        </div>
      </div>
    </div>
    <img class="object-cover h-32" :src="require(`@/assets/foods/${food.img}`)" />
    <div class="min-h-screen text-gray-300">
      <div class="px-6">
        <div class=" font-bold tracking-wider mt-6 font-bold truncate">{{food.name}}</div>
        <div class="text-xs text-gray-400 pt-2">
          <span :class="this.$store.state.health_level_to_color[food.health_level]">
            <font-awesome-icon icon="utensils" />
          </span>
          <span class="pl-2">
            <font-awesome-icon icon="clock" />
            <span class="text-gray-700 pl-2">{{food.when_to_eat}}</span>
          </span>
        </div>
      </div>
      <div class="p-6 font-thin mt-12">{{food.description}}</div>

      <div class="p-6 pt-24">Similar Foods</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  methods: {
    goToPreviousPage() {
      this.$router.go(-1);
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