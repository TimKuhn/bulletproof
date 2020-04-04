<template>
  <div class="foods antialiased min-h-screen bg-gray-700">
    <section
      id="category-nav"
      class="flex sticky top-0 overflow-scroll text-gray-600 bg-gray-400 shadow-inner"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        @dblclick="preventDbClick"
        class="whitespace-no-wrap rounded-sm hover: cursor-pointer py-2"
        :class="{ 'text-gray-900 bg-gray-300 border-gray-700 border px-4':  category.name == selected_category}"
        @click="selectCategory(category.name)"
      >
        <img class :src="require(`@/assets/categories/${category.img}`)" />
      </div>
    </section>

    <section id="filter" class="my-auto">
      <!-- TODO: ADD FILTER HERE -->
      <span></span>
    </section>
    <section id="foods">
      <Food v-for="food in foodsOfCategory" :key="food.id" :food_data="food" />
    </section>
    
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
    };
  },
  methods: {
    selectCategory(category) {
      this.$store.dispatch("selectCategory", category);
    },
    preventDbClick(event) {
      // This prevents the zoom functionality on a mobile phone
      event.preventDefault();
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
