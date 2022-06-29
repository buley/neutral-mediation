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
	<h3>Press</h3>
	<p>
		<em>Neutrals are available for comment on the topics of communication, negotiation, mediation and arbitration. For press inquiries, please contact <a href="mailto:info@neutrals.io">info@neturals.io</a>.</em>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
