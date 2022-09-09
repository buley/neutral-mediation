<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Coaching Quotes</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Coaching Quotes</h1>
	<ul class="centered-list">
		<li><a href="/pages/quotes/emotion">Emotion</a></li>
		<li><a href="/pages/quotes/attitude">Attitude</a></li>
		<li><a href="/pages/quotes/reflection">Reflection</a></li>
		<li><a href="/pages/quotes/hope">Hope</a></li>
	</ul>
</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
