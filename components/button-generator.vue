
<template lang="pug">
div.generator
		div.generator__example
			div.generator__content
				div.button-example
					//- example
					button(v-if="generatedButton.shape !== 'round'",:class="createdButtonClasses") {{ generatedButton.text }} 
					button(v-if="generatedButton.shape === 'round'",:class="createdButtonClasses") 
						span
							span {{ generatedButton.text }} 
	   
		div.generator__tools
			form 
				details(open)
					summary Standard options
					fieldset
						label Text
						input(type="text", v-model="generatedButton.text")
					
						label Size
						//- select(v-model="generatedButton.size")
						//- 	option(value="small") Small
						//- 	option(value="",selected) Normal
						//- 	option(value="large") Large
						
						ul.iconList
							input-radio#size-small(
								element="li",
								v-model="generatedButton.size", 
								name="generated-button-size", 										
								class-list="input-check--nolabel input-check-text",
								input-value="small") 
									small Small
							input-radio#size-normal(
								element="li",
								v-model="generatedButton.size", 
								name="generated-button-size", 										
								class-list="input-check--nolabel input-check-text",
								input-value=""
								selected) Normal
							input-radio#size-large(
								element="li",
								v-model="generatedButton.size", 
								name="generated-button-size", 								
								class-list="input-check--nolabel input-check-text",
								input-value="large") 
									large Large
					

				details(open)
					summary Borders
					fieldset
						input-checkbox#button-border(v-model="generatedButton.border.show") Border
												
						div(v-if="generatedButton.border.show")
							label Color 
							ul.colorList
								input-radio(
									v-for="colorvalue, colorname in colors",
									v-model="generatedButton.border.color", 
									element="li",
									name="generated-border-color", 								
									:class-list="['input-check-color--'+colorname]",
									:key="colorname",
									:id="['color-'+colorname]", 
									:input-value="colorname") {{colorname}}
						
							label Style 
							select(v-model="generatedButton.border.style")
								option(value="solid",selected) Solid
								option(value="dotted") Dotted

							label Width
							input(type="range",v-model="generatedButton.border.width", min="0", max="20")


							
				details(open)
					summary Icon
					fieldset
						ul.iconList
							input-radio(:classes="['input-check--nolabel','input-check-icon--none']",:id="no-icon", name="generated-button-icon", v-model="generatedButton.icon", input-value="") &nbsp;
							input-radio(
								v-for="iconvalue, iconname in icons",
								v-model="generatedButton.icon", 
								element="li",
								name="generated-button-icon", 								
								:class-list="['input-check--nolabel','input-check-icon--'+iconname]",
								:key="iconname",
								:id="['icon-'+iconname]", 
								:input-value="iconname") {{iconname}}

						
						
						.extra(v-if="generatedButton.icon !== ''")
							div
								label Icon Position
								input-group
									input-radio#icon-left(
										v-model="generatedButton.iconPosition", 
										name="generated-button-position", 								
										:class-list="['input-check--nolabel','input-check-icon--arrow-left']",
										input-value="left") Left
									input-radio#icon-right(
										v-model="generatedButton.iconPosition", 
										name="generated-button-position", 								
										:class-list="['input-check--nolabel','input-check-icon--arrow-right']",
										input-value="right") Right

							div
								input-checkbox#icon-only(v-model="generatedButton.iconOnly") Icon only

				details(open)
					summary Background Color
					fieldset
						label 
						ul.colorList
							input-radio(
								v-for="colorvalue, colorname in colors",
								v-model="generatedButton.color", 
								element="li",
								name="generated-button-color", 								
								:class-list="['input-check-color--'+colorname]",
								:key="colorname",
								:id="['icon-'+colorname]", 
								:input-value="colorname") {{colorname}}

				details(open)
					summary misc.
					fieldset 
						label Rounded
						select(v-model="generatedButton.shape")
							option(value="",selected) Normal
							option(value="hard") Hard
							option(v-if="!generatedButton.iconOnly", value="round") Round
							option(value="rounded") Rounded

						label Rotated
						input(type="range",v-model="generatedButton.rotation", min="0", max="360", step="45")

						label Text transform
						input-group
							input-radio#irtt-none(name="text-transform", v-model="generatedButton.textTransform", input-value="none") none
							input-radio#irtt-capitalized(name="text-transform", v-model="generatedButton.textTransform", input-value="capitalized") Capitalized
							input-radio#irtt-uppercase(name="text-transform", v-model="generatedButton.textTransform", input-value="uppercase") UPPERCASE
							input-radio#irtt-lowercase(name="text-transform", v-model="generatedButton.textTransform", input-value="lowercase") lowercase

						label font style
						input-group
							input-checkbox#font-bold(v-model="generatedButton.fontBold") Bold
							input-checkbox#font-italic(v-model="generatedButton.fontItalic") Italic
		pre(v-highlightjs="example.createdButton")
		//- code-section.generator__code(:code="example.createdButton",lang="html")
</template>
<script>
import colorData from "piet/data/colors-vibrant.json";
import buttonData from "piet/data/button.json";
import iconBasic from "piet/data/iconset-basic.json";
import InputCheckbox from "~/components/form/input-checkbox.vue";
import InputRadio from "~/components/form/input-radio.vue";
import InputGroup from "~/components/form/input-group.vue";
import Large from "~/components/html/large.vue";

