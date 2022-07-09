<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Example Coaching Scenarios</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Example Coaching Scenarios</h1>

	<p>Here are common problem areas where conflict coaching can help:</p>

	<ul>
		<li>Problems with skill development and a feeling of limitation.</li>
		<li>Problems with indecisiveness.</li>
		<li>Initiative problems.</li>
		<li>Fear and resistance.</li>
		<li>Challenges with focusing and meditation.</li>
		<li>Self-sabotage and procrastination.</li>
		<li>Negative self-talk or fixed mindset.</li>
		<li>Stress, anxiety, obsessive thinking, the feeling of being overwhelmed or out of control.</li>
	</ul>


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
