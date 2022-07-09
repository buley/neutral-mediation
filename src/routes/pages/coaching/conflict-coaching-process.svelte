<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Conflict Coaching Process</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Conflict Coaching Process</h1>

	<p>
		Weekly, fortnightly or monthly sessions are regular. Long-term coaching sometimes involves homework such as exercises or journaling.
	</p>
	
	<p>
		A regular coaching session may follow the following structure:
	</p>
	
	<ul class="numbered-list">
		<li>Check-in for an update on changes and progress since last session, including reviewing any homework or follow-up exercises.</li>
		<li>Reassess goals and other desired outcomes.</li>
		<li>Determine the reality gap: the distance between where the client is today and where they want to be.</li>
		<li>Brainstorm options, explore solutions and incremental action steps that are available.</li>
		<li>Plan on and agree to certain action steps.</li>
		<li>Assign any homework and follow-up exercises.</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
