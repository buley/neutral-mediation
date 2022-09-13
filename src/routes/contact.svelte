<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h2>Contact</h2>
			
	<div class="contact-us">

		<div class="contact-form">
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScFrBbM91WzZlL_9zUzinFJnLl62bl-Fe2bMMGCCzObtUWrqw/viewform" border=0 frame=0 height="600px" width="100%">
		</div>

		<div class="contact-information">
			<h3>Phone/Text Number</h3>
			<p><a href="tel:16503537653">650-353-7653</a></p>
			<h3>Email Address</h3>
			<p><a href="mailto:info@neutrals.io">info@neutrals.io</a></p>
			<h3>Mailing Address</h3>
			<p>PO Box 73444<br>
			Davis, CA 95617-3444</p>
			<small><em>Contact options ordered by neutral preference.</em></small>
		</div>

	</div>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	.contact-us {
		display: flex;
		flex-direction: row;
	}
	.contact-form {
	    flex-basis: 66.66%;
	}
	.contact-information {
	    flex-basis: 33.33%;
	    padding: 0 0 0 20px;
	}

	@media (max-width: 767px) {
		
		.contact-us {
		    flex-direction: column;
		}
		.contact-form {
		    flex-basis: 100%;
		}
		.contact-information {
		    flex-basis: 100%;
		    padding: 0 20px 0 20px;
		}
	}

</style>
