<template>
	<div class="page-features page">
		<column-example/>
		<button-generator />
	</div>
</template>

<script>
import columnExample from "~/components/column-example.vue";
import buttonGenerator from "~/components/button-generator.vue";
export default {
	components: {
		columnExample,
		buttonGenerator
	}
};
</script>
