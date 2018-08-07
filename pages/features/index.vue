<template>
	<div class="page-features page">
		<div class="row example-row" :class="[style.columnClass,{ 'center' : style.center}]">
			<div class="column example-column" v-for="n in totalColumns" :key="n">
				<div class="example-column__content"></div>
			</div>
		</div>
		<div>
			<div>
				<span>total columns: {{totalColumns}}</span>
			</div>
			<div class="input-checkbox">
				<input type="checkbox" v-model="style.center" id="center-columns" />
				<label for="center-columns">Center columns</label>
			</div>
			<div class="input-range">
				<input type="range" min="0" max="24" v-model="style.columns" />{{style.columns}}
			</div>
			<div class="button-group">
				<a class="button button-icon--plus" v-on:click="addColumn">Add column</a>
				<a class="button button-icon--minus" v-on:click="removeColumn">Remove column</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "page",
	data() {
		return {
			totalColumns: 24,
			style: {
				columnClass: "small-1",
				columns: 1
			},
			columns: ["column"]
		};
	},
	methods: {
		addColumn() {
			this.totalColumns++;
		},
		removeColumn() {
			this.totalColumns--;
		}
	},
	watch: {
		style: {
			handler: function(val, oldVal) {
				this.style.columnClass = "small-" + this.style.columns;
			},
			deep: true
		}
	}
};
</script>

<style lang="scss">
@import "~piet";
.example-row {
	outline: 2px solid color(White, 0.2);
	border-radius: 2px;
	padding: 1rem 0;

	background-image: linear-gradient(
		to right,
		transparent calc(100% - 2px),
		color(White, 0.2)
	);
	background-size: 4.3% 10px;
	background-position: left top;

	.example-column {
		padding: 0.25rem 0.5rem;
		// background-color: color(Red, 0.5);
		&:nth-child(even) {
			// background-color: color(Yellow, 0.5);
		}

		&__content {
			outline: 2px solid color(Blue, 1);
			background-color: color(Blue, 0.5);
			border-radius: 4px;
			padding: 0.5rem;
		}
	}
}
</style>
