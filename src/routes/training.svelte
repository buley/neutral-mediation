<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Training</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Training</h1>
	<h2>Our Practice</h2>
	<p>
		Neutral Mediation offers flexibly-scheduled virtual training services for people and organizations. <em>Training sessions start at $1250 per day per participant.</em>
	</p>
	<h2>Our Value</h2>
	<p>
	</p>
	<h2>Training Services</h2>
	<h3>Mediation</h3>
	<p>
	</p>
	<h3>Training</h3>
	<p>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
