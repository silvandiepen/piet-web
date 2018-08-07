<template>
	<div class="content custom">
		<h1 id="typography">
			<a href="#typography" aria-hidden="true" class="header-anchor">#</a> typography</h1>
		<p>Font includes made easy..</p>
		<h4 id="include-or-define-up-to-4-fonts">
			<a href="#include-or-define-up-to-4-fonts" aria-hidden="true" class="header-anchor">#</a> Include or define up to 4 fonts.</h4>
		<table>
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
		<h4 id="options">
			<a href="#options" aria-hidden="true" class="header-anchor">#</a> options</h4>
		<table>
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
						<code>"Graphik", sans-serif</code>
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
						<code>"/fonts"</code>
					</td>
					<td>
						<code>"/myPath/fonts"</code>
					</td>
					<td>string</td>
				</tr>
				<tr>
					<td>files</td>
					<td>
						<code>"woff2", "woff", "ttf", "eot"</code>
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
		<h4 id="example">
			<a href="#example" aria-hidden="true" class="header-anchor">#</a> example</h4>
		<div class="language-scss extra-class">
			<pre class="language-scss"><code><span class="token property"><span class="token variable">$font-primary</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
		Graphik,
		sans-serif
	<span class="token punctuation">)</span>,
	<span class="token property">load</span><span class="token punctuation">:</span> <span class="token boolean">true</span>,
	<span class="token property">weights</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
		<span class="token string">"Light"</span><span class="token punctuation">:</span> 100,
		<span class="token string">"Regular"</span><span class="token punctuation">:</span> 400,
		<span class="token string">"Medium"</span><span class="token punctuation">:</span> 500,
		<span class="token string">"Bold"</span><span class="token punctuation">:</span> 600,
		<span class="token string">"Black"</span><span class="token punctuation">:</span> 800
	<span class="token punctuation">)</span>,
	<span class="token property">path</span><span class="token punctuation">:</span> <span class="token string">"/fonts"</span>,
	<span class="token property">files</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
		<span class="token string">"woff2"</span>,
		<span class="token string">"woff"</span>,
		<span class="token string">"ttf"</span>,
		<span class="token string">"eot"</span>
	<span class="token punctuation">)</span>,
	<span class="token property">use</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
		<span class="token string">"h1"</span>,
		<span class="token string">"h3"</span>,
		<span class="token string">"h4"</span>,
		<span class="token string">"span.text"</span>,
		<span class="token string">"#section"</span>
	<span class="token punctuation">)</span>,
	<span class="token property">types</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
		<span class="token string">"normal"</span>,
		<span class="token string">"italic"</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
		</div>
		<h4 id="notes">
			<a href="#notes" aria-hidden="true" class="header-anchor">#</a> notes</h4>
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
			<li>When font-type 'italic' is added. Font includes will be as
				<em>
					<code>fontFamily-fontWeightNameItalic.ttf</code>
				</em>
			</li>
		</ul>
		<h2 id="examples">
			<a href="#examples" aria-hidden="true" class="header-anchor">#</a> examples</h2>
		<h3 id="headings">
			<a href="#headings" aria-hidden="true" class="header-anchor">#</a> headings</h3>
		<h1>The quick brown fox jumps over the lazy dog</h1>
		<h2>The quick brown fox jumps over the lazy dog</h2>
		<h3>The quick brown fox jumps over the lazy dog</h3>
		<h4>The quick brown fox jumps over the lazy dog</h4>
		<h5>The quick brown fox jumps over the lazy dog</h5>
		<h6>The quick brown fox jumps over the lazy dog</h6>
	</div>

</template>
