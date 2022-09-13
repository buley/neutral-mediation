<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Negotiation</title>
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
	    appId: '1234567890'
	  }}
	/>
-->
</svelte:head>

<div class="content">

	<h1>Negotiation</h1>

	<h2>Our Practice</h2>

	<p>
		Neutral Mediation offers flexibly-scheduled virtual negotiation sessions led by a trained professional neutral. <a href="/background">Read about our neutral here</a>. Optionally, a neutral can lead negotiation services on-site at an organization or an agreed-upon location, per the <a href="/prices">travel policy</a>. <em>Negotiating sessions start at $400 per participant.</em> For more information about lunch stipends for full-day negotiation sessions, see our <a href="/prices">pricing page</a>. For individual-focused coaching sessions, see our <a href="/coaching">coaching page</a>. For neutral-led mediation sessions, see our <a href="/mediation">mediation page</a>. For mediation and negotiation training, see our <a href="/training">training page</a>. For mediation, negotiation and conflict consulting for organizations, see our <a href="/consulting">consulting page</a>.
	</p>
	
	<h2>Our Value</h2>
	
	<p>
		Neutrals facilitate negotiations, either collaboratively with both parties present or through shuttle diplomacy, to minimize the trauma, time, and expense of bargaining. Fast-forward the bargaining process in as little as one session. Feel relieved and trust a professionally-trained neutral to create a safe environment to hear and be heard.
	</p>
	
	<h2>Our Services</h2>

	<h3>Negotiation Sessions</h3>

	<p>
		Neutral-led virtual negotiation session for four or eight hours, optionally on-site at an organization. Consulting engagements typically involve analyzing or planning for a specific negotiation or similar set of negotiations. <em> Four-hour, half-day negotiation sessions cost $400 per participant. Eight-hour, full-day negotiation sessions cost $750 per person.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/47dfc819-7d0d-4e36-b4e4-6eb47039a94e">Click here to book a negotiation session</a>.
	</p>

	<h3>Negotiation Consulting</h3>
	
	<p>
		Neutral-led virtual negotiation consulting session for one, four, or eight hours, optionally on-site at an organization. Consulting engagements typically concern analyzing or planning for a specific negotiation or similar set of negotiations. <em>Negotiation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/5eb4c115-1efc-478d-b908-69875ef1303d">Click here to book a negotiation consulting session</a>. See our <a href="/training">consulting page</a> for more information.
	</p>

	<h3>
		Negotiation Training
	</h3>

	<p>
		A neutral-led  virtual training session on negotiation for one, four, or eight hours. Training can be course-guided education or specifically-focused training around a specific negotiation. <em>Eight-hour negotiation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/076b423b-4479-480d-8af1-09e3c7cfcdad">Click here to book a negotiation training session</a>. For more information on trainings, including course content, see our <a href="/training">training page</a>.
	</p>

	<h2>More Information</h2>

	<ul>
		<li><a href="/pages/quotes/negotiation">Negotiation Quotes</a></li>
		<li><a href="/pages/negotiation/what-is-negotiation">What Is Negotiation?</a></li>
		<li><a href="/pages/negotiation/benefits-of-negotiation">Benefits of Negotiation</a></li>
		<li><a href="/pages/negotiation/example-negotiation-scenarios">Example Negotiation Scenarios</a></li>
		<!--<li><a href="/pages/negotiation/limitations-of-negotiation">Limitations of Negotiation</a></li>-->
		<li><a href="/pages/negotiation/pillars-of-negotiation">Pillars of Negotiation</a></li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
