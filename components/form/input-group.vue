<template> 
    <component :is="elType" class="input-group">
        <slot></slot>
    </component>
</template>
<script>
export default {
	props: ["element"],
	data() {
		return {
			elType: this.$props.element || "div"
		};
	}
};
</script>
