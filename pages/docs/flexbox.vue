<template lang="pug">
div
    section.basic#flexbox
        div.row.center
            div.column.small-full.medium-four-fifth.large-three-quarter  
                h1 Flexbox
                h4 The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").
                p The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.
                p Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).
                p Note: Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.
    hr 
    row
        column(xxxlarge="half")
            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h2 Parental properties
                        h3 display
                        p This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.
            
            code-section(:code="example.display", lang="css")


            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex-direction
                        p This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
                        dl
                            dt row
                            dd <span class="default">default</span>: left to right in <code>ltr</code>; right to left in <code>rtl</code>
                            dt row-reverse
                            dd right to left in <code>ltr</code>; left to right in <code>rtl</code>
                            dt column
                            dd same as row but top to bottom
                            dt column-reverse
                            dd same as row-reverse but bottom to top
                                
            .example(class="row small-full large-half")
                code-section(class="column", :code="example.flexDirection", lang="css")
                .preview.column

                    h5 row
                    div(style="display: flex; flex-direction: row")
                        div.block
                        div.block
                        div.block

                    h5 row-reverse
                    div(style="display: flex; flex-direction: row-reverse")
                        div.block
                        div.block
                        div.block

                    h5 column
                    div(style="display: flex; flex-direction: column")
                        div.block
                        div.block
                        div.block

                    h5 column-reverse
                    div(style="display: flex; flex-direction: column-reverse")
                        div.block
                        div.block
                        div.block

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex-wrap
                        p By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
                        dl 
                            dt nowrap
                            dd <span class="default">default</span> all flex items will be on one line
                            dt wrap
                            dd flex items will wrap onto multiple lines, from top to bottom.
                            dt wrap-reverse
                            dd flex items will wrap onto multiple lines from bottom to top.
            .example(class="row small-full large-half")
                code-section(class="column", :code="example.flexWrap", lang="css")
                .preview.column
                    h5 nowrap
                    div(style="display: flex; flex-wrap: nowrap")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                    h5 wrap
                    div(style="display: flex; flex-wrap: wrap")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                    h5 wrap-reverse
                    div(style="display: flex; flex-wrap: wrap-reverse")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex-flow
                        p This is a shorthand <code>flex-direction</code> and <code>flex-wrap</code> properties, which together define the flex container's main and cross axes. Default is row nowrap. 
                        dl 
                            dt nowrap
                            dd <span class="default">default</span> all flex items will be on one line
                            dt wrap
                            dd flex items will wrap onto multiple lines, from top to bottom.
                            dt wrap-reverse
                            dd flex items will wrap onto multiple lines from bottom to top.
            code-section(class="column", :code="example.flexFlow", lang="css")
        
            
            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 justify-content
                        p This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. 
                        dl 
                            dt flex-start
                            dd <span class="default">default</span> items are packed toward the start line
                            dt flex-end
                            dd items are packed toward to end line
                            dt center
                            dd items are centered along the line
                            dt space-between
                            dd items are evenly distributed in the line; first item is on the start line, last item on the end line
                            dt space-around
                            dd items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
                            dt space-evenly
                            dd items are distributed so that the spacing between any two items (and the space to the edges) is equal.
            .example(class="row small-full large-half")
                code-section(class="column", :code="example.justifyContent", lang="css")
                .preview.column
                    h5 flex-start
                    div(style="display: flex; justify-content: flex-start")
                        div.block
                        div.block
                        div.block
                    h5 flex-end
                    div(style="display: flex; justify-content: flex-end")
                        div.block
                        div.block
                        div.block
                    h5 center
                    div(style="display: flex; justify-content: center")
                        div.block
                        div.block
                        div.block

                    h5 space-between
                    div(style="display: flex; justify-content: space-between")
                        div.block
                        div.block
                        div.block
                    h5 space-around
                    div(style="display: flex; justify-content: space-around")
                        div.block
                        div.block
                        div.block
                    h5 space-evenly
                    div(style="display: flex; justify-content: space-evenly")
                        div.block
                        div.block
                        div.block


            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 align-items
                        p This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
                        dl 
                            dt stretch
                            dd <span class="default">default</span> stretch to fill the container (still respect min-width/max-width)
                            dt flex-start
                            dd cross-start margin edge of the items is placed on the cross-start line
                            dt flex-end
                            dd items are packed toward to end line
                            dt center
                            dd items are centered along the line
                            dt baseline
                            dd items are aligned such as their baselines align
            .example(class="row small-full large-half")
                code-section(class="column", :code="example.alignItems", lang="css")
                .preview.column

                    h5 stretch
                    div.align-items(style="display: flex; align-items: stretch")
                        div.block
                        div.block
                        div.block
                    h5 flex-start
                    div.align-items(style="display: flex; align-items: flex-start")
                        div.block
                        div.block
                        div.block
                    h5 flex-end
                    div.align-items(style="display: flex;  align-items: flex-end")
                        div.block
                        div.block 
                        div.block
                    h5 center
                    div.align-items(style="display: flex; align-items: center")
                        div.block
                        div.block
                        div.block
                    h5 baseline
                    div.align-items(style="display: flex; align-items: baseline")
                        div.block
                        div.block
                        div.block


            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 align-content
                        p This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
                        p Note: this property has no effect when there is only one line of flex items.
                        dl 
                            dt stretch
                            dd <span class="default">default</span> lines stretch to take up the remaining space
                            dt flex-start
                            dd lines packed to the start of the container
                            dt flex-end
                            dd lines packed to the end of the container
                            dt center
                            dd lines packed to the center of the container
                            dt space-between
                            dd lines evenly distributed; the first line is at the start of the container while the last one is at the end
                            dt space-around
                            dd lines evenly distributed with equal space around each line
            .example(class="row small-full large-half")
                code-section(class="column", :code="example.alignContent", lang="css")
                .preview.column

                    h5 stretch
                    div.align-content(style="display: flex; align-content: stretch")
                        div.block
                        div.block
                        div.block
                    h5 flex-start
                    div.align-content(style="display: flex; align-content: flex-start")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                    h5 flex-end
                    div.align-content(style="display: flex;  align-content: flex-end")
                        div.block
                        div.block 
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                    h5 center
                    div.align-content(style="display: flex; align-content: center")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                    h5 space-between
                    div.align-content(style="display: flex; align-content: space-between")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                    h5 space-around
                    div.align-content(style="display: flex; align-content: space-around")
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block
                        div.block

        column(xxxlarge="half")
            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h2 Children properties
                        h3 order
                        p By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

            .example(class="row small-full large-half")
                code-section(class="column", :code="example.order", lang="css")
                .preview.column
                    h5 order
                    div.align-content(style="display: flex;")
                        div.block(data-content="1",style="order: 1")
                        div.block(data-content="3",style="order: 3")
                        div.block(data-content="3",style="order: 3")
                        div.block(data-content="2",style="order: 2")
                        div.block(data-content="2",style="order: 2")

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex-grow
                        p This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
                        p If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

            .example(class="row small-full large-half")
                code-section(class="column", :code="example.flexGrow", lang="css")
                .preview.column
                    h5 flex-grow
                    div.flex-grow(style="display: flex;")
                        div.block(data-content="1",style="flex-grow: 1")
                        div.block(data-content="1",style="flex-grow: 1")
                        div.block(data-content="2",style="flex-grow: 2")

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex-shrink
                        p This defines the ability for a flex item to shrink if necessary.
            code-section(class="column", :code="example.flexShrink", lang="css")

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex-basis
                        p This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated). The content keyword means "size it based on the item's content" - this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do.
                        p If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value. See this graphic.
            code-section(class="column", :code="example.flexBasis", lang="css")

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 flex
                        p This is the shorthand for <code>flex-grow</code>, <code>flex-shrink</code> and <code>flex-basis</code> combined. The second and third parameters (<code>flex-shrink</code> and <code>flex-basis</code>) are optional. Default is 0 1 auto.
            code-section(class="column", :code="example.flex", lang="css")

            section.basic
                div.row.center
                    div.column.small-full.medium-four-fifth.large-three-quarter  
                        h3 align-self
                        p This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
                        p Please see the align-items explanation to understand the available values.
            .example(class="row small-full large-half")
                code-section(class="column", :code="example.alignSelf", lang="css")
                .preview.column
                    h5 auto
                    div.align-self(style="display: flex;")
                        div.block(style="align-self: auto")
                    h5 flex-start
                    div.align-self(style="display: flex;")
                        div.block(data-content="1",style="align-self: flex-start")
                    h5 flex-end
                    div.align-self(style="display: flex;")
                        div.block(data-content="1",style="align-self: flex-end")
                    h5 baseline
                    div.align-self(style="display: flex;")
                        div.block(data-content="1",style="align-self: baseline")
                    h5 stretch
                    div.align-self(style="display: flex;")
                        div.block(data-content="1",style="align-self: stretch")

                
