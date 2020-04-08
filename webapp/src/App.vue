<template>
  <div id="app">
    <!-- SEARCH INPUT WRAPPER -->
    <div v-if="searchActive" class="flex flex-col fixed w-full top-0 z-10">
      <!-- SEARCH -->
      <div>
        <div class="bg-white z-20">
          <input
            id="searchInputField"
            ref="searchInputField"
            type="text"
            autofocus
            class="text-sm text-gray-700 tracking-wide pl-4 w-full h-12 focus:outline-none"
            placeholder="Search for foods, descriptions and so on..."
            v-model="clientSearchText"
          />
          <button
            @click="searchActive = !searchActive"
            class="absolute top-0 right-0 pt-2 pr-8 text-xl text-gray-600"
          >&times;</button>
        </div>
      </div>
      <!-- SEARCH END -->
      <!-- SEARCH RESULTS -->
      <div v-if="clientSearchText && searchResultsFoods" class="z-10 bg-gray-100 overflow-scroll">
        <section
          v-if="searchResultsFoods"
          id="foodResults"
          class="flex flex-1 py-6 overflow-y-scroll"
        >
          <div class="font-semibold w-1/3 pl-4">Foods</div>
          <div class="w-2/3 flex flex-col h-64 overflow-y-auto">
            <a
              :href="`/fooddetail/${result}`"
              v-for="result in searchResultsFoods"
              :key="result"
              class="w-full h-10 mt-4"
            >
              <div class>{{result.name}}</div>
              <div class="flex">
                <div class="text-xs text-gray-600">{{result.category}}</div>
                <div  class="pl-4 text-xs text-gray-600">{{result.when_to_eat}}</div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <!-- SEARCH RESULTS END-->

      <!-- OVERLAY -->
      <div
        v-if="searchActive"
        class="w-full z-0 h-screen bg-gray-300 opacity-75"
        @click="searchActive = !searchActive"
      ></div>
      <!-- OVERLAY END -->
    </div>
    <!-- SEARCH INPUT WRAPPER END-->

    <div
      id="nav"
      class="fixed bottom-0 flex justify-around antialiased w-full text-gray-600 bg-gray-900 uppercase border-t border-blue-600"
    >
      <router-link to="/foods" :class="{ 'text-blue-600': '/foods' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl" />
          <div class="pb-2" style="font-size: .5rem;">Foods</div>
        </div>
      </router-link>
      <router-link to="/timing" :class="{ 'text-blue-600': '/timing' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl" />
          <div class="pb-2" style="font-size: .5rem;">Timing</div>
        </div>
      </router-link>

      <router-link to="/guide" :class="{ 'text-blue-600': '/guide' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl" />
          <div class="pb-2" style="font-size: .5rem;">Guide</div>
        </div>
      </router-link>
      <div @click="this.toggleSearch">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl" />
          <div class="pb-2" style="font-size: .5rem;">Search</div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import foods from "@/assets/foods.json";

export default {
  data() {
    return {
      stuff: this.$route,
      searchActive: false,
      clientSearchText: "",
      foods
      //results: ["2", "§asofijas"]
    };
  },
  methods: {
    toggleSearch() {
      this.searchActive = !this.searchActive;
    }
  },
  computed: {
    activePage() {
      return this.$store.state.activePage;
    },
    searchResultsFoods() {
      // Searches within the foods for a match
      return foods.filter(food =>
        food.name.toLowerCase().includes(this.clientSearchText.toLowerCase())
      );
    },
    searchResultsCategories() {
      // Searches within the foods for a match
      let categories = foods
        .filter(food =>
          food.category.includes(this.clientSearchText.toLowerCase())
        )
        .map(matchedFood => matchedFood.category);

      return [...new Set(categories)];
    }

    // searchResultsTiming() {
    //   // Searches within the foods for a match
    //   return foods
    //     .filter(food =>  food.when_to_eat.filter(timing => timing.includes(this.clientSearchText)))
    //     .map(matchedFood => [matchedFood.when_to_eat, matchedFood.name, matchedFood.category]);
    // }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap");
</style>
