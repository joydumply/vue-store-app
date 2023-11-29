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
		users: ({ list }) => Object.values(list),
	},
	mutations: {},
	actions: {},
};

export default usersStore;
