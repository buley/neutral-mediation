<script lang="ts">
	import { page } from '$app/stores';
	import logo from './ClearIcon64.png';
	import home from './home.png';
	import Hamburger from "hamburger-menu-svelte";

	const menu_list = [
		{ name: "Home", url: "/" },
		{ name: "Mediation", url: "/mediation" },
		{ name: "Consulting", url: "/consulting" },
		{ name: "Prices", url: "/prices" },
		{ name: "About", url: "/about" },
		{ name: "Ethics", url: "/ethics" }
	];

</script>

<header>
	<div class="corner">
		
	</div>

	<nav class="menu-primary">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/" id="home">
					<img src={logo} alt="Home" height="64px" width="64px" />
				</a>
			</li>
			<li class:active={$page.url.pathname === '/mediation'}>
				<a sveltekit:prefetch href="/mediation">Mediation</a>
			</li>
			<li class:active={$page.url.pathname === '/consulting'}>
				<a sveltekit:prefetch href="/consulting">Consulting</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/prices'}>
				<a sveltekit:prefetch href="/prices">Prices</a>
			</li>
			<li class:active={$page.url.pathname === '/ethics'}>
				<a sveltekit:prefetch href="/ethics">Ethics</a>
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

	@media (max-width: 767px) {

		.menu-primary {
			display: none;
		}

		.right-corner {
			display: inline;
		}

	}

</style>
