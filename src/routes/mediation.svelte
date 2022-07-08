<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Mediation</title>
	<meta name="description" content="What is mediation?" />
</svelte:head>

<div class="content">
	<h1>Mediation</h1>

	<h2>Our Practice</h2>

	<p>
		Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral. <em>Mediation sessions start at $400 per participant.</em> For mediation consulting, see our <a href="/consulting">consulting page</a>. For more information about lunch stipends for full-day sessions, see our <a href="/prices">pricing page</a>.
	</p>

	<h2>Our Value</h2>

	<p>
		Neutral Mediation helps customers move forward beyond emotional or complex conflict through confidential mediation sessions hosted virtually. Overcome indecision and end the trauma of conflict in as little as one session. Feel relieved and trust a professionally-trained neutral to create a safe environment to hear and be heard.
	<p>

	<h2>Our Services</h2>

	<h3>Mediation Sessions</h3>

	<p>Neutral-led virtual mediation session for four or eight hours, optionally on-site at an organization. Mediation engagements are typically in regard to engineering internal mediation processes as a form of risk management. <em>Four hour, half-day mediation sessions cost $400 per participant. Eight hour, full-day mediation sessions cost $750 per person.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/e22010b4-e7df-49d8-a1db-0355e57895eb">Click here to book a mediation session</a>.</p>

	<h3>Mediation Consulting</h3>

	<p>Neutral-led virtual mediation consulting session for one, four or eight hours, optionally on-site at an organization. Mediation engagements are typically in regard to community facilitation, collaborative discussion, or designing internal mediation processes for risk management. <em>Mediation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/sbcc6e0750eb25cc175571dd6570a5adc80e1aa1e">Click here to book a consulting session</a>. For more information, see our <a href="/consulting">consulting page</a>.</p>

	<h3>Mediation Training</h3>

	<p>
		Neutral-led eight-hour virtual mediation training session. Training is course-guided education. <em>Eight-hour mediation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/37f300fe-158e-4963-8dac-bf092187ab1a">Click here to book a mediation training session</a>. For more information on trainings, including course content, see our <a href="/training">training page</a>.
	</p>

	<h3>More Information</h3>

	<ul>
		<li><a href="/pages/mediation/what-is-mediation">What is mediation?</li>
		<li><a href="/pages/mediation/benefits-of-mediation">Benefits of mediation</li>
		<li><a href="/pages/mediation/example-mediation-scenarios">Example mediation scenarios</li>
		<li><a href="/pages/mediation/pillars-of-mediation">Pillars of mediation</li>
		<li><a href="/pages/mediation/limits-of-mediation">Limits of mediation</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
