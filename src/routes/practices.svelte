<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Template</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h2>Practices</h2>
	<h3>Onboarding</h3<
	<h4>Mediation</h4>
	<h4>Consulting</h4>
	<h4>Coaching</h4>
	<h4>Training</h4>
	<h3>Virtual</h3>
	<h3>Boundaries</h3>
	<h3>State of Mind</h3>
	<h3>Formality</h3>
	<h3>Dress Code</h3>
	<h3>Timeliness</h3>
	<h3>Eye Contact</h3>
	<h3>Good Faith</h3>
	<h3>Emotional Vulnerability</h3>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
