<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Refund Policy</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Refund Policy</h3>
	<p>
		Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and, in that case, will refund all payments. It offers pro-rated refunds under certain conditions for recusal. Otherwise, there are no refunds for cancellation.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
