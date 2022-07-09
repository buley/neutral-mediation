<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Negotiation</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">

	<h1>Negotiation</h1>

	<h2>Our Practice</h2>

	<p>
		Neutral Mediation offers flexibly-scheduled virtual negotiation sessions led by a trained professional neutral. <em>Negotiating sessions start at $400 per participant.</em> For negotiation training, see our <a href="/training">training page</a>. For negotiation consulting, see our <a href="/consulting">consulting page</a>. For more information about lunch stipends for full-day sessions, see our <a href="/prices">pricing page</a>.
	</p>
	
	<h2>Our Value</h2>
	
	<p>
		Neutrals facilitiate negotiations, either collaboratively with both parties present or through shuttle diplomacy, in order to minimize the trauma, time and expense of bargaining. Fast-forward the bargaining process in as little as one session. Feel relieved and trust a professionally-trained neutral to create a safe environment to hear and be heard.
	</p>
	
	<h2>Our Services</h2>

	<h3>Negotiation Sessions</h3>

	<p>
		Neutral-led virtual negotiation session for four or eight hours, optionally on-site at an organization. Consulting engagements are typically in regard to analyzing or planning for a specific negotiation or similar set of negotiations. <em>Four hour, half-day negotiation sessions cost $400 per participant. Eight hour, full-day negotiation sessions cost $750 per person.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/47dfc819-7d0d-4e36-b4e4-6eb47039a94e">Click here to book a negotiation session</a>.
	</p>

	<h3>Negotiation Consulting</h3>
	
	<p>
		Neutral-led virtual negotiation consulting session for one, four or eight hours, optionally on-site at an organization. Consulting engagements are typically in regard to analyzing or planning for a specific negotiation or similar set of negotiations. <em>Negotiation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/5eb4c115-1efc-478d-b908-69875ef1303d">Click here to book a negotiation consulting session</a>. See our <a href="/training">consulting page</a> for more information.
	</p>

	<h3>
		Negotiation Training
	</h3>

	<p>
		Neutral-led negotiation virtual training session for one, four or eight hours. Training can be course-guided education or specifically-focused training around a specific negotiation. <em>Eight-hour negotiation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/076b423b-4479-480d-8af1-09e3c7cfcdad">Click here to book a negotiation training session</a>. For more information on trainings, including course content, see our <a href="/training">training page</a>.
	</p>

	<h2>More Information</h2>

	<ul>
		<li a href="/pages/negotiation/what-is-negotiation">What Is Negotiation?</li>
		<li a href="/pages/negotiation/benefits-of-negotiation">Benefits of Negotiation</li>
		<li a href="/pages/negotiation/example-negotiation-scenarios">Example Negotiation Scenarios</li>
		<li a href="/pages/negotiation/limitations-of-negotiation">Limitations of Negotiation</li>
		<li a href="/pages/negotiation/pillars-of-negotiation">Pillars of Negotiation</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
