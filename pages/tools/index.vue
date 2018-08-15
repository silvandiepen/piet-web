<template>
	<div class="page-features page">
		<button-generator />
	</div>
</template>

<script>
import buttonGenerator from "~/components/button-generator.vue";
export default {
	layout: "full",
	components: {
		buttonGenerator
	}
};
</script>
