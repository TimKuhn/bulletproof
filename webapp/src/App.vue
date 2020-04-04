<template>
  <div id="app">
    <div id="nav" class="fixed bottom-0 flex justify-around antialiased w-full text-gray-600 bg-gray-900 uppercase">
      <router-link to="/foods" :class="{ 'text-red-600': '/foods' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center" >
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class=" pb-2" style="font-size: .5rem;">Foods</div>
        </div>
      </router-link>
      <router-link to="/timing" :class="{ 'text-red-600': '/timing' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class=" pb-2" style="font-size: .5rem;">Timing</div>
        </div>
      </router-link>
      <router-link to="/fooddetail" :class="{ 'text-red-600': '/fooddetail' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class=" pb-2" style="font-size: .5rem;">Food Detail</div>
        </div>
      </router-link>
      <router-link to="/else2" :class="{ 'text-red-600': '/else2' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class=" pb-2" style="font-size: .5rem;">Else</div>
        </div>
      </router-link>
      <router-link to="/else3" :class="{ 'text-red-600': '/else3' == this.$route.fullPath }">
        <div class="px-4 pt-2 text-center">
          <font-awesome-icon icon="clock" class="text-2xl"/>
          <div class=" pb-2" style="font-size: .5rem;">Else</div>
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
