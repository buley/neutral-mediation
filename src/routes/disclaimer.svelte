<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<sveltekit:head>
	<title>Disclaimer</title>
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
	    appId: '235420558425239'
	  }}
	/>
-->
</sveltekit:head>

<div class="content">
	<h1>Disclaimer</h1>
	<p>
		Neutral Mediation offers <a href="/mediation">mediation</a>, <a href="/negotiation">negotiation</a> and conflict <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">coaching</a>. It does <em>not</em> in any way offer legal advice or therapy.</p>
		<p>While Neutral Mediation works with a fastidious understanding of human behavior and American dispute resolution law, it believes in the possibility of an idyllic world that does not need therapists and lawyers. Neutral Mediation does not want to take the place of a lawyer, doctor, or other professional necessary in certain situations to stem and heal the trauma of conflict. Rather, it seeks to reduce the demand for these professionals' services by solving the conflict that creates this trauma in the first place.
	</p>
	<h3><em>Not</em> a Lawyer</h3>
	<p>
		Our neutrals are not licensed to practice law nor want to be lawyers. They are capable and willing to conduct arbitration hearings, but would only do so from the perspective of a dispute resolution expert and not a legal expert. <strong>Customers should not construe any aspect or element of coaching, training, consulting, negotiation, or mediation as legal advice.</strong>
	</p>
	<h3><em>Not</em> a Therapist</h3>
	<p>
		Therapy is not in the scope of coaching, mediation, consulting, or training. Neutral Mediation services are not for people coping with major depression, or any other mental issues -- individuals seeking mental help should consult a therapist. A dispute resolution professional can reduce and respond to trauma, however a therapist is a correct professional for healing past trauma, coping with traumatic loss, abuse, addiction, violence, or relationship tumult. A neutral cannot treat mental illness, clinical anxiety, or depression. <strong>Customers should not construe any aspect or element of coaching, training, consulting, negotiation, or mediation as therapeutic advice.</strong>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
