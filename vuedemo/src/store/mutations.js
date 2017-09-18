import types from './type.js'

const mutations = {
	[types.INIT_DATA](state){
		state.itemNum = '1';
		state.score = 0;
	}
}
export default mutations;