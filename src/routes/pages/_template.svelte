<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Template</title>
	<meta name="description" content="What is mediation?" />
</svelte:head>

<div class="content">
	<h1>Template</h1>
	<p>
		Lipsum
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
