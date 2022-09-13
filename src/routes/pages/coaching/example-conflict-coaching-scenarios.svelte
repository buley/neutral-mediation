<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Example Conflict Coaching Scenarios</title>
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
	<h1>Example Conflict Coaching Scenarios</h1>

	<p>Here are common problem areas where conflict coaching can help:</p>

	<ul>
		<li>Problems with skill development and a feeling of limitation.</li>
		<li>Problems with indecisiveness.</li>
		<li>Initiative problems.</li>
		<li>Fear and resistance.</li>
		<li>Challenges with focusing and meditation.</li>
		<li>Self-sabotage and procrastination.</li>
		<li>Negative self-talk or fixed mindset.</li>
		<li>Stress, anxiety, obsessive thinking, the feeling of being overwhelmed or out of control.</li>
	</ul>


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
