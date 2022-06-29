<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Template</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Documents</h1>

	<h3>Request Forms</h3>

	<h4>Mediation</h4>
	<ul>
		<li>Mediation Consultation Request Form</li>
	</ul>
	<h4>Negotiation</h4>
	<ul>
	<li>Negotiation Consultation Request Form</li>
	</ul>

	<h3>Questionnaires</h3>
	<ul>
	<li>Mediation Consultation Participant Questionnaire</li>
	<li>Mediation Participant Questionnaire</li>
	</ul>

	<h3>Legal Documents</h3>
	<ul>
	<li>Mediation Agreement</li>
	<li>Confidentiality Agreement</li>
	<li>Settlement Agreement</li>
	</ul>

	<h3>Examples</h3>
	<ul>
	<li>Example Mediation Engagement Letter</li>
	<li>Example Mediation Provisions</li>
	</ul>

	<p><em>Neutral Mediation’s EIN is 87-2105551. Click here for a downloadable W-9.</em></p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
