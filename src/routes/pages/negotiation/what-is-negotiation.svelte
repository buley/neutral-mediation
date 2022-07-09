<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>What Is Negotiation?</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>What Is Negotiation?</h3>	
	<p>
		Negotiation is the most informal of dispute resolution practices, offering fewer established processes, rules and constraints as compared to <a href="/mediation">mediation</a>, arbitration and <a href="/disclaimers">litigation</a>.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
