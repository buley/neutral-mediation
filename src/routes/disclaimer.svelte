<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Disclaimer</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Disclaimer</h1>
	<p>
		Neutral Mediation offers <a href="/mediation">mediation</a>, <a href="/negotiation">negotiation</a> and conflict <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">coaching</a>. It does <em>not</em> in any way offer legal advice or therapy.</p>
		<p>While Neutral Mediation works with a fastidious understanding of human behavior and American dispute resolution law, it believes in the possibility of an idyllic world that does not need therapists and lawyers. Neutral Mediation does not want to take the place of a lawyer, doctor, or other professional necessary in certain situations to stem and heal the trauma of conflict. Rather, it seeks to reduce the demand for these professionals' services by solving the conflict that creates this trauma in the first place.
	</p>
	<h3><em>Not</em> a Lawyer</h3>
	<p>
		Our neutrals are not licensed to practice law nor want to be lawyers. They are capable and willing to conduct arbitration hearings, but would only do so from the perspective of a dispute resolution expert and not a legal expert. <strong>Customers should not construe any aspect or element of coaching, training, consulting, negotiation, or mediation as legal advice.</strong>
	</p>
	<h3><em>Not</em> a Therapist</h3>
	<p>
		Therapy is not in the scope of coaching, mediation, consulting, or training. Neutral Mediation services are not for people coping with major depression, or any other mental issues -- individuals seeking mental help should consult a therapist. A dispute resolution professional can reduce and respond to trauma, however a therapist is a correct professional for healing past trauma, coping with traumatic loss, abuse, addiction, violence, or relationship tumult. A neutral cannot treat mental illness, clinical anxiety, or depression. <strong>Customers should not construe any aspect or element of coaching, training, consulting, negotiation, or mediation as therapeutic advice.</strong>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
