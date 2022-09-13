<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/ClearIcon64.png';
	import home from '$lib/assets/home.png';
	import calendar from '$lib/assets/calendar.svg';
	import phone from '$lib/assets/phone.svg';
	import email from '$lib/assets/mouse.svg';
	import Hamburger from "hamburger-menu-svelte";
    import { MetaTags, JsonLd } from 'svelte-meta-tags';

	const menu_list = [
		{ name: "Home", url: "/" },
		{ name: "Mediation", url: "/mediation" },
		{ name: "Negotation", url: "/negotiation" },
		{ name: "Training", url: "/training" },
		{ name: "Consulting", url: "/consulting" },
		{ name: "Coaching", url: "/coaching" },
		{ name: "Book Now", url: "https://neutral.setmore.com/" }
	];

</script>

<header class="primary-navigation">
	<div class="corner">
	</div>

	<nav class="menu-primary">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/" id="home">
					<img src={logo} alt="Neutral Mediation Home" height="64px" width="64px" />
				</a>
			</li>
			<li class:active={$page.url.pathname === '/mediation'}>
				<a sveltekit:prefetch href="/mediation">Mediation</a>
			</li>
			<li class:active={$page.url.pathname === '/negotiation'}>
				<a sveltekit:prefetch href="/negotiation">Negotiation</a>
			</li>
			<li class:active={$page.url.pathname === '/training'}>
				<a sveltekit:prefetch href="/training">Training</a>
			</li>
			<li class:active={$page.url.pathname === '/consulting'}>
				<a sveltekit:prefetch href="/consulting">Consulting</a>
			</li>
			<li class:active={$page.url.pathname === '/coaching'}>
				<a sveltekit:prefetch href="/coaching">Coaching</a>
			</li>
			<li class="menu-separator"></li>


			<li class="book-contact">
				<span class="book-text">
					<a href="https://neutral.setmore.com">
						<span class="book-contact-icon">
							<img src={calendar} height="24px" width="24px" class="book-icon">
						</span>
						Book Now
					</a>
				</span>
			</li>

			
		</ul>

		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<div class="right-corner">
			<Hamburger {menu_list} openButtonColor="#343a4a" backgroundColor="#343a4a" pcNaviColor="#e6dfda"/>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner, .corner-menu {
		width: 3em;
		height: 3em;
	}

	.corner a, .corner-menu a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img, .corner-menu img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		color:  #343a4a;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	ul.menu-secondary {
		display: block;
	}
	.right-corner {
			display: none;
	}

	.phone-contact, .email-contact, .book-contact {
		white-space: nowrap;
	}
	.email-text {
		vertical-align: middle;
		float: left;
		height: 100%;
	}

	.email-icon {
		float: left;
		vertical-align: middle;
		height: 100%;
	}

	.phone-number-text {
		vertical-align: middle;
		float: left;
		height: 100%;
	}

	.phone-number-icon {
		vertical-align: middle;
		float: left;
		height: 100%;
	}

	.book-number-text {
		vertical-align: middle;
		float: left;
		height: 100%;
	}

	.book-number-icon {
		vertical-align: middle;
		float: left;
		height: 100%;
	}

	.menu-separator {
		height: 100%;
		border-left: 1px solid #e6e6e6;
		padding-left: 1rem;
		margin-left: .5rem;
	}

	.phone-contact-icon, .email-contact-icon, .book-contact-icon {
		padding-right: 1rem;
	}

	@media (max-width: 767px) {

		.menu-primary {
			display: none;
		}

		.right-corner {
			display: inline;
		}

	}

</style>
