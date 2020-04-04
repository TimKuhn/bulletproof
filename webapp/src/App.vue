<template>
  <div id="app">
    <div id="nav" class="fixed bottom-0 flex justify-around antialiased border-t w-full text-gray-600 bg-gray-100 uppercase">
      <router-link to="/foods" :class="{ 'text-red-600': '/foods' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center" >
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class="text-xs pb-2">Foods</div>
        </div>
      </router-link>
      <router-link to="/timing" :class="{ 'text-red-600': '/timing' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class="text-xs pb-2">Timing</div>
        </div>
      </router-link>
      <router-link to="/else1" :class="{ 'text-red-600': '/else1' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class="text-xs pb-2">Else</div>
        </div>
      </router-link>
      <router-link to="/else2" :class="{ 'text-red-600': '/else2' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class="text-xs pb-2">Else</div>
        </div>
      </router-link>
      <router-link to="/else3" :class="{ 'text-red-600': '/else3' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class="text-xs pb-2">Else</div>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return{
      stuff: this.$route
    }
  },
  computed:{
    activePage(){
      return this.$store.state.activePage
    }
  }
}
</script>
<style>
</style>