</template>
<script>
export default {
	data() {
		return {
			example: {
				display: `
.wrapper { 
    display: flex; 
    /* or */
    display: inline-flex; 
}`,
				flexDirection: `
.wrapper {
    flex-direction: row;
    /* or */
    flex-direction: row-reverse;
    /* or */
    flex-direction: colum;
    /* or */
    flex-direction: column-reverse;
}`,
				flexWrap: `
.wrapper {
    flex-direction: nowrap;
    /* or */
    flex-direction: wrap;
    /* or */
    flex-direction: wrap-reverse;
}`,
				flexFlow: `
.wrapper{
    flex-flow: [flex-direction value] || [flex-wrap value]
}`,
				justifyContent: `
.wrapper{
    justify-content: flex-start;
    /* or */
    justify-content: flex-end;
    /* or */
    justify-content: center;
    /* or */
    justify-content: space-between;
    /* or */
    justify-content: space-around;
    /* or */
    justify-content: space-evenly;
}`,
				alignItems: `
.wrapper{
    align-items: stretch;
    /* or */
    align-items: flex-start;
    /* or */
    align-items: flex-end;
    /* or */
    align-items: center;
    /* or */
    align-items: baseline;
}`,
				alignContent: `
.wrapper{
    align-content: stretch;
    /* or */
    align-content: flex-start;
    /* or */
    align-content: flex-end;
    /* or */
    align-content: center;
    /* or */
    align-content: space-between;
    /* or */
    align-content: space-around;
}`,
				order: `
.item {
    order: [number]; // default: 0
}`,
				flexGrow: `
.item {
    flex-grow: [number]; // default: 1
}`,
				flexShrink: `
.item {
    flex-shrink: [number]; // default: 1
}`,
				flexBasis: `
.item {
    flex-basis: [length] | auto; // default: auto
}`,
				flex: `
.item {
    flex: none || [ [flex-grow]  + [flex-shrink] || [flex-basis];
}`,
				alignSelf: `
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`
			}
		};
	}
};
</script>

