<script context="module">

	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true;
	import { default as Pinboard } from 'node-pinboard'
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import qs from 'querystring';
	let postsData = [{
		href: '#',
		description: 'foo bar'
	}];

	let P = Pinboard.default || Pinboard;
	let pin = new P("tb:09609A3FC3DCC28DDEAC");

	const getNews = () => {
		return pin.get({
			tag: ['mediation', 'negotiation']
		});
	}

	const templatePromise = new Promise((resolve, reject) => {
		getNews().then((data, err) => {
			if (!!data && !!data.posts) {
				let posts = [];
				for(let z = 0; z < data.posts.length; z += 1) {
					posts.push({
						href: data.posts[z].href,
						description: data.posts[z].description,
						tags: data.posts[z].tags
					});
				}
				console.log("REPLACING",postsData, posts);
				postsData = posts;
			}
		}).finally((data, err) => {
			if (null !== err && undefined !== err) {
				reject(err);
			} else if (!!postsData && postsData.length >= 0) {
				resolve(postsData);
			} else {
				reject(new Error("Failure to plan"));
			}
		});
	});

</script>

<sveltekit:head>
	<title>News</title>
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
{#await templatePromise}
	<h1>News</h1>
	<p>
		<em>
			Loading...
		</em>
	</p>
{:then resultsData}
{resultsData[0].href}
	<h1>News</h1>
	<p>
		<em>
			This page displays recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect|||s views.
		</em>
	</p>
	<ul id="news-links">
		{#each resultsData as postItem (postItem.href)}
		<li>
			<a href="{postItem.href}">
				{postItem.description}
			</a>
		</li>
		{/each}
	</ul>
{:catch error}
	<h1>Error</h1>
    <p>{error.name}: {error.message}</p>
{/await}
	<p><small><a href="/sitemap.xml">Click here for our sitemap.</a></small></p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>