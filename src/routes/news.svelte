<script context="module">
	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true
	let htmlContent = ''
	let dataPromise = new Promise(async (resolve, reject) => {
		import('node-pinboard').then((PinboardMod) => {
			let Pinboard = PinboardMod.default;
			const apiKey = process.env.PINBOARD_API_KEY || "tb:09609A3FC3DCC28DDEAC";
			const pinboard = new Pinboard(apiKey)
			if (!!apiKey) {
				console.log("Running Pinboard API request", apiKey)
				pinboard.get({ tag: ['negotiation', 'mediation'] }, (err, res) => {
					console.log("Finished Pinboard API request", res)
					let linksStack = []
					if (null === err) {
						const posts = res.posts
						const updated = new Date(res.date)
						for (let x = 0; x < posts.length; x += 1) {
							let d = posts[x]
							console.log("ITEM",d);
							if ('yes' == d.shared) {
								linksStack.push(d)
								htmlContent += d.href;
							}
						}
						resolve(linksStack)
					}
				})	 
			}
		});
	});
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">

{#await dataPromise }
	<h1>News</h1>
	<p>
		<em>This page lists recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect Neutral Mediation's views.</em>
	</p>
	{@html htmlContent}
	{:then data}
	<ul id="news-links">
		{#each data as link}
		<li>
			<a href="{link.href}">{link.description}</a>
		</li>
		{/each}
	</ul>
	{:catch error} 
	<small>Something went awry. {error}</small>
{/await}

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

