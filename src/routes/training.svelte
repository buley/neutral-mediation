<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Training</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Training</h1>
	<h2>Our Practice</h2>
	<p>
		Neutral Mediation offers flexibly-scheduled virtual training and practice for people and organizations, optionally on-site at an customer facility. <em>Training sessions start at $1250 per day per participant.</em>
	</p>
	<h2>Our Value</h2>
	<p>
	</p>
	<h2>Training Services</h2>
	<h3>Mediation</h3>
	<p>
		Mediation training covers theory and practice with mediation protocol, openings, information exchanges and dealmaking. It trains individuals to become confident third-party neutrals capable of leading peer mediation.
	</p>
	<h3>Negotiation</h3>
	<p>
		Negotiation training covers negotiation theory and practice. It covers common negotiation styles, positional and interest-based bargaining, negotiation leverage and principles, cognitive factors in negotiation, emotions, ethics and group bargaining. It trains invididuals to become negotiators who maximize value for all concerned.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
