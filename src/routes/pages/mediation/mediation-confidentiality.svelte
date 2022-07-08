<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Confidentiality</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Confidentiality</h1>

	<p>To promote transparency in mediation, California law generally makes mediation a confidential process. California's mediation confidentiality laws are laid out in Evidence Code sections <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=703.5.&amp;lawCode=EVID">703.5</a> and <a href="https://codes.findlaw.com/ca/evidence-code/evid-sect-1115.html">1115 to 1129</a>. Those laws establish the confidentiality of mediation and limit the disclosure, admissibility, and a court's consideration of communications, writings, and conduct in connection with a mediation. Generally, those laws mean the following:</p>

	<ul><li>All communications, negotiations, or settlement offers in the course of a mediation must remain confidential.</li><li>Statements made and writings prepared in connection with a mediation are not admissible or subject to discovery or compelled disclosure in noncriminal proceedings.</li><li>A mediator's report, opinion, recommendation, or finding about what occurred in a mediation may not be submitted to or considered by a court or another adjudicative body. </li><li>A mediator cannot testify in any subsequent civil proceeding about any communication or conduct occurring at, or in connection with, a mediation.</li></ul>
	
	<h2>Binding Mediated Agreements in California</h2>
	<p>Agreements during confidential sessions be written to be legally enforceable in some jurisdictions, including California. The agreement has to state explicitly that the agreement is intended to be “legally binding” (or words to that effect), include a clause for a settlement recite all material terms, and, crucially, nclude a clause for a settlement agreement to wave confidentiality for purposes of enforcement and interpretation.</p>

</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
