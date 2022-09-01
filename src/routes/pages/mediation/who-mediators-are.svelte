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

	<p>Mediators are craftsmen at the art of compromise. They settle disputes with expertise, resolve, and creativity.</p>
	
	<p>Their expertise is typically derived from training and practice. They are not licensed or regulated and. </p>
	
	<p>They are not admissible witnesses in most courts and strive to be:</p>
	
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
