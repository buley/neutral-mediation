<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Confidentiality</title>
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
      name: 'John Doe'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Google',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.jpg'
      }
    }
  }}
/>
	<MetaTags
	  title="Using More of Config"
		titleTemplate = '%s | />
Neutral Mediation'
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
	<h1>Confidentiality</h1>

	<p>To promote transparency in mediation, California law generally makes mediation a confidential process. In this context, the word confidential has legal weight and consequences. California's mediation confidentiality laws are laid out in Evidence Code sections <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=703.5.&amp;lawCode=EVID">703.5</a> and <a href="https://codes.findlaw.com/ca/evidence-code/evid-sect-1115.html">1115 to 1129</a>. Those laws establish the confidentiality of mediation and limit the disclosure, admissibility, and a court's consideration of communications, writings, and conduct in connection with a mediation. Generally, those laws mean the following:</p>

	<ul><li>All communications, negotiations, or settlement offers in the course of a mediation must remain confidential.</li><li>Statements made and writings prepared in connection with a mediation are not admissible or subject to discovery or compelled disclosure in noncriminal proceedings.</li><li>A mediator's report, opinion, recommendation, or finding about what occurred in a mediation may not be submitted to or considered by a court or another adjudicative body. </li><li>A mediator cannot testify in any subsequent civil proceeding about any communication or conduct occurring at, or in connection with, a mediation.</li></ul>
	
	<h2>Binding Mediated Agreements in California</h2>
	<p>Agreements during confidential sessions must be written to be legally-enforceable in some jurisdictions, including the state of California, where Neutral Mediation operates. The mediation settlement has to state explicitly that the signers intend the agreement to be legally binding, needs to include a clause for a settlement reciting all material terms, and, crucially, must include a clause for a settlement agreement to waive confidentiality for purposes of enforcement and interpretation. A binding agreement process can be delegated to counsel or facilitated by the neutral during the mediation.</p>

</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
