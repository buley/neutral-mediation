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
	
	<h2>Conflict</h2>

	<h3>Conflict Consulting</h3>

	<p>Neutral-led conflict virtual training session for one, four or eight hours, typically on-site at a business. Business consulting to address organizational systems that generate chronic conflict, including investigation, training and follow-through.</p>

	<h2>Mediation</h2>

	<h3>Mediation Consulting</h3>

	<p>Neutral-led virtual consulting session on the topic of mediation for one, four or eight hours. This consulting is typically an exploration of the values of mediation, in general or with Neutral Mediation specifically, for a given situation, as part of an exploration of options for a particular dispute.</p>

	<h3>Mediation Training</h3>

	<p>Neutral-led mediation virtual training session for one, four or eight hours. Training can be course-guided education or specifically-focused training around a specific negotiation.</p>

	<h2>Negotiation</h2>

	<h3>Negotiation Consulting</h3>
	
	<p>Neutral-led negotiation virtual consulting session for one, four or eight hours. Consulting is typically in regard to a specific negotiation or similar set of negotiations.</p>

	<h3>Negotiation Training</h3>

	<p>Neutral-led negotiation virtual training session for one, four or eight hours. Training can be course-guided education or specifically-focused training around a specific negotiation.</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
