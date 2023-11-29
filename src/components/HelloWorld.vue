<script setup>
defineProps({
	msg: {
		type: String,
		required: true,
	},
});
import { useStore } from 'vuex';
const store = useStore();
console.log(store.state);
</script>

<template>
	<div>Helllo</div>
</template>
