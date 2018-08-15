<template>
	<div class="input--field" :class="classes">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ["type"],
	data() {
		return {
			classes: []
		};
	},
	created() {
		if (this.$props.type) {
			this.classes.push(`input--${this.$props.type}`);
		}
	}
};
</script>