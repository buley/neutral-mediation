<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Self-Assessment Form</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Self-Assessment</h1>
	<p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScg8plrEczQJrD4fp_FZOEZszQoDNnZfeHidN5DTavAVLqrUw/viewform" border=0 style="width:100%;min-height:800px;">
	</p>
</div>