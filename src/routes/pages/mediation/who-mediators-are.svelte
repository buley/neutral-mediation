<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Template</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Who Mediators Are</h1>

	<p>Mediators are craftsmen at the art of compromise. They settle disputes with expertise, resolve, and creativity. Depending on the mediator they are either and simultaneously impartial and multipartial, facilitative or directive. A mediator is creative, collaborative, anchored and forward-looking.</p>
	
	<p>Problemsolving is an expertise derived from both a mediator's background, as well as training and practice. Mediation training typically takes places at Law School and mediators are usually, but not always, lawyers. Mediators are not licensed or regulated and vary in style and formality.</p>
	
	<p>Mediators strive to be:</p>

	<ul>
		<li>Empathetic</li>
		<li>Understanding</li>
		<li>Non-judgmental</li>
		<li>Validating of feelings but not facts</li>
		<li>Honest</li>
		<li>Accepting</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
