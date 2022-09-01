<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Information Security</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Information Security</h3>
	<p>We actively seek to ensure the confidentiality of our practice by using modern and trusted technologies that encrypt and authenticate correspondence. </p>
	<p>All website traffic on neutrals.io is served through secure HTTP connections encrypted and using SSL.</p>
	<p>Neutral Mediation uses Google to encrypt its email and video communications. We mitigate the possibility of email spoofing by using DKIM to certify correspondence. We authenticate our domain using SPF and DMARC records, too, so when an email appears to come from https://neutrals.io there are multiple ways to verify its provenance. </p>
	<p>Upon request and, with collaboration between neutral and participant, any non-streaming correspondence can be encrypted using GPG. The public key <a href="https://neutrals.io/key/">is published online</a>.</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
