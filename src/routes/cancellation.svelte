<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Cancellation Policy</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Cancellation Policy</h3>
	<p>
		Schedules are tight and abrupt cancellations can come at the opportunity cost of solving other customer's problems. A session or training can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement.
	</p>
	<p>
		A mediation session will not be considered fully-scheduled until all parties complete the required paperwork and pay their participation fees, upon which a Mediation Engagement Letter is sent out and signed by all parties. A partially-scheduled meditation can similarly be rescheduled for a fee, up until seven calendar days before the engagement date.
	</p>
	<p>
		Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and in that case will refund all payments. There are no refunds on canceled sessions and training except in the very narrow circumstances defined in the <a href="/refunds">refund policy</a>.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
