<template>
  <div
    @click="openFoodDetail(food_data.name)"
    class="flex mx-2 shadow-md rounded-lg h-20 my-2 bg-gray-900 hover: cursor-pointer"
  >
    <img class="h-20 w-20 object-cover p-2 rounded-full" :src="require(`@/assets/foods/${food_data.img}`)" />
    <div class="pl-8 w-3/5 my-auto">
      <div class="text-gray-100 font-semibold truncate">{{food_data.name}}</div>
      <div class="text-xs text-gray-400 pt-2">
        <span :class="this.$store.state.health_level_to_color[food_data.health_level]">
          <font-awesome-icon icon="utensils" />
        </span>
        <span class="pl-2">
          <font-awesome-icon icon="clock" />
          <span class="text-gray-300 pl-2">{{food_data.when_to_eat}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    food_data: Object
  },
  data() {
    return {
      
    };
  },
  methods: {
    openFoodDetail(foodName) {
      this.$router.push(`/fooddetail/${foodName}`);
    }
  }
};
</script>

<style>
</style>