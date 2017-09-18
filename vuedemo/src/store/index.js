import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
	level:"第一周",//第几周
	itemNum:"",//第几题
	score:"",//分数
	itemDetail:[]
	
}

var store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});

export default store;
