<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<sveltekit:head>
	<title>What Mediation Is</title>
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
	<h1>What Mediation Is</h1>
	<p>
		Mediation is the art of problem-solving: a structured dispute resolution process that creates a safe setting for adults to explore vulnerabilites and brainstorm creative and mutually workable solutions to the problems that keep them from otherwise moving forward in life. Using collaborative conflict, a mediator facilitates mediation to help participants find peaceful resolutions, fast. Mediation is less formal than alternative methods of dispute resolution, such as arbitration and litigation, and usually takes just hours to find an agreeable solution.
	</p>
	<p>
		Mediation is not legally binding. Agreements resulting from mediation can be written to be enforceable, but otherwise, the process is, by default, private and confidential, unlike the public courts. <a href="/pages/mediation/mediation-confidentiality">Click here to read more about mediation confidentiality</a>. In short, almost always, no information sourced from mediation is admissible in court and a mediator is, almost always, ineligible to become a witness.
	</p>
	<p>
		Unlike litigation and arbitration, resolution during mediation is completely within the control of the participants, rather than up to the whims of third-party judges or juries. Also unlike arbitration and ligation, mediation helps to address the emotional issues that so often underpin discord, bringing much-needed healing and closure and, overall, more satisfaction. Increased happiness and longer-lasting peace is in no small part due to the participatory nature of the mediated resolution, rather than compelled outcomes through arbitration or litigation. Like litigation, but often faster, mediation allows for legally-binding, monetary solutions; however, mediation is also a place for parties to explore, with the help of a mediator, creative and non-monetary options for negotiated settlements.
	</p>
	<p>
		<a href="/ethics">Read our ethics for Neutral Mediation’s views on the importance of neutrality and self-determination in mediation.</a>
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
