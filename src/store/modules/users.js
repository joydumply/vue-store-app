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
	mutations: {},
	actions: {},
};

export default usersStore;
