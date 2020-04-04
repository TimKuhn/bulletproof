<template>
  <div
    @click="openFoodDetail(food_data.id)"
    class="flex mx-2 shadow-md rounded-lg h-20 my-2 bg-gray-900 hover: cursor-pointer"
  >
    <img class="h-20 w-20 object-cover p-2 rounded-full" :src="require(`@/assets/foods/${food_data.img}`)" />
    <div class="pl-8 w-3/5 my-auto truncate">
      <div class="text-gray-100 font-semibold">{{food_data.name}}</div>
      <div class="text-xs text-gray-400 pt-2">
        <span :class="health_level_to_color[food_data.health_level]">
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
      health_level_to_color: {
        8: "text-green-700",
        7: "text-green-500",
        6: "text-green-300",
        5: "text-yellow-200",
        4: "text-yellow-400",
        3: "text-orange-200",
        2: "text-orange-400",
        1: "text-red-500"
      }
    };
  },
  methods: {
    openFoodDetail(foodID) {
      this.$router.push(`/fooddetail/${foodID}`);
    }
  }
};
</script>

<style>
</style>