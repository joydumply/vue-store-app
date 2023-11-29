import { createStore } from 'vuex';

import usersStore from './modules/users';
const store = createStore({
	state() {
		return {
			count: 0,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	modules: {
		usersStore,
	},
});
export default store;
