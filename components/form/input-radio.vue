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
		"text",
		"category",
		"color",
		"icon",
		"nolabel"
	],
	data() {
		return {
			input: {
				value: this.$props.inputValue || ""
			},
			classes: [],
			elType: this.$props.element || "div"
		};
	},
	created() {
		if (this.$props.classList) {
			this.classes.add(this.$proprs.classList);
		}
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
		if (this.$props.category) {
			// console.log(this.classes);
			this.classes.push(`input--check-${this.$props.category}`);
			if (this.$props.category == "icon") {
				if (this.$props.icon) {
					this.classes.push(`input--check-icon--${this.$props.icon}`);
				}
			}
			if (this.$props.category == "color") {
				if (this.$props.color) {
					this.classes.push(`input--check-color--${this.$props.color}`);
				}
			}
		}
		if (this.$props.nolabel) {
			console.log("hoiii");
			this.classes.push("input--check--nolabel");
		}
	},
	methods: {
		updateRadio() {
			this.$emit("input", this.$refs.radioButton.value);
		}
	}
};
</script>
