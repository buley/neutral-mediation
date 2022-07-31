<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Honesty Analysis Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Honesty Analysis</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0iKMi_JTV_SPz59HCZ_XbCLoJuu5SOs6Y29AOnmzVmmw_Dw/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>