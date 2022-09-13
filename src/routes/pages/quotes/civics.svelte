<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Useful Civics Quotes</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Useful Civics Quotes</h1>
	<figure>
		<blockquote class="pullquote">
			<p>[T]he latest and most formidable form of... domination [is]
	bureaucracy... which could be properly called rule by Nobody. If, in
	accord with traditional political thought, we identify tyranny as
	government that is not held to give account of itself, rule by Nobody is
	clearly the most tyrannical of all, since there is no one left who would
	even be asked to answer for what is being done.</p>
		</blockquote>
		<figcaption class="pullquote">
			Hannah Arendt, <em><cite>On Violence</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Words like ‘freedom,' ‘justice,' and ‘democracy' are not common concepts; on the contrary, they are rare. People are not born knowing what these are. It takes enormous, and above all, individual effort to arrive at the respect for other people that these words	imply.</p>
		</blockquote>
		<figcaption class="pullquote">
			James Baldwin
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Democracy must be something more than two wolves and a sheep voting on what to have for dinner.</p>
		</blockquote>
		<figcaption class="pullquote">
			James Bovard
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Direct government as at present generally understood is a mere phantom of democracy. Democracy is not a sum in addition. Democracy is not brute numbers; it is a genuine union of true individuals.</p>
		</blockquote>
		<figcaption class="pullquote">
			Mary Parker Follett
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Deep democracy is what justice looks like in practice.</p>
		</blockquote>
		<figcaption class="pullquote">
			Cornel West
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>We may have democracy, or we may have wealth concentrated in the hands of a few, but we can't have both.</p>
		</blockquote>
		<figcaption class="pullquote">
			Justice Louis Brandeis
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>The fire, the energy, and the life of democracy is popular pressure. Democracy itself is a government constantly responding to continuous pressures of its people. The only hope for democracy is that more people and more groups will become articulate and exert pressure upon their government … Can man envisage a more sublime program on earth than the people having faith in their fellow men and themselves? A program of co-operation instead of competition? This, then, is the job ahead …</p>
		</blockquote>
		<figcaption class="pullquote">
			Saul Alinsky
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>If voting made any difference they wouldn't let us do it.</p>
		</blockquote>
		<figcaption class="pullquote">
			Mark Twain
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>If you are neutral in situations of injustice, you have chosen the side of the oppressor. If an elephant has its foot on the tail of a mouse and you say that you are neutral, the mouse will not appreciate your neutrality.</p>
		</blockquote>
		<figcaption class="pullquote">
			Desmond Tutu
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Our lives begin to end the day we become silent about things that matter.</p>
		</blockquote>
		<figcaption class="pullquote">
			Dr. Martin Luther King, Jr.
		</figcaption>
	</figure>
</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
