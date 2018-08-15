<template>
	<div class="page-component-modal page">
		<section class="component-intro">
			<h3>Forms</h3>
			<p>The modal is a very versatile component with many options. Use the modal to easily pop up some information or something which you dont want to disrupt the rest of the website with. A link to another page not necessary? Use a modal. But.. please don't do it too much, modals are annoying!</p>
		</section>
		<section class="component-example">
			<h4>Types</h4>
			<h5>Regular radio</h5>
			<input-field class="example--field">
				<input-check id="test-radio" name="test-radio">test</input-check>
			</input-field>
			<h5>Regular checkbox</h5>
			<input-field class="example--field">
				<input-check id="test-checkbox" name="test-checkbox" multi="true">test</input-check>
			</input-field>
			<h5>Color check</h5>
			<input-field class="example--field">
				<input-check type="color" id="test-color1" name="test-color" color="red">Red</input-check>
				<input-check type="color" id="test-color2" name="test-color" color="green">Green</input-check>
				<input-check type="color" id="test-color3" name="test-color" color="blue">Blue</input-check>
			</input-field>
			<h5>Icon check</h5>
			<input-field class="example--field">
				<input-check type="icon" id="test-icon1" name="test-icon" icon="arrow-up">Up</input-check>
				<input-check type="icon" id="test-icon2" name="test-icon" icon="arrow-down">Down</input-check>
			</input-field>
			<h5>Text</h5>
			<input-field class="example--field">
				<input-check type="text" id="test-text1" name="test-text">Text 1</input-check>
				<input-check type="text" id="test-text2" name="test-text">Text 2</input-check>
			</input-field>
			<table>
				<tr>
					<th>Prop</th>
					<th>Values</th>
					<th>Description</th>
					<th>Default</th>
				</tr>
				<tr>
					<td>id</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>name</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>input-value</td>
					<td></td>
					<td>Pre given value for input</td>
					<td></td>
				</tr>
				<tr>
					<td>class-list</td>
					<td></td>
					<td>Optional classlist to pass to input.</td>
					<td></td>
				</tr>
				<tr>
					<td>element</td>
					<td></td>
					<td>Element type of parent element</td>
					<td>'div'</td>
				</tr>
				<tr>
					<td>selected</td>
					<td>true / false</td>
					<td>Is the check selector or not?</td>
					<td>false</td>
				</tr>
				<tr>
					<td>type</td>
					<td>color, text, icon</td>
					<td>Type of field given</td>
					<td>radio (when multi, checkbox)</td>
				</tr>
				<tr>
					<td>text</td>
					<td>string</td>
					<td>Text field for type: 'text'</td>
					<td></td>
				</tr>
				<tr>
					<td>color</td>
					<td></td>
					<td>Color field for type: 'color'</td>
					<td></td>
				</tr>
				<tr>
					<td>icon</td>
					<td>Icon character</td>
					<td>Passes the character to the field.</td>
					<td></td>
				</tr>
				<tr>
					<td>label</td>
					<td>false</td>
					<td>When false, label field will be hidden.</td>
					<td></td>
				</tr>
				<tr>
					<td>multi</td>
					<td>true/empty</td>
					<td>When given, the field will be a (multiselectable) checkbox.</td>
					<td>false</td>
				</tr>
			</table>
		</section>
		<section class="component-example">
			<h4>Example</h4>
		</section>
		<section class="component-howto">
			<h4>How to use?</h4>
		</section>
		<section class="component-options">
			<h4>Options</h4>
		</section>
		<section class="component-install">
			<h4>Install</h4>
			Using npm:
			<pre><code>npm install piet-forms --save-dev</code></pre> or Yarn:
			<pre><code>yarn add piet-forms</code></pre>
		</section>
	</div>
</template>

<style lang="scss">
@import "~piet";
.example--field {
	padding: 2rem;
	background-color: color(White);
	color: color(Black);
}
</style>