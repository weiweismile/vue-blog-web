import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  info: {},
  article: {}, // 当前文章内容
};





const store = new Vuex.Store({
  state,
  mutations
});
export default store;
