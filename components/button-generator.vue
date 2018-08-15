
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
		div.generator__code(v-if="example.createdButton.length > 0")
			prism(:code="example.createdButton")
		div.generator__tools
			form 
				details(open)
					summary Standard options
					fieldset
						input-field
							label Text
							input(type="text", v-model="generatedButton.text")
					
						input-field
							label Size
							ul.iconList
								input-check#size-small(
									element="li",
									v-model="generatedButton.size", 
									name="generated-button-size", 		
									type="text",		 								
									label="false",
									input-value="small") 
										small Small
								input-check#size-normal(
									element="li",
									v-model="generatedButton.size", 
									name="generated-button-size", 			
									type="text",		 							
									label="false",
									input-value="",
									selected) Normal
								input-check#size-large(
									element="li",
									v-model="generatedButton.size",
									type="text",		 
									name="generated-button-size", 								
									label="false",
									input-value="large") 
										large Large
					

				details(open)
					summary Borders
					fieldset
						input-check#button-border(multi,v-model="generatedButton.border.show") Border
												
						div(v-if="generatedButton.border.show")
						
							input-field
								label Color 
								ul.colorList
									input-check(
										v-for="colorvalue, colorname in colors",
										v-model="generatedButton.border.color", 
										element="li",
										name="generated-border-color", 	
										type="color",							
										:color="colorname",
										:key="colorname",
										:id="['color-'+colorname]", 
										:input-value="colorname") {{colorname}}
									
							input-field
								label Style 
								select(v-model="generatedButton.border.style")
									option(value="solid",selected) Solid
									option(value="dotted") Dotted
									
							input-field
								label Width
								input(type="range",v-model="generatedButton.border.width", min="0", max="20")


							
				details(open)
					summary Icon
					fieldset
						ul.iconList
							input-check(
								:id="no-icon", name="generated-button-icon", 
								type="icon",
								icon="none",
								v-model="generatedButton.icon", 
								input-value="",
								label="false")
							input-check(
								v-for="iconvalue, iconname in icons",
								v-model="generatedButton.icon", 
								element="li",
								name="generated-button-icon", 				
								label="false",
								type="icon",
								:icon="iconname",
								:key="iconname",
								:id="['icon-'+iconname]", 
								:input-value="iconname") {{iconname}}

						
						
						.extra(v-if="generatedButton.icon !== ''")
							input-field
								label Icon Position
								input-group
									input-check#icon-left(
										v-model="generatedButton.iconPosition", 
										name="generated-button-position", 		
										type="icon",						
										icon="arrow-left",
										label="false",
										input-value="left") Left
									input-check#icon-right(
										v-model="generatedButton.iconPosition", 
										name="generated-button-position", 		
										type="icon",							
										icon="arrow-right",
										label="false",
										input-value="right") Right

							input-field
								input-check#icon-only(multi,v-model="generatedButton.iconOnly") Icon only

				details(open)
					summary Background Color
					fieldset
						label 
						ul.colorList
							input-check(
								v-for="colorvalue, colorname in colors",
								v-model="generatedButton.color", 
								element="li",
								:style="`--check-color: ${colorvalue};`"
								name="generated-button-color", 								
								type="color",
								:color="colorname",
								:key="colorname",
								:id="['icon-'+colorname]", 
								:input-value="colorname") {{colorname}}

				details(open)
					summary misc.
					fieldset 
						input-field
							label Rounded
							select(v-model="generatedButton.shape")
								option(value="",selected) Normal
								option(value="hard") Hard
								option(v-if="!generatedButton.iconOnly", value="round") Round
								option(value="rounded") Rounded

						input-field(type="range")
							label Rotated
							input(type="range",v-model="generatedButton.rotation", min="0", max="360", step="45")
	
						input-field
							label Text transform
							select(v-model="generatedButton.textTransform")
								option(value="") none
								option(value="capitalized") Capitalized
								option(value="uppercase") UPPERCASE
								option(value="lowercase") lowercase
							
						input-field
							label font style
							input-group
								input-check#font-bold(multi,v-model="generatedButton.fontBold") Bold
								input-check#font-italic(multi,v-model="generatedButton.fontItalic") Italic

		//- code-section.generator__code(:code="example.createdButton",lang="html")
</template>
<script>
import colorData from "piet/data/colors-vibrant.json";
import buttonData from "piet/data/button.json";
import iconBasic from "piet/data/iconset-basic.json";
import Large from "~/components/html/large.vue";

export default {
	components: {
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
@import "~piet";
.button-example {
	button {
		transition: 0.2s;
	}
}
.generator {
	&__example {
		// grid-area: preview;
	}
	&__content {
		width: 100%;
		height: 100%;
		max-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
	}
	&__tools {
		form {
			display: flex;
			flex-flow: nowrap;
			overflow: auto;
			padding: grid(1 2 2 2);
			details {
				box-shadow: grid(0.25) grid(0.5) grid(2) 0 color(Black, 0.1),
					0px 3px 0 0 color(Black, 0.05);
				min-width: 320px;
				margin: 0 1rem;
			}
		}
	}
	&__code {
		padding: grid(1 2);
	}
}
.colorList {
	column-count: 2;
	li {
		display: block;
	}
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
	background-color: $color-light;
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