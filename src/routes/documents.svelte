<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Document & Forms</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Forms & Documents</h1>

	<h3>Client Forms</h3>

	<h4>Mediation</h4>
	<ul>
		<li>Mediation Consultation Request Form</li>
	</ul>

	<h4>Negotiation</h4>
	<ul>
		<li>Negotiation Consultation Request Form</li>
	</ul>

	<h4>Coaching</h4>
	<ul>
		<li><a href="/forms/arrogance">Arrogance Analysis</a></li>
		<li><a href="/forms/autopilot">Autopilot Analysis</a></li>
		<li><a href="/forms/coaching">Coaching Analysis</a></li>
		<li><a href="/forms/collaboration">Collaboration Analysis</a></li>
		<li><a href="/forms/communication">Communication Analysis</a></li>
		<li><a href="/forms/conflict">Conflict Analysis</a></li>
		<li><a href="/forms/goals">Goals Analysis</a></li>
		<li><a href="/forms/honesty">Honesty Analysis</a></li>
		<li><a href="/forms/layered">Layered Conflict Analysis</a></li>
		<li><a href="/forms/positive">Positive Conflict Analysis</a></li>
		<li><a href="/forms/role-reversal">Role-Reversal Analysis</a></li>
		<li><a href="/forms/self-assessment">Self-Assessment</a></li>
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

	<h3>Assessments</h3>
	<ul>
		<li>Mindset Assessment</li>
	</ul>

	<h3>Examples</h3>
	<ul>
		<li>Example Mediation Engagement Letter</li>
		<li>Example Mediation Provisions</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
