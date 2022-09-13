<script context="module" lang="ts">
	export const prerender = true;
	import email from '$lib/assets/email.png';
	import calendar from '$lib/assets/calendar-accent.svg';
	import phone from '$lib/assets/phone.svg';
	import logo from '$lib/assets/neutral-logo-trans-crop.svg';
	import splash from '$lib/assets/anonymous-couple-talking.webp';
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<sveltekit:head>
	<title>Neutral Mediation - Northern California Mediation</title>
	<meta name="description" content="Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led mediation and negotiation, in addition to training, consulting nad conflict coaching." />
	<MetaTags title="Neutral Mediation" description="Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led mediation and negotiation, in addition to training, consulting nad conflict coaching." />
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

<section>

	<div class="homepage-icon">
		<img src={logo} alt="Neutral Mediation"  width="300px" height="168px" />
	</div>

	<h1 class="tagline">The path forward starts here.</h1>

	<p class="tagline-description">
		Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led <a href="/mediation">mediation</a> and <a href="/negotiation">negotiation</a>, in addition to <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">conflict coaching</a>.
	</p>

	<div id="cta">

		<button class="welcome-call-text">
			<a href="tel:16503537653" class="welcome-call-button">
				<span class="welcome-call-contact-icon">
					<img src={phone} height="24px" width="24px" class="welcome-call-icon">
				</span>
				CALL NOW
			</a>
		</button>
		
		<button class="welcome-book-text">
			<a href="https://neutral.setmore.com" class="welcome-book-button">
				<span class="welcome-book-contact-icon">
					<img src={calendar} height="24px" width="24px" class="welcome-book-icon">
				</span>
				BOOK NOW
			</a>
		</button>

	</div>

	<span class="welcome">
		<picture>
			<source srcset="{splash}" type="image/webp" />
			<img src="{splash}" alt="Welcome" />
		</picture>
	</span>

</section>
