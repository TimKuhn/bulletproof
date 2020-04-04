import Vue from 'vue'
import Vuex from 'vuex'
import foods from "@/assets/foods.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods,
    selected_category: "Beverages",
    activePage: null,
    unique_categories: [... new Set(foods.map(food => food.category))], // Get unique categories
    health_level_to_color: {
      8: "text-green-700",
      7: "text-green-500",
      6: "text-green-300",
      5: "text-yellow-200",
      4: "text-yellow-400",
      3: "text-orange-200",
      2: "text-orange-400",
      1: "text-red-500"
    }
  },
  mutations: {
    selectCategory(state, category){
      state.selected_category = category
    }
  },
  actions: {
    selectCategory(context, category){
      context.commit('selectCategory', category)
    }
  },
  modules: {
  }
})
