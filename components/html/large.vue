<template>
    <component :is="elType" class="text-large">
        <slot ></slot>
    </component>
</template>

<script>
export default {
	name: "large",
	props: ["element"],
	data() {
		return {
			elType: this.$props.element || "span"
		};
	}
};
</script>