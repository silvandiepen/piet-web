<template>
    <component :is="element" :class="classes" v-if="input.id">
        <input type="checkbox" :id="input.id" :name="input.name" ref="checkButton" @input="updateCheck()" :value="input.value">
        <label :for="input.id">
            <slot></slot>
        </label>
    </component>
</template>
<script>
export default {
	name: "input-checkbox",
	props: ["id", "name", "input-value", "element"],
	data() {
		return {
			input: {
				name: this.$props.name || "",
				value: this.$props.inputValue || ""
			},
			elType: this.$props.element || "div",
			classes: this.$props.classList || "input-checkbox"
		};
	},
	created() {
		if (this.$props.id) {
			this.input.id = this.$props.id;
		} else {
			console.log("Please give the input an ID");
		}
	},
	methods: {
		updateCheck() {
			console.log(this.$refs.checkButton);
			this.$emit("input", this.$refs.checkButton.checked);
		}
	}
};
</script>
