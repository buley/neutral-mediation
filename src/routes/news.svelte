<script context="module">
	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true;
	import { default as Pinboard } from 'node-pinboard'
	import qs from 'querystring';

	let P = Pinboard.default || Pinboard;
	let pin = new P("tb:09609A3FC3DCC28DDEAC");

	let getNews = function () {
		return pin.get({
			tag: ['mediation', 'negotiation']
		});
	}

	let postsData = [];
	let dataPromise;

	let templatePromise = new Promise((resolve, reject) => {
		dataPromise = getNews();
		dataPromise.then((data, err) => {
			if (!!data && !!data.posts) {
				let posts = [];
				for(let z = 0; z < data.posts.length; z += 1) {
					posts.push({
						href: data.posts[z].href,
						description: data.posts[z].description,
						tags: data.posts[z].tags
					});
				}
				postsData = posts;
			}
		}).finally((data, err) => {
			if (null !== err && undefined !== err) {
				reject(err);
			} else if (!!postsData && postsData.length >= 0) {
				resolve(postsData);
				console.log("postsData",postsData);
			} else {
				reject(new Error("Failure to plan"));
			}
		});
	});


</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
{#await templatePromise}
	<h1>News</h1>
	<p>
		<em>
			Loading...
		</em>
	</p>
{:then resultsData}
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