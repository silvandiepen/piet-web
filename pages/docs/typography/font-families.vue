<template lang="pug">
div
	section.basic#fonts
		row(center)
			column(medium="4:5",large="3:4")
				h1 Font families
				p All font families provided by Google and FontSquirrel can be used in the set by defining a few variables before loading the svd style.
				hr 
				fieldset
					label Choose your family
					select(v-if="fontList", v-model="current.font")
						option -- browser default
						option(v-for="font in fontList", :value="font") {{font.family}}
				example(v-if="loaded.font")
					h2(:style="current.style") {{current.font.family}}
	section.basic#typography(v-if="loaded.font")
		row(center,medium="4:5",large="3:4")
			column
				h3 example		
				form
					label Change the heading text:
					input.input--ghost(type="text",v-model="headingText")
				hr
			column
				h1(:style="current.style") Aa
			column
				p(:style="current.style") abcdefghijklmnopqrstuvwxyz
				p(:style="current.style") ABCDEFGHIJKLMNOPQRSTUVWXYZ
				p(:style="current.style") 1234567890!@#$%ˆ*()
			column
				h1(:style="current.style", data-label="h1") {{ headingText }}
				h2(:style="current.style", data-label="h2") {{ headingText }}
				h3(:style="current.style", data-label="h3") {{ headingText }}
				h4(:style="current.style", data-label="h4") {{ headingText }}
				h5(:style="current.style", data-label="h5") {{ headingText }}
				h6(:style="current.style", data-label="h6") {{ headingText }}
				p(:style="current.style", data-label="p") Quisque elementum diam ligula, nec fringilla dui vulputate in. Donec sagittis ullamcorper maximus. Sed sed pulvinar lorem, nec luctus mi. Pellentesque sit amet fringilla lacus. Suspendisse vulputate varius augue, in vestibulum mauris. Donec risus velit, accumsan vel purus ut, cursus pulvinar neque. Fusce maximus, ante sit amet auctor feugiat, mi eros facilisis massa, quis bibendum magna leo vitae ligula. Donec tristique felis orci, vitae vehicula sapien pulvinar in. In tincidunt scelerisque tellus, a tempus mi mattis consequat.
	code-section(v-if="current.font && loaded.font", :code="example.embed",lang="css")

</template>

<style lang="scss">
@import "~piet";
.current-font-family {
	font-family: serif;
}
.column {
	p {
		font-family: inherit;
	}
}
</style>

<script>
import axios from "axios";
export default {
	data() {
		return {
			fontList: null,
			loaded: {
				fontList: false,
				font: false
			},
			current: {
				font: [],
				style: "",
				fontFace: `@font-face {
					font-family: myFirstFont;
					src: url(sansation_light.woff);
				}`
			},
			headingText: "The quick brown fox jumps over the lazy dog",
			example: {
				embed: `test`
			}
		};
	},
	methods: {
		getGoogleFonts: function() {
			let _this = this;
			axios
				.get(
					`https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=AIzaSyAWyud3AdQjEo_nEcFvlWjdnbvURLak_FM`
				)
				.then(response => {
					_this.fontList = response.items;
				})
				.catch(error => {
					console.log(error);
				});
		},
		setStyle: function() {
			let _this = this;
			let font = _this.current.font;

			let fontFiles = font.files.regular.replace("http:", "");

			// console.log(font.files.regular);
			// console.log(fontFiles);
			// Load a new fontface
			let newFontFace = new FontFace(font.family, `url(${fontFiles})`);
			// Actually add the font
			document.fonts.add(newFontFace);

			// When the is loaded
			newFontFace.loaded.then(function() {
				_this.loaded.font = true;
			});

			// set new fontstyle to "current font items"
			_this.current.style = {
				fontFamily: font.family
			};

			_this.loaded.font = true;
			// Set it to code
			_this.example.embed = `
$main-font-family: '${this.current.font.family}';
$main-font-family-url: '${this.current.font.files.regular}';
`;
		}
	},
	created() {
		let _this = this;
		_this.getGoogleFonts();
	},
	watch: {
		fontList: {
			handler() {
				this.loaded.fontList = true;
			}
		},
		"current.font": {
			handler() {
				this.setStyle();
			}
		}
	}
};
</script>