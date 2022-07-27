<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Communication Analysis Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Communication Analysis</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmyejcc746eZ6N4WT_k1HnQjbM3aKC_SCO-eH_GXCN3pM0uQ/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>