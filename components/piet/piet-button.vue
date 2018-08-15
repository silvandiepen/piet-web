<template>
	<component :is="el" class="button" :class="buttonClasses">{{ default.buttonText }}</component>
</template>
<script>
export default {
	props: [
		"el",
		"icon",
		"text",
		"color",
		"size",
		"shape",
		"icon-only",
		"icon-position",
		"bold",
		"italic",
		"uppercase",
		"lowercase",
		"border"
	],
	data() {
		return {
			default: {
				buttonText: "Button"
			},
			buttonStyle: "",
			buttonClasses: []
		};
	},
	created() {
		// Check if the element should have another element type.
		this.el = this.$props.el || "button";

		// Check if the element has an icon.
		if (this.$props.icon) {
			this.buttonClasses.add(`button-icon--${this.$props.icon}`);
			// If the button has an icon, it can also have other modifiers.
			// Button only
			if (this.$props.iconOnly) {
				this.buttonClasses.add(`button-icon--only`);
			}
			// Button position
			if (this.$props.iconPosition) {
				if (
					this.$props.iconPosition === "left" ||
					this.$props.iconPosition === "right"
				) {
					this.buttonClasses.add(`button-icon--${this.$props.iconPosition}`);
				}
			}
		}
		// Set the button shape
		if (this.$props.shape) {
			this.buttonClasses.add(`button--${this.$props.shape}`);
		}

		// Set the button shape
		if (this.$props.color) {
			if (this.isHexaColor(this.$props.color)) {
				this.buttonStyle = `--button-color: ${this.$props.color}`;
			} else {
				this.buttonClasses.add(`button--${this.$props.shape}`);
			}
		}

		// Set the button size
		if (this.$props.size) {
			this.buttonClasses.add(`button--${this.$props.size}`);
		}

		// Simple checks:
		// Bold?
		if (this.$props.bold) {
			this.buttonClasses.add(`.button--bold`);
		}
		// Italic?
		if (this.$props.italic) {
			this.buttonClasses.add(`.button--italic`);
		}
		// Uppercase?
		if (this.$props.uppercase) {
			this.buttonClasses.add(`.button--uppercase`);
		}
		// Lowercase?
		if (this.$props.lowercase) {
			this.buttonClasses.add(`.button--lowercase`);
		}
		// Capitalized?
		if (this.$props.capitalized) {
			this.buttonClasses.add(`.button--capitalized`);
		}
	},
	methods: {
		isColor: function(val){
			if(this.isHexaColor(val) || this.isRgbColor(val)){
				return  true; 
			}
		},
		isHexaColor: function(val) {
			if(typeof val === "string" && val.length === 6 && !isNaN(parseInt(val, 16))){
					return true; 
			} else if (typeof val === "string" && val.length === 7 && val.charAt(0) == '#') {
					return true; 
			} else {
				return false;
			}
		
		}
		isHexaColor: function(sNum) {
			return (
				typeof sNum === "string" &&
				sNum.length === 6 &&
				!isNaN(parseInt(sNum, 16))
			);
		}
	}
};
</script>