<template>
	<div>
		<h2>typography</h2>
		<p>Font includes made easy…</p>
		<h4>
			Include or define up to 4 fonts.</h4>
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Font</th>
					<th>Variable</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1
						<sup>st</sup>
					</td>
					<td>
						<code>$font-primary</code>
					</td>
				</tr>
				<tr>
					<td>2
						<sup>nd</sup>
					</td>
					<td>
						<code>$font-secondary</code>
					</td>
				</tr>
				<tr>
					<td>3
						<sup>rd</sup>
					</td>
					<td>
						<code>$font-tertiary</code>
					</td>
				</tr>
				<tr>
					<td>4
						<sup>th</sup>
					</td>
					<td>
						<code>$font-quaternary</code>
					</td>
				</tr>
			</tbody>
		</table>
		<h4>
			options</h4>
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Property</th>
					<th>Default value</th>
					<th>Example</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>font-family *</td>
					<td>
						<code>null</code>
					</td>
					<td>
						<code>&quot;Graphik&quot;, sans-serif</code>
					</td>
					<td>string</td>
				</tr>
				<tr>
					<td>load</td>
					<td>
						<code>false</code>
					</td>
					<td>
						<code>true</code>
					</td>
					<td>boolean</td>
				</tr>
				<tr>
					<td>weights</td>
					<td>
						<code>()</code>
					</td>
					<td>
						<code>('light': 200, 'Regular': 400 )</code>
					</td>
					<td>map</td>
				</tr>
				<tr>
					<td>path</td>
					<td>
						<code>&quot;/fonts&quot;</code>
					</td>
					<td>
						<code>&quot;/myPath/fonts&quot;</code>
					</td>
					<td>string</td>
				</tr>
				<tr>
					<td>files</td>
					<td>
						<code>&quot;woff2&quot;, &quot;woff&quot;, &quot;ttf&quot;, &quot;eot&quot;</code>
					</td>
					<td></td>
					<td>list</td>
				</tr>
				<tr>
					<td>use</td>
					<td>
						<code>()</code>
					</td>
					<td>
						<code>('h1','.title','blockquote')</code>
					</td>
					<td>list</td>
				</tr>
				<tr>
					<td>types</td>
					<td>
						<code>('normal')</code>
					</td>
					<td>
						<code>('normal','italic')</code>
					</td>
					<td>list</td>
				</tr>
			</tbody>
		</table>
		<p>
			<em>* is required</em>
		</p>
		<h4>
			example</h4>
		<pre><code class="language-scss"><span class="hljs-variable">$font-primary</span><span class="hljs-value">: (
    font-family: (
        Graphik,
        sans-serif
    ),
    load: true,
    weights: (
        <span class="hljs-string">"Light"</span>: <span class="hljs-number">100</span>,
        <span class="hljs-string">"Regular"</span>: <span class="hljs-number">400</span>,
        <span class="hljs-string">"Medium"</span>: <span class="hljs-number">500</span>,
        <span class="hljs-string">"Bold"</span>: <span class="hljs-number">600</span>,
        <span class="hljs-string">"Black"</span>: <span class="hljs-number">800</span>
    ),
    path: <span class="hljs-string">"/fonts"</span>,
    files: (
        <span class="hljs-string">"woff2"</span>,
        <span class="hljs-string">"woff"</span>,
        <span class="hljs-string">"ttf"</span>,
        <span class="hljs-string">"eot"</span>
    ),
    use: (
        <span class="hljs-string">"h1"</span>,
        <span class="hljs-string">"h3"</span>,
        <span class="hljs-string">"h4"</span>,
        <span class="hljs-string">"span.text"</span>,
        <span class="hljs-string">"#section"</span>
    ),
    types: (
        <span class="hljs-string">"normal"</span>,
        <span class="hljs-string">"italic"</span>
    )
);</span>
</code></pre>
		<h4>
			notes
		</h4>

		<ul>
			<li>Font weights need to be set in order to load fonts.</li>
			<li>Font weight names must be identical to actual file names.</li>
			<li>The first entry in font-family will be loaded when loaded is true.</li>
			<li>The space in a font-family name will be removed for the file name.
				<code>Helvetica Neue</code> will be
				<code>HelveticaNeue</code>
			</li>
			<li>Font includes uses the following syntax:
				<em>
					<code>fontFamily-fontWeightName.ttf</code>
				</em>
			</li>
			<li>When font-type ‘italic’ is added. Font includes will be as
				<em>
					<code>fontFamily-fontWeightNameItalic.ttf</code>
				</em>
			</li>
		</ul>

		<h2>
			examples</h2>
		<h3>
			headings</h3>

		<h1>The quick brown fox jumps over the lazy dog</h1>
		<h2>The quick brown fox jumps over the lazy dog</h2>
		<h3>The quick brown fox jumps over the lazy dog</h3>
		<h4>The quick brown fox jumps over the lazy dog</h4>
		<h5>The quick brown fox jumps over the lazy dog</h5>
		<h6>The quick brown fox jumps over the lazy dog</h6>

	</div>
</template>