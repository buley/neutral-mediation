<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Conflict Coaching</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Conflict Coaching</h1>
	<h2>Our Practice</h2>
	<p>
		Neutral Mediation offers flexibly-scheduled virtual conflict coaching sessions led by a trained professional neutral. <em>Conflict coaching sessions cost $175 per hour per participant.</em> For neutral-led mediation sessions, see our <a href="/mediation">mediation page</a>. For neutral-led negotiation sessions, see our <a href="/mediation">mediation page</a>. For mediation and negotiation training, see our <a href="/training">training page</a>. For mediation, negotiation and conflict consulting, see our <a href="/consulting">consulting page</a>.
	</p>
	<h2>Our Value</h2>
	<p>
		Coaching can help you be more positive and reduce negative emotions. It empowers you to feel more confident and make hard more decisions more rationally. With the help of a third-party, you can learn to minimize anxiety and worrying, stop self-sabotaging behaviors, and end procrastination. Manage anger and cope with stressful emotions better under the help and accountability of a trained coaching professional dedicated to your progress.
	</p>

	<h2>Our Services</h2>

	<h3>Coaching Sessions</h3>

	<p>Neutral-led virtual conflict coaching session. <em>One hour sessions cost $175 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/4785a25f-b9e0-44d4-828d-40ec2236c7d0">Click here to book a conflict coaching session</a>.</p>

	<h3>More Information</h3>

	<ul>
		<li><a href="/pages/coaching/what-is-conflict-coaching">What Conflict Coaching Is</a></li>
		<li><a href="/pages/coaching/benefits-of-conflict-coaching">Benefits of Conflict Coaching</a></li>
		<li><a href="/pages/coaching/example-conflict-coaching-scenarios">Example Conflict Coaching Scenarios</a></li>
		<li><a href="/pages/coaching/limitations-of-conflict-coaching">Limitations of Conflict Coaching</a></li>
		<li><a href="/pages/coaching/pillars-of-conflict-coaching">Pillars of Conflict Coaching</a></li>
		<li><a href="/pages/coaching/conflict-coaching-process">Conflict Coaching Process</a></li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
