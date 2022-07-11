<script context="module">
	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true;
	let Pinboard;
	

	var getNews2 = function() {
		return new Promise(function(resolve, reject) {
			import('node-pinboard').then((PinboardMod) => {
				Pinboard = (!!PinboardMod.default && !!PinboardMod.default.default) ? PinboardMod.default.default : PinboardMod.default;
				new Pinboard("tb:09609A3FC3DCC28DDEAC").get({ tag: ['negotiation', 'mediation'] }).then(function(apiData) {
					resolve(apiData.posts);
				});
			});
		});
	}

	var getNews = function() {
		return new Promise(function(resolve, reject) {
			resolve([{
				href:'#',
				description: 'Bye'
			}]);
		});
	}

</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
{#await getNews() then data}
	<h1>News</h1>
	<p>
		<em>This page displays recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect Neutral Mediation's views.</em>
	</p>
	<ul id="news-links">
		{#each data as link}
		<li>
			<a href="{link.href}">{link.description}</a>
		</li>
		{/each}
	</ul>
{/await}


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

