<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Session Structure</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Coaching</h1>
	<h2>Our Practice</h2>
	<p>
		Neutral Mediation offers flexibly-scheduled virtual conflict coaching sessions led by a trained professional neutral. <em>Conflict coaching sessions cost $175 per hour per participant.</em> For mediation services, see our <a href="/mediation">mediation page</a>. For mediation and negotiation training, see our <a href="/training">training page</a>. For mediation, negotiation and conflict consulting, see our <a href="/consulting">consulting page</a>.
	</p>
	<h2>Our Value</h2>
	<p>
		Coaching can help you be more positive and reduce negative emotions. It empowers you to feel more confident and make hard more decisions more rationally. With the help of a third-party, you can learn to minimize anxiety and worrying, stop self-sabotaging behaviors, and end procrastination. Manage anger and cope with stressful emotions better under the help and accountability of a trained coaching professional dedicated to your progress.
	</p>
	<p>
		Our netural is a master communicator, mediator and negotiator. He is a certified life coach with training in Cognitive Behavioral Therpahy (CBT) and Rational Emotive Behavior Theraputic (REBT) techniques.
	</p>
	<h3>What Is Coaching?</h3>
	<h3>Benefits of Coaching</h3>
	<h3>Example Coaching Scenarios</h3>
	<h3>Pillars of Coaching</h3>
	<h4>Mindfulness</h4>
	<h4>Check-in</h4>
	<h4>Plan</h4>
	<h4>Action Steps</h4>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
