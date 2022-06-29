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
		A session, training or can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement. A training or mediation session will not be considered fully scheduled until all parties complete the required paperwork and pay their participation fees, upon which a Mediation Engagement Letter is sent out and signed by all parties. A partially-scheduled meditation can similarly be rescheduled for a fee, up until seven calendar days before the engagement date. There are no refunds on <a href="/cancellations">canceled</a> sessions and training except in the narrow circumstances defined in the <a href="/refunds">refund policy</a>.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
