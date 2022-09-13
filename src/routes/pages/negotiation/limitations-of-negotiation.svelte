<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Limitations of Negotiation</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Limitations of Negotiation</h3>
	<p>We're sorry for the inconvenience because this content is not yet available.</p>

<!--	<p>
		Body
	</p>
-->
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
