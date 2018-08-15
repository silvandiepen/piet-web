<template>
	<div>
		<section>
			<h2>
				Output
			</h2>
			<p>Piet has a lot of setting which can be adjusted, by default Piet outputs no css at all. This means that when you import Piet you can use all functions and mixins, but it won't include any css.</p>
			<p>This is helpfull when using it in components and don't produce double code.</p>

			<h3>Adjust settings</h3>
			<p>All default settings are shown below, this is the css which Piet will output when you change the default setting (output-css) to true.
				<code>$output-css: true;</code>
			</p>

			<h3>Custom output settings</h3>
			<p>Piet can be full customized. Setting custom settings can be done by altering the default before the actual import of Piet.</p>
			<p>You need to import the 'custom-output' script before, this script will give you all default settings which you can override using the
				<code>set-output</code> function</p>
			<prism>
				@import '~piet/custom-output'; $output: set-output(button,true); @import '~piet';</prism>
			<h3>Default output settings</h3>

			<table v-if="outputs">
				<tbody v-for="(output, index) in outputs" :key="index">
					<tr class="parent" :class="[output.value ? 'visible' : 'invisible']">
						<td>{{output.name}}</td>
						<td>{{output.value}}</td>
					</tr>

					<tr class="child" :class="[child.value ? 'visible' : 'invisible']" v-if=" output.children " v-for="(child, childIndex) in output.children " :key="childIndex ">
						<td>{{child.name}}</td>
						<td>{{child.value}}</td>
					</tr>
					<tr>
						<td colspan="2"></td>
					</tr>
				</tbody>
			</table>
		</section>

	</div>
</template>


<script>
import outputData from "piet/data/output.json";
export default {
	data() {
		return {
			outputs: {}
		};
	},
	created() {
		this.processOutputs(outputData.output[0]);
	},
	methods: {
		objectLength: function(object) {
			var length = 0;
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					++length;
				}
			}
			return length;
		},
		processOutputs: function(input) {
			let output = [];
			let i = 0;
			let _this = this;

			// console.log(input);

			// First get all parents:
			Object.keys(input).forEach(function(key) {
				i++;
				if (key.indexOf("-") < 0) {
					output.push({ name: key, value: input[key] });
				}
				if (_this.objectLength(input) == i) {
					let j = 0;
					Object.keys(output).forEach(function(parent) {
						j++;
						Object.keys(input).forEach(function(child) {
							if (child.indexOf("-") > 0) {
								if (child.split("-")[0] == output[parent].name) {
									if (!output[parent].children) {
										output[parent].children = [];
									}
									// console.log(output[parent].children);
									output[parent].children.push({
										name: child,
										value: input[child]
									});
								}
							}
						});
						if (_this.objectLength(output) == j) {
							// console.log(output);
							// return output;
							_this.outputs = output;
						}
					});
				}
			});
		}
	}
};
</script>
