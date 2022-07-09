<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Benefits of Negotiation</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Benefits of Negotiation</h3>
	<p>
		Negotiation allows for quick and inexpensive dispute resolution. It allows maximium room for creative solutions and empowers participants to determine their own settlements. The process provides maximum agency and interest-based bargaining creates the opportunity for win-win mutual gain, even if at the risk of lose-lose mutual loss.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
