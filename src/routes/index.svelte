<script context="module" lang="ts">
	export const prerender = true;
	import email from '$lib/assets/email.png';
	import calendar from '$lib/assets/calendar-accent.svg';
	import phone from '$lib/assets/phone.svg';
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

	<p class="tagline-description">
		Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led <a href="/mediation">mediation</a> and <a href="/negotiation">negotiation</a>, in addition to <a href="/training">training</a>, <a href="/consulting">consulting</a> and <a href="/coaching">conflict coaching</a>.
	</p>

	<div id="cta">
		<button class="welcome-book-text">
			<a href="https://neutral.setmore.com" class="welcome-book-button">
				<span class="welcome-book-contact-icon">
					<img src={calendar} height="24px" width="24px" class="welcome-book-icon">
				</span>
				BOOK NOW
			</a>
		</button>

		<button class="welcome-call-text">
			<a href="tel:16503537653" class="welcome-call-button">
				<span class="welcome-call-contact-icon">
					<img src={phone} height="24px" width="24px" class="welcome-call-icon">
				</span>
				CALL NOW
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
