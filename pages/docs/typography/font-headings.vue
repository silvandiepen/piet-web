<template lang="pug">
div
	section.basic#typography
		row(center)
			column(medium="4:5",large="3:4")
				h1 Headings
				h1(data-label="h1") {{ headingText }}
				h2(data-label="h2") {{ headingText }}
				h3(data-label="h3") {{ headingText }}
				h4(data-label="h4") {{ headingText }}
				h5(data-label="h5") {{ headingText }}
				h6(data-label="h6") {{ headingText }}
				p(data-label="p") Quisque elementum diam ligula, nec fringilla dui vulputate in. Donec sagittis ullamcorper maximus. Sed sed pulvinar lorem, nec luctus mi. Pellentesque sit amet fringilla lacus. Suspendisse vulputate varius augue, in vestibulum mauris. Donec risus velit, accumsan vel purus ut, cursus pulvinar neque. Fusce maximus, ante sit amet auctor feugiat, mi eros facilisis massa, quis bibendum magna leo vitae ligula. Donec tristique felis orci, vitae vehicula sapien pulvinar in. In tincidunt scelerisque tellus, a tempus mi mattis consequat.
				hr
				form
					label Change the heading text:
					input.input--ghost(type="text",v-model="headingText")
</template>

<script>
export default {
	data() {
		return {
			headingText: "The quick brown fox jumps over the lazy dog",
			fontList: []
		};
	}
};
</script>