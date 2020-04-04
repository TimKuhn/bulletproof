<template>
  <div class="foods antialiased h-screen bg-gray-100">
    <!-- <section id="category-nav" class="flex sticky top-0 overflow-scroll text-lg text-gray-600 border-b bg-gray-100 ">
      <div 
        v-for="category in this.$store.state.unique_categories" :key="category"
        class="whitespace-no-wrap p-4 px-4 rounded-sm hover: cursor-pointer"
        :class="{ 'text-gray-900 bg-gray-300':  category == selected_category}"
        @click="selectCategory(category)"
        >
        {{category}}
        </div>
    </section>-->
    <section
      id="category-nav"
      class="flex sticky top-0 overflow-scroll text-2xl text-gray-600 border-b bg-gray-100"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        class="whitespace-no-wrap p-4 px-4 rounded-sm hover: cursor-pointer"
        :class="{ 'text-gray-900 bg-gray-300 border-green-400 border':  category.name == selected_category}"
        @click="selectCategory(category.name)"
      >
        <img class="object-cover w-48" :src="require(`@/assets/categories/${category.img}`)" />
      </div>
    </section>

    <section id="filter" class="my-auto">
      <!-- TODO: ADD FILTER HERE -->
      <span></span>
    </section>
    <section id="foods">
      <Food v-for="food in foodsOfCategory" :key="food.id" :food_data="food" />
    </section>
    <FoodDetail v-if="isActive" />
  </div>
</template>

<script>
import Food from "@/components/Food.vue";
import foods from "@/assets/foods.json";
import categories from "@/assets/categories.json";

export default {
  name: "Foods",
  components: {
    Food
  },
  data() {
    return {
      foods,
      categories,
      isActive: false
    };
  },
  methods: {
    selectCategory(category) {
      this.$store.dispatch("selectCategory", category);
    }
  },
  computed: {
    foodsOfCategory() {
      return (
        this.$store.state.foods.filter(
          food => food.category == this.$store.state.selected_category
        ) || []
      );
    },
    selected_category() {
      return this.$store.state.selected_category;
    }
  }
};
</script>
