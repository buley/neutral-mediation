<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
	import headshot from '$lib/assets/headshot.webp';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Neutral Mediation." />
</svelte:head>

<div class="content">
	
	<h1>About</h1>

	<h2>Our Practice</h2>

	<figure class="headshot">
		<img src="{headshot}" alt="Headshot of Taylor Buley.">
		<p><a href="/background"><strong>Taylor Buley</strong>, <em>Neutral</em></a></p>
	</figure>

	<p>Taylor Buley founded Neutral Mediation to minimize the cognitive and financial expense, time and trauma of embroiling complex disputes. As a professional third-party neutral, Taylor creates conversational spaces of trust, openness and psychological safety where he offers mediation, negotiation, consulting, training and conflict coaching services to help clients find paths forward beyond conflict.</p>

	<h2>Our Values</h2>

	<h3>Mission Statement</h3>

	<p>Neutral Mediation believes that adults are capable of finding mutually workable solutions to their own problems when provided the opportunity to explore creative options in a safe and constructive environment. Neutrals help build trust and rapport and minimize the distraction of relationship conflicts. They help shape communication as collaborative and less contentious while creating space to express disagreements. Neutral Mediation helps clients investigate and develop solutions to challenging workplace, family and neighborhood problems using informal and collaborative mediation and negotiation that harnesses the transformational power of dispute resolution to find a compromise, heal and move people forward.</p>

	<h3>Culture Statement</h3>

	<p>Neutral Mediation exists to create an informal and safe environment for people to hear and be heard while pursuing creative options and solutions to relationship problems. It views each conflict as an opportunity for practicing peace and seeks resolution beyond dispute with empathy, education and empowerment.</p>

	<p>Neutral Mediation values, above all else, ethics and personal integrity. It believes that a mediator with integrity should be neutral in name, word and deed. It believes in trusting others, too, to do what they say act in accordance with their stated values.</p>

	<p>Neutral Mediation believes in curiousity and acceptance. It believes in validating experience and feelings. It believes that with diversity comes the blessing of multiple viewpoints and an opportunity for commonality.</p>

	<p>Neutral Mediation is relentlessly welcoming of diverse opinions and backgrounds. It believes in face-to-face meetings and taking people at face value. It believes in using first names, good faith and eye contact.</p>

	<p>Neutral Mediation encourages people to be friendly and empathetic, honest and direct, trustworthy, energetic, prepared, composed, positive and civilized. It believes in brainstorming, open-minds and the strengthening of communication through listening and storytelling. It believes in the power of emotional vulnerability to transform disputes. It believes not just that a neutral’s words matter and should be used only necessarily, but that her word matters and should be indefatigably trustworthy.</p>

	<p><em>Neutral Mediation’s EIN is 87-2105551. <a href="/w9">Click here for a downloadable W-9</a>.</em></p>

	<h4>More Information</h4>

	<ul>
		<li><a href="/news">News</a></li>
		<li><a href="/press">In The Press</a></li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
