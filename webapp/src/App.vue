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
        </div>
      </div>
      <!-- SEARCH END -->
      <!-- SEARCH RESULTS -->
      <div
        v-if="clientSearchText"
        class="z-20 bg-gray-100"
      >
        <section v-if="searchResultsFoods" id="foodResults" class="flex pt-6 pb-2">
          <div class="font-semibold w-1/2 pl-4">Foods</div>
          <ul class="w-1/2">
            <li v-for="result in searchResultsFoods" :key="result" class="relative h-10">
              <a class="absolute w-full h-full right-0 top-0" :href="`/fooddetail/${result}`">{{result}}</a>
            </li>
          </ul>
        </section>
        <!-- <section v-if="searchResultsTiming" id="timingResults" class="flex border-t pt-4 pb-2">
          <div class="font-semibold w-1/2 pl-4">Timing</div>
          <ul class="w-1/2">
            <li v-for="result in searchResultsTiming" :key="result" class="pb-2">
              <div>{{result}}</div>
            </li>
          </ul>
        </section> -->
      </div>
      <!-- SEARCH RESULTS END-->

      <!-- OVERLAY -->
      <div
        v-if="searchActive"
        class="w-full z-10 h-screen bg-gray-300 opacity-75"
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
      return foods
        .filter(food => food.name.toLowerCase().includes(this.clientSearchText.toLowerCase()))
        .map(matchedFood => matchedFood.name);
    },
    searchResultsCategories() {
      // Searches within the foods for a match
      let categories = foods
        .filter(food => food.category.includes(this.clientSearchText.toLowerCase()))
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
