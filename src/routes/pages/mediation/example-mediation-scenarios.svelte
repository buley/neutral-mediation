<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Example Mediation Scenarios</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Example Mediation Scenarios</h1>
	<p>Mediation is a quick, cheap option for negotiating monetary settlements; however, the usefulness of mediation generally grows with a problem's distance from money.<p>
	<p>Difficult, complex, and emotional issues are well within a mediator’s wheelhouse.</p>
	<p>Mediation may be a good choice in these difficult situations:</p>
	    <ul>
	        <li>Commercial disputes</li>
	        <li>Divorce cases</li>
	        <li>Contract negotiations</li>
	        <li>Parent planning</li>
	        <li>Business dissolution</li>
	        <li>Property disputes</li>
	        <li>Landlord and tenant disputes</li>
	        <li>Neighborhood conflicts</li>
	        <li>Workplace conflicts </li>
	        <li>Condominium association disputes</li>
	        <li>Contract issues</li>
	        <li>Employment disputes</li>
	        <li>Government public outreach</li>
	        <li>Insurance disputes</li>
	        <li>Nursing home concerns</li>
	        <li>Personal injury</li>
	        <li>Trusts and estates</li>
	        <li>Communication conflicts</li>
	    </ul>
	<p>
	    <a href="/pages/mediation/mediation-process">Read about the mediation process and learn what to expect.</a>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
