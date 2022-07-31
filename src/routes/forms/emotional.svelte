<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Emotional Analysis Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Emotional Analysis</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8uzawnJQMarzp0vGu-_MjpmY17asHf_vPMxcvWWM5rldVVw/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>