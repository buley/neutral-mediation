<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Useful Quotes</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Useful Quotes</h1>
	<ul class="centered-list">
		<li><a href="/pages/quotes/mediation">Mediation</a></li>
		<li><a href="/pages/quotes/negotiation">Negotiation</a></li>
		<li><a href="/pages/quotes/coaching">Coaching</a></li>
	</ul>
</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
