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
</script>

<template>
	<div>Helllo</div>
	{{ usersList }}
</template>
