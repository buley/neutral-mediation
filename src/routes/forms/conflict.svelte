<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Conflict Analysis Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Conflict Analysis</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegjktXgOVknEC-zcgfGfB9hjidZaViAuEB-V9WByqv4Jxa3Q/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>