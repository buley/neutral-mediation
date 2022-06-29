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
	<h3>Refund Policy</h3>
	<p>
		A training or mediation session will not be considered fully scheduled until all parties complete the required paperwork and pay their participation fees, upon which a Mediation Engagement Letter is sent out and signed by all parties. If mediation is requested only by one party, Neutral Mediation will use participant-provided contact addresses to market mediation and attempt to convene all relevant (and requested) decision-makers.
	</p>
	<p>
		A session, training or can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement. A partially-scheduled mediation can also be rescheduled to an available date for $175, at any time up until seven calendar days before the engagement date.
	</p>
	<p>
		Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and in that case will refund all payments. Pro-rated refunds are offered under conditions for recusal. Otherwise, there are no refunds for cancellation.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
