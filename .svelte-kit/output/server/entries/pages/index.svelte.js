import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-75d4f4f2.js";
var calendar = "/_app/immutable/assets/calendar-accent-17cdab68.svg";
var splash = "/_app/immutable/assets/anonymous-couple-talking-f02a249f.webp";
var logo = "/_app/immutable/assets/neutral-logo-trans-crop-5fcfa63b.svg";
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Neutral Mediation"}" data-svelte="svelte-nt1mln">`, ""}

<section><div class="${"homepage-icon"}"><img${add_attribute("src", logo, 0)} alt="${"Neutral Mediation"}" width="${"300px"}" height="${"168px"}"></div>

	<h1 class="${"tagline"}">The path forward starts here.</h1>

	<p class="${"tagline-description"}">Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led <a href="${"/mediation"}">mediation</a> and <a href="${"/negotiation"}">negotiation</a>, in addition to <a href="${"/training"}">training</a>, <a href="${"/consulting"}">consulting</a> and <a href="${"/coaching"}">conflict coaching</a>.
	</p>

	<button class="${"welcome-book-text"}"><a href="${"https://neutral.setmore.com"}" class="${"welcome-book-button"}"><span class="${"welcome-book-contact-icon"}"><img${add_attribute("src", calendar, 0)} height="${"24px"}" width="${"24px"}" class="${"welcome-book-icon"}"></span>
			BOOK NOW
		</a></button>


	<span class="${"welcome"}"><picture><source${add_attribute("srcset", splash, 0)} type="${"image/webp"}">
			<img${add_attribute("src", splash, 0)} alt="${"Welcome"}"></picture></span></section>`;
});
export { Routes as default, prerender };
