// import './assets/main.css';

import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import usersStore from './store/modules/users';

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

const app = createApp(App);
app.use(store);
app.mount('#app');
