<template>
    <component :is="elType" :class="classes" v-if="input.id && input.name">
        <input type="radio" :id="input.id" :name="input.name" ref="radioButton" @input="updateRadio()" :value="input.value" :selected="selected ? true : false">
        <label :for="input.id" :data-text="text ? text : ''">
            <slot></slot>
        </label>
    </component>
</template>
<script>
export default {
	name: "input-radio",
	props: [
		"id",
		"name",
		"input-value",
		"class-list",
		"element",
		"selected",
		"text"
	],
	data() {
		return {
			input: {
				value: this.$props.inputValue || ""
			},
			classes: this.$props.classList || "input-radio",
			elType: this.$props.element || "div"
		};
	},
	created() {
		if (this.$props.id) {
			this.input.id = this.$props.id;
		} else {
			console.log("Please give the input an ID");
		}
		if (this.$props.name) {
			this.input.name = this.$props.name;
		} else {
			console.log("Please give the input a name");
		}
	},
	methods: {
		updateRadio() {
			this.$emit("input", this.$refs.radioButton.value);
		}
	}
};
</script>
