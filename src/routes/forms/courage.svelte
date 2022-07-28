<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Courage Analysis Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Courage Analysis</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmCJq6fYGEBbyal_UCYB166bKPBEqovGDlXEv9x72UmeFzfg/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>