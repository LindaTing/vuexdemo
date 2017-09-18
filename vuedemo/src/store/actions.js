import axios from 'axios'
const actions = {
	/*获取题目数据*/
	getItemData(){
		axios.post("./data.json").then(res => {
			return res;
		}).catch(err => {
			alert(err);
		})
	},
	/*初始化数据*/
	initItemData({commit}){
		commit('INIT_DATA');
	}
}
export default actions;