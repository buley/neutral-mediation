<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Consulting</title>
	<meta name="description" content="About Neutral Mediation conflict consulting services." />
</svelte:head>

<div class="content">
	
	<h1>Consulting</h1>
	
	<small><em>Prices in italics. See our <a href="prices">prices page</a> for prices, booking and scheduling options.</em></small>

	<h2>Conflict</h2>

	<h3>Conflict Consulting</h3>

	<p>Neutral-led conflict virtual training session for one, four or eight hours, typically on-site at a business. Business consulting to address organizational systems that generate chronic conflict, including investigation, training and follow-through. <em>Eight-hour negotiation trainings for up to 8 people cost $1,250 per participant.</em></p>

	<h2>Mediation</h2>

	<h3>Mediation</h3>

	<p>Neutral-led virtual mediation session for one, four or eight hours. <em>Mediation consulting costs $175 per hour per participant.</em></p>

	<h3>Mediation Training</h3>

	<p>Neutral-led eight-hour virtual mediation training session. Training is course-guided education. <em>Eight-hour mediation trainings for up to 8 people cost $1,250 per participant.</em></p>

	<h2>Negotiation</h2>

	<h3>Negotiation Consulting</h3>
	
	<p>Neutral-led negotiation virtual consulting session for one, four or eight hours. Consulting is typically in regard to a specific negotiation or similar set of negotiations. <em>Negotiation consulting costs $175 per hour per participant.</em></p>

	<h3>Negotiation Training</h3>

	<p>Neutral-led negotiation virtual training session for one, four or eight hours. Training can be course-guided education or specifically-focused training around a specific negotiation. <em>Eight-hour negotiation trainings for up to 8 people cost $1,250 per participant.</em></p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
