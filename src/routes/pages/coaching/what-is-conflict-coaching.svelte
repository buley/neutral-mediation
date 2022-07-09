<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>What Conflict Coaching Is</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>What Conflict Coaching Is</h1>

	<p>
		A conflict coach helps individuals move beyond the conflicts that prevent them from reaching their true potential in terms of peaceful happiness.  There are a number of coaching models but most revolve around personal growth through goals and accountability. A coach helps people develop specific, measurable, attainable, realstic and time-bound goals for themselves. 
	</p>
	
	<p>
		Like a building a muscle, a change in behavior is not immediate and takes work. Results are typically seen within three weeks. 
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
