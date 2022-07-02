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

	<h3>Conflict Consultation</h3>

	<h2>Mediation</h2>

	<h3>Mediation Consultation</h3>

	<h3>Mediation Training</h3>

	<h2>Negotiation</h2>

	<h3>Negotiation Consultation</h3>

	<h3>Negotiation Training</h3>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
