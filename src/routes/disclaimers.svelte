<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Disclaimers</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Disclaimers</h1>
	<h2>What We Do</h2>
	<p>
		Neutral Mediation offers <a href="/mediation">mediation</a>, <a href="/negotiation">negotiation</a> and conflict <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">coaching</a>. It does <em>not</em> in any way offer any legal advice or therapy. In fact, Neutral Mediation aims to decrease the demand for therapy and legal services. It works with a fastidious understanding of human behavior and American dispute resolution law, but believes in the possibility of a idyllic world that has no need for therapists and lawyers.
	</p>
	<h2><em>Not</em> a Lawyer</h2>
	<p>
		Our neutrals are not licensed to practice law nor want to be lawyers. They are fully-capable and willing to conduct arbitrations, but would only do so from the perspective of a dispute resolution expert and not a legal expert. No coaching, training, consulting or mediation should be construed as legal advice.
	</p>
	<h2><em>Not</em> a Therapist</h2>
	<p>
		A dispute resolution professional can reduce and respond to trauma but a therapist is the correct professional for healing past trauma, coping with traumatic loss, abuse, addiction, violence or relationship tumult. A neutral cannot treat mental illness, clinical anxiety or depression. No coaching, training, consulting or mediation should be construed as theraputic advice.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
