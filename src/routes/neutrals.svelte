<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
	import headshot from '$lib/assets/headshot.webp';
</script>

<svelte:head>
	<title>Neutrals</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Neutrals</h1>
	
	<h3>Neutral Bio</h3>

	<figure class="headshot">
		<img src="{headshot}" alt="Headshot of Taylor Buley.">
		<p><strong>Taylor Buley</strong>, <em>Neutral</em></p>
	</figure>

	<p>Taylor studied human choice and behavior in the Ivy League and has an undergraduate degree in Philosophy, Politics & Economics from Penn. He received a master’s degree in Communications from Stanford and studies at Pepperdine University’s Caruso School of Law, pursuing a master’s degree in Dispute Resolution.</p>

	<p>He's been proselytizing peacemaking through peer mediation since 1998. He's a life coach with certification in CBT, REBT and forgiveness. He's also a meditation and breathing instructor. Read his <a href="/resume">Resume</a> to see Taylor’s professional background as a journalist and software developer and work as a technology executive at a mid-sized, multimillion-dollar media company.</p>

	<p>Taylor explains Neutral Mediation’s practice and style in the mission and culture statements below. He also wants you to know about Neutral Mediation’s approach to <a href="/ethics">ethics</a>, <a href="/confidentiality">confidentiality</a> and <a href="/security">information security</a>. He outlines his <a href="/mediation">mediation</a>, <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">coaching</a> <a href="/process">processes</a> in detail.</p>

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