<style lang="scss">
@import "~piet";
span.default {
	font-style: italic;
	opacity: 0.5;
}

dl {
	border-top: 1px solid color(Black, 0.25);
	margin-top: grid(0.5);
	padding-top: grid(0.5);
	dt,
	dd {
		line-height: 1.75;
	}
	dt {
		font-weight: bold;
	}
}
.example {
	position: relative;
	&:before {
		content: "";
		width: 0;
		height: 0;
		border: 1rem solid white;
		border-top-color: transparent;
		border-left-color: transparent;
		display: block;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%) rotate(45deg);
		background-color: color(White);
	}
	.preview {
		background-color: color(Black);
		color: color(White);
		padding: 2rem;
		.block {
			width: grid(1);
			height: grid(1);
			line-height: grid(1);
			@include min-("height", 1, 32) {
				width: 32px;
				line-height: 32px;
			}
			background-color: color(Blue);
			border-radius: 3px;
			margin: 0.5rem;
			text-align: center;
			&:before {
				font-size: 1.2rem;
				font-weight: bold;
				text-shadow: 1px 1px 2px color(Black, 0.25);
			}
			@for $i from 1 through 20 {
				&:nth-of-type(#{$i}) {
					&:before {
						content: "#{$i}";
					}
				}
			}
			&[data-content] {
				&:before {
					content: attr(data-content);
				}
			}
		}
		h5 + div {
			margin-top: 0.5rem;
			border: 2px solid color(White, 0.2);
			border-radius: 3px;
		}
		> div {
			border: 2px solid red;
			&.align-items {
				height: 8rem;
				.block {
					height: auto;
					@for $i from 1 through 20 {
						&:nth-of-type(#{$i}) {
							line-height: #{$i + 2}rem;
						}
					}
				}
			}
			&.align-content {
				flex-wrap: wrap;
				min-height: 24rem;
				.block {
					@for $i from 1 through 20 {
						&:nth-of-type(#{$i}) {
							width: #{($i + 3)}rem;
						}
					}
				}
			}
			&.flex-grow {
				.block {
					width: auto;
				}
			}
			&.align-self {
				.block {
					min-width: grid(1);
					width: auto;
				}
			}
		}
	}
}
</style>