<script context="module">
	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true;
	import Pinboard from 'node-pinboard'

	console.log('Pinboard',Pinboard);

	import qs from 'querystring';

	let getNews = function () {
		
		let pin = new Pinboard("tb:09609A3FC3DCC28DDEAC");

		/*pin.add({
			url: "http://google.com",
			description: "Test desc",
			tags: ["mediation","negotiation"],
			shared: 'yes'
		}).then((res) => {
		  console.log(res);;
		});*/

		return pin.get({
			tag: ['mediation', 'negotiation']
		});

	}

	var dataPromise = getNews();
	var postsData = [];
	let rej = function(err) {
		console.log("ERROR",err);
	}

	dataPromise.then((data, err) => {
		if (null !== err && undefined !== err) {
			rej(err);
		} else if (!!data && !!data.posts) {
			let posts = [];
			for(let z = 0; z < data.posts.length; z += 1) {
				try {
					posts.push({
						href: data.posts[z].href,
						description: data.posts[z].description,
						tags: data.posts[z].tags
					});
				} catch (ee) {
					rej(ee);
				}
			}
			postsData = posts;
		} else {
			rej(new Error("Failure to plan"));
		}
	});
	
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
{#await dataPromise}
	<h1>{!!postsData && postsData.length > 0 ? 'Goodbye' : 'Hello' } World</h1>
{:then postsData}
	<h1>News</h1>
	<p>
		<em>
			This page displays recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect Neutral Mediation's views.
		</em>
	</p>
	<ul id="news-links">
		{#each postsData as postItem}
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

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

