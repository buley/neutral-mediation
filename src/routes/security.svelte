<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<sveltekit:head>
	<title>Information Security</title>
	<meta name="description" content="" />
	<!--
	<JsonLd
  schema={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://example.com/article'
    },
    headline: 'Article headline',
    image: [
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg'
    ],
    datePublished: '2015-02-05T08:00:00+08:00',
    dateModified: '2015-02-05T09:20:00+08:00',
    author: {
      '@type': 'Person',
      name: 'Taylor Buley'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neutral Mediation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.jpg'
      }
    }
  }}
/>
	<MetaTags
	  title="Using More of Config"
		titleTemplate = '%s | Neutral Mediation'
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
	    site_name: 'Neutral Mediation'
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
	    appId: '235420558425239'
	  }}
	/>
-->
</sveltekit:head>

<div class="content">
	<h3>Information Security</h3>
	<p>We actively seek to ensure the confidentiality of our practice by using modern and trusted technologies that encrypt and authenticate correspondence. </p>
	<p>All website traffic on neutrals.io is served through secure HTTP connections encrypted and using SSL.</p>
	<p>Neutral Mediation uses Google to encrypt its email and video communications. We mitigate the possibility of email spoofing by using DKIM to certify correspondence. We authenticate our domain using SPF and DMARC records, too, so when an email appears to come from https://neutrals.io there are multiple ways to verify its provenance. </p>
	<p>Upon request and, with collaboration between neutral and participant, any non-streaming correspondence can be encrypted using GPG. The public key <a href="https://neutrals.io/key/">is published online</a>.</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
