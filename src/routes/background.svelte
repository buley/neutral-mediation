<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
	import headshot from '$lib/assets/headshot.webp';
</script>

<svelte:head>
	<title>Neutral</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Background</h1>
	
	<h3>Bio</h3>

	<figure class="headshot">
		<img src="{headshot}" alt="Headshot of Taylor Buley.">
		<p><strong>Taylor Buley</strong>, <em>Neutral</em></p>
	</figure>

	<p>Taylor has focused his career on improving individual choices through improved information.</p>

	<p>In the Ivy League, he studied human choice and behavior and earned an undergraduate degree from Penn in Philosophy, Politics and Economics. He received a master’s degree in Communications from Stanford and studies dispute resolution at Pepperdine's Caruso School of Law.</p>

	<p>He's been teaching peer mediation since 1998. Today, he's a certified coach with experience in CBT, REBT, empathy and forgiveness. He teaches meditation and breathing. Read his <a href="/resume">Resume</a> to see Taylor’s professional background as a journalist, programmer and media executive.</p>

	<p>Taylor explains Neutral Mediation’s practice and style in the mission and culture statements below. He also wants you to know about Neutral Mediation’s approach to <a href="/ethics">ethics</a>, <a href="/pages/mediation/mediation-confidentiality">confidentiality</a> and <a href="/security">information security</a>. He outlines his <a href="/mediation">mediation</a>, <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">coaching</a> processes in detail.</p>

	<h4>More Information</h4>

	<ul>
		<li><a href="/pages/mediation/who-mediators-are">Who Mediators Are</a></li>
		<li><a href="/pages/mediation/how-to-involve-a-neutral">How to Unvolve a Mediator</a></li>
		<li><a href="/pages/mediation/how-mediators-add-value">How Mediators Add Value</a></li>
		<li><a href="/pages/mediation/what-a-mediator-does">What a Mediator Does</a></li>
		<li><a href="/pages/mediation/how-mediators-add-value">Why a Mediator Is Worthwhile</a></li>
	</ul>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
