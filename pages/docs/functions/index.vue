<template>
	<div>
		<section>
			<h3>Bem</h3>
			<h4>c()</h4>
			<h4>slugify()</h4>
		</section>
		<section>
			<h3>Color</h3>
			<p>The main color function of Piet. This function pack is creating and displaying all the colors from the defined sets. </p>

			<h4>define-custom-colorset()</h4>
			<p>Defines a new custom color set.</p>

			<h4>define-custom-colors()</h4>
			<p>Defines a new custom color to the current color set.</p>

			<h4>define-color-set()</h4>
			<h5>return: nothing</h5>
			<p>Defines a new color set.</p>

			<h4>color()</h4>
			<h5>return: color</h5>
			<p>The main color function, get the color from the current colorset</p>

			<h4>is-string-color()</h4>
			<h5>return: bool</h5>
			<p>Check if the type of a color and return if its not a rgb or hex.</p>

			<h4>to-string-color()</h4>
			<h5>return: color (rgba)</h5>
			<p>Convert the string back to an actual color and always to a rgba color with opacity</p>

			<h4>to-defined-color()</h4>
			<h4>return: color</h4>
			<p>Check if the color is a rgb, hex or a specific, color from the existing colorset and return a color</p>

			<h4>color-exist()</h4>
			<p>Check if the color exists in the current set</p>
			<h5>return: bool</h5>

			<h4>get-color()</h4>
			<h5>return: color</h5>
			<p>Returns a color if it exists, if not, it will respond with a warning and will return nothing.</p>

			<h4>define-bw()</h4>
			<p>Helper function of black() and white(), when the colorset doesn't have a black or white, this function defines the default black and white. Will give a warning.</p>

			<h4>color-brightness()</h4>
			<h5>return: number</h5>
			<p>Returns a overall brightness of the color in percentage.</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$color</code>
					</td>
					<td></td>
					<td>Give a color (name or value).</td>
				</tr>
				<tr>
					<td>
						<code>$percentage</code>
					</td>
					<td>true</td>
					<td>Either give back a percentage or a number.</td>
				</tr>
			</table>

			<h4>color-brightness-calc()</h4>
			<h5>return: number</h5>
			<p>Returns a overall brightness of the color between 0 and 100.</p>

			<h4>contra()</h4>
			<h5>return: color</h5>
			<p>Returns either the Black, or White from the current colorset. Whichever has the most contrast with the given color.</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$color</code>
					</td>
					<td></td>
					<td>Give a color (name or value).</td>
				</tr>
			</table>
			<h4>black()</h4>
			<h5>return: color</h5>
			<p>Returns a translucent shade of the Black in the current colorset.</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$opacity</code>
					</td>
					<td>1</td>
					<td>Give the opacity in a range from 0 to 1.</td>
				</tr>
			</table>
			<h4>white()</h4>
			<h5>return: color</h5>
			<p>Returns a translucent shade of the White in the current colorset.</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$opacity</code>
					</td>
					<td>1</td>
					<td>Give the opacity in a range from 0 to 1.</td>
				</tr>
			</table>

			<h4>gray()</h4>
			<h5>return: color</h5>
			<p>Returns a shade of gray between 0(black) and 100 (white).</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$opacity</code>
					</td>
					<td>1</td>
					<td>Give the opacity in a range from 0 to 1.</td>
				</tr>
			</table>

			<h4>darken()</h4>
			<h5>return: color</h5>
			<p>A substitute of the default
				<code>darken()</code> function in Sass. Behaves the same, but also allows and checks for the colors in the current colorset.</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$color</code>
					</td>
					<td>1</td>
					<td>Give the opacity in a range from 0 to 1.</td>
				</tr>
			</table>

			<h4>lighten()</h4>
			<h5>return: color</h5>
			<p>A substitute of the default
				<code>lighten()</code> function in Sass. Behaves the same, but also allows and checks for the colors in the current colorset.</p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$color</code>
					</td>
					<td>1</td>
					<td>Give the opacity in a range from 0 to 1.</td>
				</tr>
			</table>

			<h4>native-rgba()</h4>
			<p>Sass sometimes wants to compile the "rgba" function. This is not always what you want. This function does not compile.</p>
		</section>
		<section>
			<h3>Custom Properties</h3>
			<h4>v()</h4>
			<P>A lazy for really lazy shorthands of writing
				<code>v(piet)</code> instead of
				<code>var(--piet)</code>
			</P>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$var</code>
					</td>
					<td></td>
					<td>Name of the custom-property.</td>
				</tr>
			</table>
		</section>
		<section>
			<h3>Fonts</h3>
			<h4>letter-spacing()</h4>
			<p>Calculate the letter-spacing as it is used in photoshop. </p>
			<table>
				<tr>
					<th>Argument</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<code>$font-size</code>
					</td>
					<td>1rem</td>
					<td>The font-size to calculate</td>
				</tr>
				<tr>
					<td>
						<code>$space</code>
					</td>
					<td>
						<code>$base-letter-spacing</code>
					</td>
					<td>The letter-spacing as described in photoshop.</td>
				</tr>
			</table>
		</section>
		<section>
			<h3>Icon </h3>
			<h4>icons()</h4>
			<p>Returns the list of all icons.</p>
			<h4>icon()</h4>
			<p>Returns the given icon by name.</p>

		</section>
		<section>
			<h3>List</h3>
			<h4>map-collect()</h4>
			<h4>str-to-list()</h4>
			<h4>prepend()</h4>
			<h4>to-string()</h4>
			<h4>to-list()</h4>
		</section>
		<section>
			<h3>Map</h3>
			<h4>map-set()</h4>
			<h4>to-map()</h4>
		</section>
		<section>
			<h3>Math</h3>
			<h4>pow()</h4>
			<h4>number-invert()</h4>
			<h4>fact()</h4>
			<h4>pi()</h4>
			<h4>rad()</h4>
			<h4>sin()</h4>
			<h4>cos()</h4>
			<h4>tan()</h4>
			<h4>decimal-round()</h4>
			<h4>decimal-ceil()</h4>
			<h4>decimal-floor()</h4>
		</section>
		<section>
			<h3>output</h3>
			<h4>output()</h4>
			<h4>check-output()</h4>
		</section>
		<section>
			<h3>size</h3>
			<h4>calc-rem()</h4>
			<h4>convert-to-rem()</h4>
			<h4>rem-calc()</h4>
			<h4>rem()</h4>
		</section>
		<section>
			<h3>Stringss</h3>
			<h4>str-replace()</h4>
		</section>
		<section>
			<h3>Units</h3>
			<h4>is-number()</h4>
			<h4>is-time()</h4>
			<h4>is-duration()</h4>
			<h4>is-angle()</h4>
			<h4>is-frequency()</h4>
			<h4>is-integer()</h4>
			<h4>is-relative-length()</h4>
			<h4>is-absolute-length()</h4>
			<h4>is-percentage()</h4>
			<h4>is-length()</h4>
			<h4>is-resolution()</h4>
			<h4>is-position()</h4>
			<h4>strip-unit()</h4>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@import "~piet";
section {
	& + section {
		border-top: 1px solid $primary-color;
		margin-top: grid(1);
		padding-top: grid(1);
	}
}
</style>