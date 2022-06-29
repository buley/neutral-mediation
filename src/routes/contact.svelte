<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h2>Contact</h2>
			
	<h3>Phone/Text Number</h3>
	<p>(650) 353-7653</p>
	<h3>Email Address</h3>
	<p>info@neutrals.io</p>
	<h3>Mailing Address</h3>
	<p>PO Box 73444<br>
	Davis, CA 95617-3444</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
