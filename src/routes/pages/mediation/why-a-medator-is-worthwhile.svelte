<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Why is a mediator worthwhile?</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Why a Mediator Is Worthwhile</h1>
	
	<p>Hosts a faster less expensive and more satisfactory experience.</p>
	
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
