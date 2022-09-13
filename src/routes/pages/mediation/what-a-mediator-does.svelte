<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>What A Mediator Does</title>
	<meta name="description" content=""     />
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
	<h1>What A Mediator Does</h1>

	<p>We're sorry for the inconvenience because this content is not yet available.</p>

<!--	
	<p>A mediator fixes problems through "The 3 E's" — education, empathy, and empowerment.</p>

	
	<h4>Empathy</h4>

	
	<h4>Education</h4>

	
	<p>Support communication/draw out information</p>
	
	
	<p>Explore/inform parties of risks of litigation. Remind parties of the costs of continuing the dispute.</p>
	
	
	<p>Encourage flexibility about offers, explain tactics</p>
	
	
	<p>Seek non-monetary options</p>
	
	
	<h4>Empowerment</h4>
	
	<ul><li>Moderate the bargaining: keep the negotiation process moving</li><li>If necessary, propose settlement options</li><li></li><li>Help structure format<ul><li>Possibility of setting up direct conversation with the opposing decision maker</li><li>Joint session followed by caucus, meet and greet followed by caucuses, no joint session at all?</li><li>Private meetings with lawyers and/or parties before the opening session?</li><li>Sub-meetings?<ul><li>Principals only? Lawyers? Experts?</li><li>Will the mediator be present?</li></ul></li><li>Opening session?<ul><li>Who will speak?</li><li>How is the seating arranged?</li><li>Focus on legal issues or explore emotional issues?</li><li>Request<ul><li>Issue as you see it<ul><li>Set of circumstances that bring the party to mediation</li></ul></li><li>How we might move forward</li></ul></li></ul></li></ul></li></ul>

	<p>Role of mediator</p>

	<ul><li>Encourage parties to test eachother</li><li>Discourage counterproductive offers<ul><li>Emphasize&nbsp; the&nbsp; danger&nbsp; of&nbsp; an&nbsp; extreme&nbsp; offer&nbsp; preventing&nbsp; the&nbsp; starting&nbsp; of&nbsp; the real distributive dance.</li></ul></li><li>Normalizing the dance<ul><li>People get frustrated by the back and forth.&nbsp;</li><li>A mediator can acknowledge the frustration and explain that the dance is just part of the process.</li><li>Explain is no right and wrong.</li></ul></li><li>Extracting concessions<ul><li>Can keep track of who’s turn it is to move and make the next concession</li><li>Compare and contrast to “what’s reasonable” based on experience</li></ul></li><li>Confidential listener<ul><li>Figure out, when people are way apart, what are their real goals in a positional distributive bargaining process&nbsp;</li><li>Meanwhile, protect bargaining position and ability to bluff and maneuvers</li><li>When? Bargaining can be frustrating and stalling.</li><li>Technique<ul><li>Tell me your next-to-last offer</li><li>Explain in words a “significant gap” and&nbsp;</li></ul></li></ul></li><li>Help parties maintain credibility and save face</li></ul>

-->
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
