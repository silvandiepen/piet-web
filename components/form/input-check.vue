<template>
	<component :is="elType" :class="classes" v-if="input.id && input.name" :style="colorStyle">
		<input :type="inputType" :id="input.id" :name="input.name" ref="checkButton" @input="updateCheck()" :value="input.value" :selected="selected ? true : false">
		<label :for="input.id" :data-text="text ? text : ''">
			<slot></slot>
		</label>
	</component>
</template>
<script>
export default {
	name: "input-checkbox",
	props: [
		"id",
		"name",
		"input-value",
		"class-list",
		"element",
		"selected",
		"text",
		"type",
		"color",
		"icon",
		"label",
		"multi"
	],
	data() {
		return {
			colorStyle: "",
			inputType: "",
			input: {
				value: this.$props.inputValue || ""
			},
			classes: [],
			elType: this.$props.element || "div"
		};
	},
	created() {
		if (this.$props.classList) {
			this.classes.add(this.$props.classList);
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
		if (this.$props.type) {
			// console.log(this.classes);
			this.classes.push(`input--check-${this.$props.type}`);
			if (this.$props.type == "icon") {
				if (this.$props.icon) {
					this.classes.push(`input--check-icon--${this.$props.icon}`);
				}
			}
			if (this.$props.type == "color") {
				if (this.$props.color) {
					this.classes.push(`input--check-color--${this.$props.color}`);
					this.colorStyle = `--check-color: ${this.$props.color}`;
				}
			}
		} else {
			if (this.$props.multi) {
				this.classes.push(`input--checkbox`);
			} else {
				this.classes.push(`input--radio`);
			}
		}
		if (this.$props.multi) {
			this.inputType = "checkbox";
		} else {
			this.inputType = "radio";
		}

		if (this.$props.label) {
			this.classes.push("input--check--nolabel");
		}
	},
	methods: {
		updateCheck() {
			this.$emit("input", this.$refs.checkButton.value);
		}
	}
};
</script>
