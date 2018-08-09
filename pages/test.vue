<template>
	<div class="test" :class="{'bg-black' :darkMode}">
		<div class="darkmode" v-on:click="darkMode = !darkMode">Darkmode</div>
		<section>
			<h1>Headings</h1>
			<hr />
			<h1>The quick brown fox jumps over the lazy dog</h1>
			<h2>The quick brown fox jumps over the lazy dog</h2>
			<h3>The quick brown fox jumps over the lazy dog</h3>
			<h4>The quick brown fox jumps over the lazy dog</h4>
			<h5>The quick brown fox jumps over the lazy dog</h5>
			<h5>The quick brown fox jumps over the lazy dog</h5>
		</section>

		<section>
			<h1>Forms</h1>
			<hr />
			<row>
				<column medium="half">
					<h5>Input without anything</h5>
					<input v-model="dummyText" />
					<h5>Input type:text</h5>
					<input type="text" v-model="dummyText" />
					<h5>Input type:email</h5>
					<input type="email" v-model="dummyText" />
					<h5>Input type:password</h5>
					<input type="password" v-model="dummyText" />
					<h5>Select</h5>
					<select>
						<option>Option</option>
						<option>Option</option>
						<option>Option</option>
					</select>
					<h5>Textarea</h5>
					<textarea v-model="dummyText"></textarea>
					<h5>Checkbox</h5>
					<input type="checkbox" />
					<h5>Radio</h5>
					<input type="radio" />
					<h5>Range</h5>
					<input type="range" min="0" max="100" />
				</column>
				<column medium="half">

					<h5>Input without anything</h5>

					<div class="input--field">
						<label>Label</label>
						<input v-model="dummyText" />
					</div>

					<h5>Input type:text</h5>
					<div class="input--field">
						<label>Label</label>
						<input type="text" v-model="dummyText" />
					</div>

					<h5>Input type:email</h5>
					<div class="input--field">
						<label>Label</label>
						<input type="email" v-model="dummyText" />
					</div>

					<h5>Input type:password</h5>
					<div class="input--field">
						<label>Label</label>
						<input type="password" v-model="dummyText" />
					</div>

					<h5>Select</h5>
					<div class="input--field">
						<label>Label</label>
						<select>
							<option>Option</option>
							<option>Option</option>
							<option>Option</option>
						</select>
					</div>
					<h5>Textarea</h5>
					<div class="input--field">
						<label>Label</label>
						<textarea v-model="dummyText"></textarea>
					</div>
					<h5>Checkbox</h5>
					<div class="input--field input--checkbox">
						<input id="checkbox-styled" type="checkbox" />
						<label for="checkbox-styled">Label</label>
					</div>
					<h5>Radio</h5>
					<div class="input--field input--radio">
						<input id="radio-styled" type="radio" />
						<label for="radio-styled">Label</label>
					</div>
					<h5>Range</h5>
					<div class="input--field input--range">
						<label>Label</label>
						<input type="range" min="0" max="100" />
					</div>
					<h5>Switch</h5>
					<div class="input--field input--switch">
						<input id="switch-styled" type="checkbox" />
						<label for="switch-styled">Label</label>
					</div>
					<h5>Text check</h5>
					<div class="input--field input--check-text">
						<input id="text-check-styled" type="checkbox" />
						<label for="text-check-styled">Label</label>
					</div>
					<h5>Color check</h5>
					<div class="input--field input--check-color" style="--check-color: #783002">
						<input id=" color-check-styled " type="checkbox " />
						<label for="color-check-styled ">Label</label>
					</div>
					<h5>Icon check</h5>
					<div class="input--field input--check-icon ">
						<input id="icon-check-styled " type="checkbox " />
						<label for="icon-check-styled ">Label</label>
					</div>
				</column>
			</row>
		</section>
	</div>

</template>

<script>
export default {
	layout: "test",
	data() {
		return {
			dummyText: "",
			darkMode: false
		};
	}
};
</script>

<style lang="scss">
@import "~piet";
.darkmode {
	position: fixed;
	top: 0.5rem;
	right: 0.5rem;
	padding: 1rem;
	background-color: color(Black);
	color: color(White);
}
.bg-black {
	.darkmode {
		background-color: color(White);
		color: color(Black);
	}
}
section {
	padding: grid(3);
	& + section {
		border-top: 1px solid color(Black);
	}
}
.bg-black {
	section + section {
		border-top: 1px solid color(White);
	}
}
</style>