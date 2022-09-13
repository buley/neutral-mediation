<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Neutral Mediation W-9</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Our W-9</h3>
	<p>
		<a href="#">Click here to download Neutral Medaition's W-9 IRS form.</a>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
