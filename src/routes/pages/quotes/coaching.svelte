<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Useful Coaching Quotes</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Useful Coaching Quotes</h1>
	<ul class="centered-list">
		<li><a href="/pages/quotes/attitude">Useful Attitude Coaching Quotes</a></li>
		<li><a href="/pages/quotes/emotion">Useful Emotion Coaching Quotes</a></li>
		<li><a href="/pages/quotes/forgiveness">Useful Forgiveness Coaching Quotes</a></li>
		<li><a href="/pages/quotes/hope">Useful Hope Coaching Quotes</a></li>
		<li><a href="/pages/quotes/civics">Useful Civics Coaching Quotes</a></li>
		<li><a href="/pages/quotes/reflection">Useful Reflection Coaching Quotes</a></li>
		<li><a href="/pages/quotes/storytelling">Useful Storytelling Coaching Quotes</a></li>
	</ul>
</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
