<template>
  <div class="foods antialiased h-screen bg-gray-100">
    <section id="category-nav" class="flex overflow-scroll text-lg text-gray-600 border-b">
      <div 
        v-for="category in this.$store.state.unique_categories" :key="category"
        class="whitespace-no-wrap p-2 px-4  rounded-sm"
        :class="{ 'text-gray-900 bg-gray-300':  category == selected_category}"
        @click="selectCategory(category)"
        >
        {{category}}
        </div>
    </section>
    <section id="filter" class="h-6 my-auto">
      <!-- TODO: ADD FILTER HERE -->
      <span></span>
    </section>
    <section id="foods">
      <Food v-for="food in foodsOfCategory" :key="food.id" :food_data="food"/>
    </section>
    <FoodDetail v-if="isActive"/>
  </div>
</template>

<script>
import Food from "@/components/Food.vue";
import FoodDetail from "@/components/FoodDetail.vue";
import foods from "@/assets/foods.json";


export default {
  name: "Foods",
  components: {
    Food,
    FoodDetail
  },
  data() {
    return {
      foods,
      isActive: false
    };
  },
  methods: {
    selectCategory(category){
      this.$store.dispatch("selectCategory", category)
    }
  },
  computed: {
    foodsOfCategory(){
      return this.$store.state.foods.filter(food => food.category == this.$store.state.selected_category) || []
    },
    selected_category(){
      return this.$store.state.selected_category
    }
  }
  
};
</script>
