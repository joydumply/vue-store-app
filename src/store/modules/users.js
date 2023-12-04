const usersStore = {
	namespaced: true,
	state: {
		list: {
			1: {
				name: 'Nikita',
				age: 27,
			},
		},
	},
	getters: {
		usersList: (state) => Object.values(state.list),
	},
	mutations: {
		ADD_USER(state, user) {
			state.list[user.id] = user; // работает на Vue 3 но не Vue 2
			//Vue.set(state.list, user.id, user); /*  работает на Vue 2 / не работает на Vue 3 */
		},
	},
	actions: {
		addNewUser({ commit }, user) {
			const newUser = { ...user, id: String(Math.random()) };
			commit('ADD_USER', newUser);
		},
	},
};

export default usersStore;
