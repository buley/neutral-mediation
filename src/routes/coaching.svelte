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

	<h2>More Information</h2>

	<ul>
		<li a href="/pages/coaching/what-is-conflict-coaching">What Is Conflict Coaching?</li>
		<li a href="/pages/coaching/benefits-of-conflict-coaching">Benefits of Conflict Coaching</li>
		<li a href="/pages/coaching/example-conflict-coaching-scenarios">Example Conflict Coaching Scenarios</li>
		<li a href="/pages/coaching/limitations-of-conflict-coaching">Limitations of Conflict Coaching</li>
		<li a href="/pages/coaching/pillars-of-conflict-coaching">Pillars of Conflict Coaching</li>
	</ul>


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
