<template>
	<div class="block-logo" :style="logoStyle">
		<div class="block block-1"></div>
		<div class="block block-2"></div>
		<div class="block block-3"></div>
		<div class="block block-4"></div>
		<div class="block block-5"></div>
		<div class="block block-6"></div>
		<div class="block block-7"></div>
		<div class="block block-8"></div>
		<div class="block block-9"></div>
		<div class="block block-10"></div>
	</div>
</template>
<script>
export default {
	props: ["width", "height"],
	data() {
		return {
			logoStyle: {
				width: "10vw",
				height: "10vw"
			}
		};
	},
	created() {
		if (this.$props.height) {
			this.logoStyle.height = this.$props.height;
		}
		if (this.$props.width) {
			this.logoStyle.width = this.$props.width;
		}
	}
};
</script>

<style lang="scss">
@import "~piet";
.block {
	border: 0.1vw solid var(--color-black);
	background-color: var(--color-white);
	&-logo {
		background-color: var(--color-black);
		display: grid;
		border: 0.2vw solid black;
		grid-template-columns: 12.5% 31.25% 37.5% 18.75%;
		grid-template-rows: 6.25%;
	}
	&-1,
	&-2,
	&-3 {
		grid-column-start: 1;
		grid-column-end: 1;
	}
	&-1 {
		grid-row-start: 1;
		grid-row-end: 3;
	}
	&-2 {
		grid-row-start: 3;
		grid-row-end: 13;
		background-color: var(--color-blue);
	}
	&-3 {
		grid-row-start: 13;
		grid-row-end: 16;
	}

	&-4,
	&-5,
	&-6 {
		background-color: white;
		grid-column-start: 2;
		grid-column-end: 2;
	}
	&-4 {
		grid-row-start: 1;
		grid-row-end: 3;
		background-color: var(--color-pink);
	}
	&-5 {
		grid-row-start: 3;
		grid-row-end: 15;
	}
	&-6 {
		grid-row-start: 15;
		grid-row-end: 16;
		background-color: var(--color-blue);
	}

	&-7,
	&-8,
	&-9 {
		grid-column-start: 3;
		grid-column-end: 3;
	}
	&-7 {
		grid-row-start: 1;
		grid-row-end: 3;
	}
	&-8 {
		grid-row-start: 3;
		grid-row-end: 10;
	}
	&-9 {
		grid-row-start: 10;
		grid-row-end: 16;
		background-color: var(--color-yellow);
	}
	&-10 {
		grid-column-start: 4;
		grid-column-end: 4;
		grid-row-start: 1;
		grid-row-end: 16;
		background-color: var(--color-pink);
	}
}
</style>

