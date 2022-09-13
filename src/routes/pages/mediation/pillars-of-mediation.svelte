<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Pillars of Mediation</title>
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
	<h1>Pillars of Mediation</h1>

	<p>The pillars of mediation are that it's voluntary, neutral, and confidential.</p>

	<h4>Self-Determination</h4>

	<p>Too often, convening the participants is the hardest phase of the mediation process. Not only is there paperwork necessary for a mediator to prepare, and legal documentation to sign helping to shore up its legal legitimacy, but it also takes courage by the parties on top of procedural determination to choose to mediate.</p>

	<p>That mutual self-determination -- each party choosing on their terms to begin the end of a conflict by seeking a mediator's help -- is critical to the rampant success of mediation as a participant-controlled alternative to the courtroom. American participants report that -- simply by using age-old mediative techniques to communicate and negotiate plainly -- they are, overall, happier with outcomes compared to similar results obtained through the emotionally, financially and time-consuming modern legal system.</p>

	<p><a href="https://neutrals.io/ethics">Read about how ethics shape our approach to mediation. </a></p>

	<h4>Neutrality</h4>

	<p>A mediator involves themself in a dispute but has no skin in the game, as far as how it plays out, beyond being an enthusiastic, energetic, and optimistic advocate of reaching a beneficial outcome for all concerned. A mediator's role is as a neutral third party. At the most fundamental level, a mediator simply connects with people to build the necessary trust that helps them lean into the emotional and often vulnerable discussions that are productive to move forward..</p>

	<p>A mediator states her goals clearly, aids participants in structuring the discussion space and timeline, asks difficult questions, says what needs to be said, doesn't say what needs to be held in confidence, and helps participants surmount the cognitive barriers to agreement.</p>

	<p>Through mediation, a neutral builds trust and rapport with clients by explaining and enforcing rules and order, communicating honestly and tactfully between parties while acting friendly and empathetic, validating but not acquiescent, to the viewpoints shared by participants. Likewise, and more importantly, a mediator helps participants to honor and understand the content and validity of <em>each other's</em> viewpoints, even and especially if they don't share them. She draws on experience and guile to come up with out-of-the-box solutions and aid in extracting appropriate concessions that, though perhaps hard to come by for participants on their own, benefit all involved.</p>

	<p><a href="http://neutrals.io/mediators">Read about mediators, what they do and how they add value to dispute resolution.</a></p>

	<h4>Confidentiality</h4>

	<p>Mediation is so valuable and confidentiality is such an important pillar of the process that mediation confidentiality is codified in state law in more than a dozen states -- including California, the state from which Neutral Mediation operates.</p>

	<p>The public benefit that results from a mediator's ability to create a safe environment to explore resolution options -- helping disputants "cut to the chase" in the roughly 19 out of 20 cases that settle before reaching the courtroom -- is so obvious that even those who profit from litigation swear by the power of <a href="https://neutrals.io/process">the mediation process</a> to benefit all concerned.</p>

	<p>Once a mediator is engaged after each party signs a <a href="https://neutrals.io/example-mediation-engagement-letter/">Mediation Engagement Letter</a>, <a href="https://neutrals.io/forms/mediation-disclosure-notification/">Mediation Disclosure Notification</a> and <a href="https://neutrals.io/confidentiality-agreement/">Confidentiality Agreement</a>, participants shore up their mutual assurance of legally-protected confidentiality and embark on a path to resolution that lets them move forward with the peace of mind that nothing from the process is admissible in court. After all, the parties have freely agreed in writing to confidence through the well-known and well-specified private mediation process: it's hard to argue with mediation's proven ability to produce resolution beyond dispute.</p>

	<p><a href="https://neutrals.io/confidentiality">Read about mediation confidentiality -- and understand its limitations in and out of the courtroom.</a></p>


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
