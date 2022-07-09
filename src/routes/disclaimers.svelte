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
	<p>
		Neutral Mediation offers <a href="/mediation">mediation</a>, <a href="/negotiation">negotiation</a> and conflict <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">coaching</a>. It does <em>not</em> in any way offer any legal advice or therapy. In fact, Neutral Mediation aims to decrease the demand for therapy and legal services. It works with a fastidious understanding of human behavior and American dispute resolution law, but believes in the possibility of a idyllic world that has no need for therapists and lawyers. Neutral Mediation does not want to take the place of a lawyer or doctor, professionals that are necessary in certain situations to stem and heal the trauma of conflict; rather, it wants to reduce the demand for these professionals' services by solving the systemic disputes that create conflict in the first place.
	</p>
	<h3><em>Not</em> a Lawyer</h3>
	<p>
		Our neutrals are not licensed to practice law nor want to be lawyers. They are fully-capable and willing to conduct arbitrations, but would only do so from the perspective of a dispute resolution expert and not a legal expert. <strong>No aspect of coaching, training, consulting, neogotiation or mediation should be construed as legal advice.</strong>
	</p>
	<h3><em>Not</em> a Therapist</h3>
	<p>
		Therapy is not in the scope of coaching, mediation, consulting or training. Neutral Mediation's services are not meant for people coping with depression, or any other mental issues -- individuals seeking mental help should consult a therapist. A dispute resolution professional can reduce and respond to trauma but a therapist is the correct professional for healing past trauma, coping with traumatic loss, abuse, addiction, violence or relationship tumult. A neutral cannot treat mental illness, clinical anxiety or depression. <strong>No aspect of coaching, training, consulting, neogotiation or mediation should be construed as theraputic advice.</strong>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
