<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Benefits of Mediation</title>
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
</svelte:head>

<div class="content">
	<h1>Benefits of Mediation</h1>
	<p>
		Mediation helps solve problems with minimal damage to relationships. A resolution can be more difficult, but still achievable, when the parties are not likely to share a future. Mediation is a good choice for complex, emotionally-charged disputes and a mediator can assist counsel by framing the options in a way that doesn’t compromise an advocate’s strong advocacy.
	</p>
	<p>
		While good mediation is often not cheap, and cheap mediation is often not good, the amount participants can expect to save overwhelmingly surpasses the expected costs to be otherwise endured. Those involved in the legal process will spend not just time and money, but also emotions. The opportunity cost of not pursuing other endeavors, rather than investing time, energy and money into legal remediation, can also be considerable.
	</p>
	<p>
		One way mediation helps reduce the costs of conflict is that it helps participants reach closure faster in time-sensitive matters, saving financial, time and emotionally-expensive litigation. By putting the process in the hands of participants, it also reduces uncertainty by eliminating the risk of, for example, summary judgment on one hand, lengthy proceedings on the other, or that a good case could go unheard, or that a mutually beneficial resolution option go unexplored, everywhere in between.
	</p>
	<p>
		Since most cases settle out of court, refusal to mediate doesn’t look good. In the case of so-called “998 offers” and other reasonable settlements, a party can recoup attempted mediation costs. The courts recognize that mediation is often faster, less expensive and more satisfactory than litigation and in many cases ends up requiring parties to mediate, anyways. In those cases, a mediated resolution will often result but parties lose control over choosing the mediator that works best for them.
	</p>
	<p>
		<a href="/prices">Read about booking options and familiarize yourself with the costs of mediation</a>.
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
