import Vue from 'vue'
import Vuex from 'vuex'
import foods from "@/assets/foods.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods,
    selected_category: null,
    activePage: null,
    unique_categories: [... new Set(foods.map(food => food.category))] // Get unique categories
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
