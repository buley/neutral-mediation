<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Recusal</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Recusal</h3>
	<p>
		Neutral Mediation reserves the right to recuse itself from an engagement at any time, for any reason, and in that case will issue refunds per the <a href="/refunds">refunds policy</a>.
	</p>
	<p>
		For all mediation and consultancy services, Neutral Mediation will disclose any potential conflicts of interest.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
