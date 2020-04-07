<template>
  <div id="app">
    <!-- SEARCH -->
    <div v-if="search">
      <div class="fixed w-full top-0 z-20 mx-auto">
        <input type="text" class="text-sm tracking-wide pl-4 w-full h-12 focus:outline-none" placeholder="Search for foods, descriptions and so on...">
      </div>
    </div>
    <div v-if="search" class="fixed w-full z-10 min-h-screen bg-gray-300 opacity-75" @click="search = !search">
    </div>
    <!-- SEARCH END -->
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
      <div @click="search = !search">
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
export default {
  data() {
    return {
      stuff: this.$route,
      search: false
    };
  },
  computed: {
    activePage() {
      return this.$store.state.activePage;
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap");
</style>
