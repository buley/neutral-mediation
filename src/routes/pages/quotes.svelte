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
		<li><a href="/pages/quotes/coaching">Useful Coaching Quotes</a></li>
		<li><a href="/pages/quotes/mediation">Useful Mediation Quotes</a></li>
		<li><a href="/pages/quotes/negotiation">Useful Negotiation Quotes</a></li>
	</ul>
</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
