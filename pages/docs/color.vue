<template lang="pug">
div
	section
		h1 Color     
		h3 the function `color(Red)`
		p The basic function has more than meets the eye. Essentially it outputs the color you want, taken from the current colorset. 
		h5 arguments
		table
				tr
						td 
								strong value
						td The name of the color
				tr  
						td 
								strong opacity
						td the amount of opacity from 0 to 1. Default: 1
				tr 
						td 
								strong colorset
						td Search for the color in another defined colorset. Default: 'default'
		prism(language="scss",:code="example.function")

	section
		h3 Changing the colorset

	section
		h4 define another colorset
		p The basic function comes with a default colorset. This colorset can ben changed, extended or overwritten by another colorset. This example shows how to define another colorset.
		prism(language="scss",:code="example.defineColorset")

	section
		h4 Add custom colors to the default colorset. 
		p Defining a full new colorset is not always the best options, sometimes you just want to add some colors or overwrite existing colors. 	
		prism(language="scss",:code="example.customColors")

	section
		h4 Set a new custom colorset
		p A fully new colorset can be set also using the same way, instead of a string (name) for the $default-colorset, you pass a map. Make sure this map has atleast 'Black' and 'White' defined, otherwise the colorset will fall back to the default colorset defined in piet
		prism(language="scss",:code="example.customColorset")


</template>
<script>
export default {
	components: {},
	data() {
		return {
			example: {
				function: `
/* Simple */

/* input: */    background-color: color(Red);
/* output: */   background-color: #eb0f33;

/* Opacity */

/* input: */    background-color: color(Red,.5);
/* output: */   background-color: rgba(235, 15, 51, 0.5);

/* Colorset */

/* input: */    background-color: color(Red,1,'vibrant');
/* output: */   background-color: #fe5165;
                `,

				defineColorset: `
/* Define the colorset before the import of @import '~piet' */
$default-color-set: 'vibrant';              
                `,
				customColorset: `
/* Define the colorset before the import of @import '~piet' */
$default-color-set:  (
    'Black': #111111,
    'White': #f7f7f7,
    'myBlue':  #181160,
    'fireRed': #ed1f35
);

/* output '@debug $colors' (after include of piet)
The full colorset is overwritten and all colors are added to the list and can be used in the color() function as color(Black) or color(myBlue); */
DEBUG: ("Black": #111111, "White": #f7f7f7, "myBlue": #181160, "fireRed": #ed1f35)             
                `,

				customColors: `
/* Create a new list and do this  */
$custom-colors: (
    'myBlue':  #181160,
    'fireRed': #ed1f35
);

/* output '@debug $colors' (after include of piet)
The myBlue and fireRed are added on the end of the list and can be used in the color() function as color(myBlue); */
DEBUG: ("Black": #101010, "Dark": #303030, "White": #ffffff, "Offwhite": #f7f7f7, "Green": #10c565, "Blue": #1eb3e0, "Red": #eb0f33, "Brown": #aa834f, "Yellow": #f5c505, "Orange": #f6790b, "Pink": #ca1387, "Purple": #7329b1, "Turquoise": #3feac3, "myBlue": #181160, "fireRed": #ed1f35)
                `
			}
		};
	}
};
</script>
<style lang="scss">
@import "~piet";
</style>