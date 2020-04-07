<template>
  <div class="flex flex-col bg-gray-900 text-gray-100 min-h-screen">
    <div
      @click="goToPreviousPage"
      class="border-b border-blue-600 sticky top-0 h-12 pl-4 w-full bg-gray-900 flex items-center hover: cursor-pointer"
    >
      <div class="text-blue-600">&#x2190;</div>
      <div class="pl-8 w-2/3 flex-row">
        <div class="whitespace-no-wrap truncate">{{food.name}}</div>
        <div class="text-gray-500 font-light text-sm">
          <span>{{food.nutrition_basic.kcal}} kcal</span>
          <span class="pl-2">/</span>
          <span class="pl-2">{{food.nutrition_basic.unit}}</span>
        </div>
      </div>
    </div>
    <img class="object-cover h-32" :src="require(`@/assets/foods/${food.img}`)" />
    <div class="min-h-full text-gray-300">
      <div class="px-6">
        <div class="font-bold tracking-wider mt-6 font-bold truncate">{{food.name}}</div>
        <div class="text-xs text-gray-400 pt-2">
          <span :class="this.$store.state.health_level_to_color[food.health_level]">
            <font-awesome-icon icon="utensils" />
          </span>
          <span class="pl-2">
            <font-awesome-icon icon="clock" />
            <span class="text-gray-500 pl-2">{{food.when_to_eat}}</span>
          </span>
        </div>
      </div>

      <section class="mt-8">
        <div class="-mb-3 bg-gray-700 w-40 ml-2 px-2 text-center rounded-md font-light">Nutrition Basics</div>
        <div
          class="text-gray-500 h-24 flex justify-around text-center items-center border-t border-b border-1 border-gray-700"
        >
          <div class="flex-col">
            <div class="font-semibold text-lg">{{food.nutrition_basic.fats}} g</div>
            <div class="text-xs text-blue-300 pt-1">Fats</div>
          </div>
          <div class="flex-col">
            <div class="font-semibold text-lg">{{food.nutrition_basic.protein}} g</div>
            <div class="text-xs text-green-300 pt-1">Protein</div>
          </div>
          <div class="flex-col">
            <div class="font-semibold text-lg">{{food.nutrition_basic.carbohydrates}} g</div>
            <div class="text-xs text-red-300 pt-1">Carbohydrates</div>
          </div>
        </div>
      </section>
      <div class="p-6 font-thin mt-4">{{food.description}}</div>

      <div class="p-6 pt-12">Alternatives</div>
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