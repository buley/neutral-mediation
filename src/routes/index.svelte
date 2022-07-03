<script context="module" lang="ts">
	export const prerender = true;
	import calendar from '$lib/assets/calendar-accent.svg';
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

	<button class="welcome-book-text">
		<a href="https://neutral.setmore.com" class="welcome-book-button">
			<span class="welcome-book-contact-icon">
				<img src={calendar} height="24px" width="24px" class="welcome-book-icon">
			</span>
			BOOK NOW
		</a>
	</button>


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

	.welcome-mobile {
		object-fit:cover;
		left: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 100vw;
		position: relative;
		right: 50%;
		width: 100vw;
	}

	.welcome-mobile  img {
		width: 100%;
	}

	.welcome-book-text {
		margin: 0 auto 40px auto;
		padding: 10px 10px 5px 10px;
		vertical-align: middle;
	    font-family: var(--sans-serif-font);
		background-image: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--tertiary-color));
		border: 1px solid;
	}
	.welcome-book-text a, .welcome-book-text a:hover { 
		border: none;
		text-decoration: none;
	    font-size: 1.5rem;
	    color: var(--accent-color);
	    font-size: 2em;
	    padding: 0 10px;
	}

	.welcome-book-contact-icon {
		text-align: vertical;
	}

	@media (min-width: 767px) {
		.homepage-icon {
			padding-top: 55px;
		}
	}

	button {
	  background-color: #fff;
	  border: 1px solid #d5d9d9;
	  border-radius: 8px;
	  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
	  box-sizing: border-box;
	  color: #0f1111;
	  cursor: pointer;
	  display: inline-block;
	  font-family: "Amazon Ember",sans-serif;
	  font-size: 13px;
	  line-height: 29px;
	  padding: 20px 10px 0 11px;
	  position: relative;
	  text-align: center;
	  text-decoration: none;
	  user-select: none;
	  -webkit-user-select: none;
	  touch-action: manipulation;
	  vertical-align: middle;
	}

	button:hover {
	  background-color: #f7fafa;
	}

	button:focus {
	  border-color: #008296;
	  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
	  outline: 0;
	}

</style>