export default {
	components: {
		InputRadio,
		InputCheckbox,
		InputGroup,
		Large
	},
	data() {
		return {
			button: null,
			icon: null,
			generatedButton: {
				text: "Default button",
				color: "",
				size: "",
				icon: "",
				shape: "",
				iconOnly: false,
				iconPosition: "",
				rounded: false,
				fontBold: false,
				fontBold: false,
				textTransform: "",
				border: {
					show: false,
					color: "",
					width: "2px",
					style: "solid"
				}
			},
			createdButtonClasses: "",
			colors: colorData.color.vibrant[0],
			example: {
				createdButton: "",
				sizedButton: `
<!-- Large button -->
<button class="button--large">Large button</button>
	<!-- or -->
	<a class="button button--large">Large button</a>
	
<!-- Normal button -->
<button class="button--medium">Normal button</button>
	<!-- or -->
	<a class="button button--medium">Normal button</a>

<!-- Small button -->
<button class="button--small">Small button</button>
	<!-- or -->
	<a class="button button--small">Small button</a>`,
				roundedButton: `
<!-- Rounded button -->
<button class="button--rounded">Rounded button</button>
	<!-- or -->
	<a class="button button--rounded">Rounded button</a>
	

<!-- Round button -->
<button class="button--round">
	<span>
		<span>Round button</span>
	</span>
</button>
	<!-- or -->
	<a class="button button--round">	
		<span>
			<span>Round button</span>
		</span>
	</a>`,
				coloredButton: `
<!-- Colored button -->
<button class="button--Red">Red button</button>
	<!-- or -->
	<a class="button button--Blue">Blue button</a>`
			}
		};
	},
	methods: {
		generateButtonClasses() {
			let _this = this;
			let classes = [];
			// Check icon
			if (_this.generatedButton.icon !== "") {
				classes.push("button-icon--" + _this.generatedButton.icon);
				// Check iconPosition
				if (_this.generatedButton.iconPosition !== "") {
					classes.push("button-icon--" + _this.generatedButton.iconPosition);
				}
				// Check iconOnly
				if (_this.generatedButton.iconOnly) {
					classes.push("button-icon--only");
				}
			}
			// Check color
			if (_this.generatedButton.color !== "") {
				classes.push("button--" + _this.generatedButton.color);
			}
			// Check size
			if (_this.generatedButton.size !== "") {
				classes.push("button--" + _this.generatedButton.size);
			}
			// Check shape
			if (_this.generatedButton.shape !== "") {
				classes.push("button--" + _this.generatedButton.shape);
			}
			// Check rotation
			if (_this.generatedButton.rotation > 0) {
				classes.push("button--" + _this.generatedButton.rotation + "deg");
			}
			// Check textTransform
			if (_this.generatedButton.textTransform !== "") {
				classes.push("button--" + _this.generatedButton.textTransform);
			}
			// Check fontBold
			if (_this.generatedButton.fontBold) {
				classes.push("button--bold");
			}
			// Check fontBold
			if (_this.generatedButton.fontItalic) {
				classes.push("button--italic");
			}

			// Check border
			if (_this.generatedButton.border.show) {
				classes.push("button--border");

				if (_this.generatedButton.border.width) {
					classes.push(
						"button__border-width-" + _this.generatedButton.border.width
					);
				}
				if (_this.generatedButton.border.style) {
					classes.push(
						"button__border-style-" + _this.generatedButton.border.style
					);
				}
				if (_this.generatedButton.border.color) {
					classes.push(
						"button__border-color--" + _this.generatedButton.border.color
					);
				}
			}

			// console.log(classes);
			_this.createdButtonClasses = classes;

			if (_this.generatedButton.shape !== "round") {
				this.example.createdButton = `
<button class="${classes.join(" ")}">${this.generatedButton.text}</button>`;
			} else {
				this.example.createdButton = `
<button class="${classes.join(" ")}">
	<span>
		<span>${this.generatedButton.text}</span>
	</span>
</button>`;
			}
		}
	},
	created() {
		// console.log(buttonData);
		this.button = buttonData.button;
		this.icons = iconBasic.iconset.basic[0];
	},
	watch: {
		generatedButton: {
			handler: function(val, oldVal) {
				this.generateButtonClasses();
				this.example.generatedButton = `<button></button>`;
			},
			deep: true
		}
	}
};
</script>
<style lang="scss">
@import "~svd-style/ext";
.button-example {
	button {
		transition: 0.2s;
	}
}
.generator {
	display: grid;
	grid-template-areas:
		"preview preview tools"
		"code code code";
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	&__example {
		grid-area: preview;
	}
	&__content {
		width: 100%;
		height: 100%;
		max-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__tools {
		grid-area: tools;
		padding: 1rem;
		padding-bottom: grid(1);
	}
	&__code {
		grid-area: code;
		// grid-column: 1;
		grid-row: 2;
	}
}
.colorList {
	column-count: 3;
}
.iconList {
	padding: 1rem 0;
	li {
		display: inline-block;
		label:before {
			top: 0;
		}
	}
}

details {
	background-color: color(Blue, 0.25);
	border-radius: 0.5rem;
	padding: 1rem;
	.extra {
		background-color: color(Purple, 0.25) !important;
		// color: white;
		margin: 0 -1rem -1rem -1rem;
		border-radius: 0 0 0.5rem 0.5rem;
	}
}
</style>