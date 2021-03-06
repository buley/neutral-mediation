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
		<p><strong>Taylor Buley</strong></p>
	</figure>

	<p>At Penn, Taylor studied human choice and behavior earned an undergraduate degree in Philosophy, Politics and Economics. At Stanford, he received a master’s degree in Communications. At Pepperdine's Caruso School of Law, he studies dispute resolution.</p>

	<p>Taylor started coaching peers in mediation at age 14. He is a certified life coach with training in Cognitive Behaviorial Theory (CBT) and Rational Emotional Behavioral Theory (REBT). Taylor teaches meditation and breathing practice. He specializes in empathy, deescalation and forgiveness.</p>

	<p>Neutral Mediation’s practice and style are expressed in its <a href="/about">mission</a> and <a href="/about">culture statements</a>. See also its approach to <a href="/ethics">ethics</a>, <a href="/pages/mediation/mediation-confidentiality">confidentiality</a> and <a href="/security">information security</a>. He outlines his <a href="/mediation">mediation</a>, <a href="/negotiation">negotiation</a>, <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">conflict coaching</a> processes in detail.</p>

	<p>Taylor has worked for the White House Council of Economic Advisors, reason magazine, The Wall Street Journal and was a staff writer at Forbes Magazine. His work has been featured on MSNBC, CNN and C-SPAN and in the New York Times Magazine. Today he works as a media technology executive. Read his <a href="/resume">resume</a> to see Taylor’s full history as an executive, board member and volunteer.</p>


	<h4>More Information</h4>

	<ul>
		<li><a href="/pages/mediation/who-mediators-are">Who Mediators Are</a></li>
		<li><a href="/pages/mediation/how-to-involve-a-neutral">How to Involve a Mediator</a></li>
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
