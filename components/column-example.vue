<template>
	<div class="column-example">
		<div class="row example-row" :class="[style.columnClass,{ 'center' : style.center}]">
			<div class="column example-column" v-for="n in totalColumns" :key="n">
				<div class="example-column__content"></div>
			</div>
		</div>
		<div class="example-tools">
			<div class="input-number">
				<label>total columns</label>
				<input type="number" v-model="totalColumns" />

				<div class="button-group">
					<a class="button button-icon--plus button-icon--only" v-on:click="addColumn">
						<span class="button__text">Add column</span>
					</a>
					<a class="button button-icon--minus button-icon--only" v-on:click="removeColumn">
						<span class="button__text">Remove column</span>
					</a>
				</div>
			</div>
			<div class="input-checkbox">
				<label for="center-columns">Center columns</label>
				<input type="checkbox" v-model="style.center" id="center-columns" />
				<label for="center-columns"></label>
			</div>
			<div class="input-range">
				<label>Column width</label>
				<input type="range" min="0" max="24" v-model="style.columns" />{{style.columns}}
			</div>
		</div>
		<pre v-highlightjs>
			<div class="row"></div>
		</pre>
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
		},
		totalColumns: {
			handler: function(val, oldVal) {
				this.totalColumns = parseInt(this.totalColumns);
			},
			deep: true
		}
	}
};
</script>

<style lang="scss">
@import "~piet";
.example {
	&-row {
		outline: 2px solid color(White, 0.2);
		border-radius: 2px;
		padding: 1rem 0;
		position: relative;

		background-image: linear-gradient(
			to right,
			transparent calc(100% - 2px),
			color(White, 0.2)
		);
		background-size: calc(100% / 6) auto;
		background-position: left top 0;
	}
	&-column {
		text-align: center;
		padding: 1rem 0;
		position: relative;
		&__content {
			display: inline-block;
			width: 100%;
			border: 2px solid color(Blue, 1);
			background-color: color(Blue, 0.5);
			border-radius: 4px;
			padding: 0.5rem;
		}
	}
	&-tools {
		background-color: color(White, 0.1);
		margin-top: 0.5rem;
		outline: 2px solid color(White, 0.1);
		padding: 2rem;
	}
}
</style>
