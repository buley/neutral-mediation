<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Availability</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h2>Availability</h2>
	<h3>Mediation</h3>
	<ul>
	    <li>Meditation Training – Wednesdays</li>
	    <li>One-Hour Mediation Consultation – Thursdays</li>
	    <li>Two-Person Half-Day Mediation – Sundays</li>
	    <li>Four-Person Half-Day Mediation – Sundays</li>
	    <li>Two-Person Full-Day Mediation – Sundays</li>
	    <li>Four-Person Full-Day Mediation – Sundays</li>
    </ul>
	<h3>Negotiation</h3>
	<ul>
	    <li>Negotiation Training – Wednesdays</li>
    	<li>One-Hour Negotiation Consultation – Fridays</li>
    	<li>Half-Day Negotiation – Sundays</li>
	</ul>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
