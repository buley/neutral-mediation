<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Consulting</title>
	<meta name="description" content="About Neutral Mediation conflict consulting services." />
</svelte:head>

<div class="content">
	
	<h1>Consulting</h1>
	
	<h2>Our Practice</h2>
	<p>
		Neutral Mediation offers flexibly-scheduled virtual consulting services for people and organizations. <em>Consulting sessions start at $175 per hour per participant.</em> For neutral-led mediation sessions, see our <a href="/mediation">mediation page</a>. For neutral-led negotiation sessions, see our <a href="/negotiation">negotiation page</a>.
	</p>
	<h2>Our Value</h2>
	<p>
		A consultant spares emotional trauma, time and expense associated with organizational conflict resolution.
	</p>

	<h2>Our Services</h2>

	<h3>Conflict Consulting</h3>

	<p>Neutral-led conflict virtual training session for one, four or eight hours, optionally on-site at an organization. Conflict consulting engagements are typically focused on addressing organizational systems that generate chronic conflict. <em>Eight-hour negotiation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://neutral.setmore.com/">Click here to book a conflict consultation</a></p>

	<h3>Mediation Consulting</h3>

	<p>Neutral-led virtual mediation consulting session for one, four or eight hours, optionally on-site at an organization. Mediation engagements are typically in regard to engineering internal mediation processes as a form of risk management. <em>Mediation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/sbcc6e0750eb25cc175571dd6570a5adc80e1aa1e">Click here to book a consulting session</a>. For neutral-led mediation sessions, see our <a href="/mediation">mediation page</a>.</p>

	<h3>Negotiation Consulting</h3>
	
	<p>Neutral-led virtual negotiation consulting session for one, four or eight hour, optionally on-site at an organization. Consulting engagements are typically in regard to analyzing or planning for a specific negotiation or similar set of negotiations. <em>Negotiation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/5eb4c115-1efc-478d-b908-69875ef1303d">Click here to book a negotiation consulting session</a>.</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
