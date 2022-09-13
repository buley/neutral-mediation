<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Template</title>
	<meta name="description" content=""     />
	<!--
	<MetaTags
	  title="Using More of Config"
		titleTemplate = '%s | Svelte Meta Tags'
	  description="This example uses more of the available config options."
	  canonical="https://www.canonical.ie/"
	  openGraph={{
	    url: 'https://www.url.ie/a',
	    title: 'Open Graph Title',
	    description: 'Open Graph Description',
	    images: [
	      {
	        url: 'https://www.example.ie/og-image-01.jpg',
	        width: 800,
	        height: 600,
	        alt: 'Og Image Alt'
	      },
	      {
	        url: 'https://www.example.ie/og-image-02.jpg',
	        width: 900,
	        height: 800,
	        alt: 'Og Image Alt Second'
	      },
	      { url: 'https://www.example.ie/og-image-03.jpg' },
	      { url: 'https://www.example.ie/og-image-04.jpg' }
	    ],
	    site_name: 'SiteName'
	  }}
	  twitter={{
	    handle: '@handle',
	    site: '@site',
	    cardType: 'summary_large_image',
	    title: 'Using More of Config',
	    description: 'This example uses more of the available config options.',
	    image: 'https://www.example.ie/twitter-image.jpg',
	    imageAlt: 'Twitter image alt'
	  }}
	  facebook={{
	    appId: '1234567890'
	  }}
	/>
	-->
</svelte:head>

<div class="content">
	<h1>Who Mediators Are</h1>

	<p>Mediators are craftsmen at the art of compromise. They settle disputes with expertise, resolve, and creativity. Depending on the mediator they are either and simultaneously impartial and multipartial, facilitative or directive. A mediator is creative, collaborative, anchored and forward-looking.</p>
	
	<p>Problemsolving is an expertise derived from both a mediator's background, as well as training and practice. Mediation training typically takes places at Law School and mediators are usually, but not always, lawyers. Mediators are not licensed or regulated and vary in style and formality.</p>
	
	<p>Mediators strive to be:</p>

	<ul>
		<li>Empathetic</li>
		<li>Understanding</li>
		<li>Non-judgmental</li>
		<li>Validating of feelings but not facts</li>
		<li>Honest</li>
		<li>Accepting</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
