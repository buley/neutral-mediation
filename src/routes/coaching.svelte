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
	<h1>Coaching</h1>
	<h2>Our Practice</h2>
	<p>
		Neutral Mediation offers flexibly-scheduled virtual conflict coaching sessions led by a trained professional neutral. <em>Conflict coaching sessions cost $175 per hour per participant.</em> For mediation consulting, see our <a href="/consulting">consulting page</a>.
	</p>
	<h2>Our Value</h2>
	<p>
	</p>
	<h3>What Is Coaching?</h3>
	<h3>Benefits of Coaching</h3>
	<h3>Example Coaching Scenarios</h3>
	<h3>Pillars of Coaching</h3>
	<h4>Mindfulness</h4>
	<h4>Check-in</h4>
	<h4>Plan</h4>
	<h4>Action Steps</h4>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
