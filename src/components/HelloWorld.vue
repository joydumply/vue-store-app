<script setup>
defineProps({
	msg: {
		type: String,
		required: true,
	},
});
import { computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

const store = useStore();
const usersList = computed(() => store.getters['usersStore/usersList']);

const addUser = () => {
	const newUser = {
		name: 'Ivan',
		age: 25,
	};
	store.dispatch('usersStore/addNewUser', newUser);
};
</script>

<template>
	<div>Helllo</div>
	{{ usersList }}

	<button @click="addUser">Add user</button>
</template>
