<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Coaching Discovery Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Coaching Discovery</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7O2O-oMPwiyoZEfEILCBMt_yfRVBo-SfL5aRdU-oN8TbBDg/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>