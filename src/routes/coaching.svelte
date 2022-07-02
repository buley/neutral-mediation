<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Session Structure</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h2>Coaching</h2>
	<h3>Mindfulness</h3>
	<h3>Check-in</h3>
	<h3>Plan</h3>
	<h3>Action Steps</h3>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
