<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<sveltekit:head>
	<title>Availability</title>
	<meta name="description" content="" />
	<!--
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
	<h2>Availability</h2>
	<p>Here's a list of what services are available when.|||s <a href="https://neutral.setmore.com/">booking schedule</a> is based around netural availability and the necessary length of the session.</p>
	<h3>Mediation</h3>
	<ul>
	    <li>Half-Day Mediations – Saturdays & Sundays</li>
	    <li>Full-Day Mediations – Saturdays & Sundays</li>
    </ul>
	<h3>Negotiation</h3>
	<ul>
    	<li>Half-Day Negotiations – Saturdays & Sundays</li>
    	<li>Full-Day Negotiations – Saturdays & Sundays</li>
	</ul>
	<h3>Training</h3>
	<ul>
	    <li>Meditation Trainings – Saturdays & Sundays</li>
	    <li>Negotiation Trainings – Saturdays & Sundays</li>
	</ul>
	<h3>Consulting</h3>
	<ul>
	    <li>Mediation Consultations – Monday through Friday</li>
    	<li>Negotiation Consultations – Monday through Friday</li>
	</ul>
	<h3>Coaching</h3>
	<ul>
	    <li>Conflict Coaching – Monday through Friday</li>
	</ul>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
