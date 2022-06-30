<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Neutral Mediation" />
</svelte:head>

<section>

	<h1 class="tagline">The path forward starts here.</h1>

	<span class="welcome">
		<picture>
			<source srcset="anonymous-couple-talking.webp" type="image/webp" />
			<img src="anonymous-couple-talking.webp" alt="Welcome" />
		</picture>
	</span>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		min-height: 400px;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		object-fit: cover;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
