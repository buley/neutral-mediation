<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Document & Forms</title>
	<meta name="description" content="" /><!--<JsonLd
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
	/>-->
</svelte:head>

<div class="content">
	<h1>Forms & Documents</h1>

	<h3>Client Forms</h3>

	<h4>Mediation</h4>
	<ul>
		<li>Mediation Consultation Request Form</li>
	</ul>

	<h4>Negotiation</h4>
	<ul>
		<li>Negotiation Consultation Request Form</li>
	</ul>

	<h4>Coaching</h4>
	<ul>
		<li><a href="/forms/arrogance">Arrogance Analysis</a></li>
		<li><a href="/forms/autopilot">Autopilot Analysis</a></li>
		<li><a href="/forms/coaching">Coaching Analysis</a></li>
		<li><a href="/forms/collaboration">Collaboration Analysis</a></li>
		<li><a href="/forms/communication">Communication Analysis</a></li>
		<li><a href="/forms/conflict">Conflict Analysis</a></li>
		<li><a href="/forms/emotional">Emotions Analysis</a></li>
		<li><a href="/forms/goals">Goals Analysis</a></li>
		<li><a href="/forms/honesty">Honesty Analysis</a></li>
		<li><a href="/forms/layered">Layered Conflict Analysis</a></li>
		<li><a href="/forms/positive">Positive Conflict Analysis</a></li>
		<li><a href="/forms/role-reversal">Role-Reversal Analysis</a></li>
		<li><a href="/forms/root">Root Emotional Analysis</a></li>
		<li><a href="/forms/self-assessment">Self-Assessment</a></li>
	</ul>
	<h3>Questionnaires</h3>
	<ul>
		<li>Mediation Consultation Participant Questionnaire</li>
		<li>Mediation Participant Questionnaire</li>
	</ul>

	<h3>Legal Documents</h3>
	<ul>
		<li>Mediation Agreement</li>
		<li>Confidentiality Agreement</li>
		<li>Settlement Agreement</li>
	</ul>

	<h3>Assessments</h3>
	<ul>
		<li>Mindset Assessment</li>
	</ul>

	<h3>Examples</h3>
	<ul>
		<li>Example Mediation Engagement Letter</li>
		<li>Example Mediation Provisions</li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
