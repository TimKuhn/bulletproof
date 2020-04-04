<template>
  <div @click="openFoodDetail" class="flex mx-2 shadow-md rounded-lg h-20 my-2 bg-white">
    <img class="w-1/5 object-cover rounded-l-lg" :src="require(`@/assets/foods/${food_data.img}`)" />
    <div class="pl-8 w-3/5 my-auto truncate">
      <div class="text-gray-800">{{food_data.name}}</div>
      <div class="text-xs text-gray-700 pt-2">
        <font-awesome-icon icon="clock" />
        <span class="text-gray-600 pl-2">{{food_data.when_to_eat}}</span>
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
        8: "bg-green-700",
        7: "bg-green-500",
        6: "bg-green-300",
        5: "bg-yellow-200",
        4: "bg-yellow-400",
        3: "bg-orange-200",
        2: "bg-orange-400",
        1: "bg-red-500"
      }
    };
  },
  methods: {
    
  }
};
</script>

<style>
</style>