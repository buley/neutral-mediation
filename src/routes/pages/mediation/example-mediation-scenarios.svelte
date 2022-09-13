<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Example Mediation Scenarios</title>
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
	<h1>Example Mediation Scenarios</h1>
	<p>Mediation is a quick, cheap option for negotiating monetary settlements; however, the usefulness of mediation generally grows with a problem's distance from money.<p>
	<p>Difficult, complex, and emotional issues are well within a mediator’s wheelhouse.</p>
	<p>Mediation may be a good choice in emotionally-triggering situations like these:</p>
	    <ul>
	        <li>Commercial disputes</li>
	        <li>Divorce cases</li>
	        <li>Contract negotiations</li>
	        <li>Parent planning</li>
	        <li>Business dissolution</li>
	        <li>Property disputes</li>
	        <li>Landlord and tenant disputes</li>
	        <li>Neighborhood conflicts</li>
	        <li>Workplace conflicts</li>
	        <li>Condominium association disputes</li>
	        <li>Contract issues</li>
	        <li>Employment disputes</li>
	        <li>Government public outreach</li>
	        <li>Insurance disputes</li>
	        <li>Nursing home concerns</li>
	        <li>Personal injury</li>
	        <li>Trusts and estates</li>
	        <li>Communication conflicts</li>
	    </ul>
	<p>
	    <a href="/pages/mediation/mediation-process">Read about the mediation process and learn what to expect.</a>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
