<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>What Mediation Is</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>What Mediation Is</h1>
	<p>
		Mediation is the art of problem-solving: a structured dispute resolution process that creates a safe setting for adults to brainstorm creative and mutually workable solutions to the problems that keep them from otherwise moving forward in life. Using collaborative conflict, a mediator facilitates mediation to help participants find peaceful resolutions, fast. Mediation is less formal than alternative methods of dispute resolution, such as arbitration and litigation, and usually takes one day or less to find an agreeable solution.
	</p>
	<p>
		Mediation is not legally binding. Agreements resulting from mediation can be written to be enforceable, but otherwise, the process is, by default, private and confidential, unlike the public courts. <a href="/pages/mediation/mediation-confidentiality">Click here to read more about mediation confidentiality</a>. In short, almost always, no information sourced from mediation is admissible in court and a mediator is, almost always, ineligible to become a witness.
	</p>
	<p>
		Unlike litigation and arbitration, resolution during mediation is completely within the control of the participants, rather than up to the whims of third-party judges or juries. Also unlike arbitration and ligation, mediation helps to address the emotional issues that so often underpin discord, bringing much-needed healing and closure and, overall, more satisfaction — in no small part due to the participatory nature of the mediated resolution, rather than compelled outcomes through arbitration or litigation. Like litigation, but often faster, mediation allows for legally binding, monetary solutions; however, mediation is also a place for parties to explore, with the help of a mediator, creative and non-monetary options to negotiated situations.
	</p>
	<p>
		<a href="/ethics">Read our ethics for Neutral Mediation’s views on the importance of neutrality and self-determination in mediation.</a>
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
