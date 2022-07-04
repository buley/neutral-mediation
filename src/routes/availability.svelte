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
	<p>Here's a list of what services are available when. Neutral Mediation's <a href="https://neutral.setmore.com/">booking schedule</a> is based around netural availability and the necessary length of the session.</p>
	<h3>Conflict</h3>
	<ul>
	    <li>Conflict Coaching – Monday through Friday</li>
	</ul>
	<h3>Conflict Coaching</h3>
	<ul>
	    <li>Conflict Coaching – Monday through Friday</li>
	</ul>
	<h3>Mediation</h3>
	<ul>
	    <li>Mediation Consultations – Monday through Friday</li>
	    <li>Half-Day Mediations – Saturdays & Sundays</li>
	    <li>Full-Day Mediations – Saturdays & Sundays</li>
	    <li>Meditation Trainings – Saturdays & Sundays</li>
    </ul>
	<h3>Negotiation</h3>
	<ul>
    	<li>Negotiation Consultations – Monday through Friday</li>
    	<li>Half-Day Negotiations – Saturdays & Sundays</li>
    	<li>Full-Day Negotiations – Saturdays & Sundays</li>
	    <li>Negotiation Trainings – Saturdays & Sundays</li>
	</ul>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
