<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import logo from '$lib/assets/neutral-logo-trans-crop.svg';
	import splash from '$lib/assets/anonymous-couple-talking.webp';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Neutral Mediation" />
</svelte:head>

<section>

	<div class="homepage-icon">
		<img src={logo} alt="Neutral Mediation"  width="300px" height="168px" />
	</div>

	<h1 class="tagline">The path forward starts here.</h1>

	<span class="welcome">
		<picture>
			<source srcset="{splash}" type="image/webp" />
			<img src="{splash}" alt="Welcome" />
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
