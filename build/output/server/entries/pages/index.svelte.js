import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index-f900b887.js";
import { M as MetaTags } from "../../chunks/MetaTags-380877df.js";
import { p as phone } from "../../chunks/phone-f0b0e6b3.js";
var calendar = "/_app/immutable/assets/calendar-accent-17cdab68.svg";
var splash = "/_app/immutable/assets/anonymous-couple-talking-9c5a893e.png";
var logo = "/_app/immutable/assets/neutral-logo-trans-crop-fa8fa5fd.png";
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<sveltekit:head><title>Neutral Mediation - Northern California Mediation</title>
	<meta name="${"description"}" content="${"Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led mediation and negotiation, in addition to training, consulting nad conflict coaching."}">
	${validate_component(MetaTags, "MetaTags").$$render($$result, {
    title: "Neutral Mediation",
    description: "Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led mediation and negotiation, in addition to training, consulting nad conflict coaching."
  }, {}, {})}
	</sveltekit:head>

<section><div class="${"homepage-icon"}"><img${add_attribute("src", logo, 0)} alt="${"Neutral Mediation"}" width="${"300px"}" height="${"168px"}"></div>

	<h1 class="${"tagline"}">The path forward starts here.</h1>

	<p class="${"tagline-description"}">Neutral Mediation minimizes the emotional trauma, time and expense associated with complex conflict through the practice of neutral-led <a href="${"/mediation"}">mediation</a> and <a href="${"/negotiation"}">negotiation</a>, in addition to <a href="${"/training"}">training</a>, <a href="${"/consulting"}">consulting</a> and <a href="${"/coaching"}">conflict coaching</a>.
	</p>

	<div id="${"cta"}"><button class="${"welcome-call-text"}"><a href="${"tel:16503537653"}" class="${"welcome-call-button"}"><span class="${"welcome-call-contact-icon"}"><img${add_attribute("src", phone, 0)} height="${"24px"}" width="${"24px"}" class="${"welcome-call-icon"}"></span>
				CALL NOW
			</a></button>
		
		<button class="${"welcome-book-text"}"><a href="${"https://neutral.setmore.com"}" class="${"welcome-book-button"}"><span class="${"welcome-book-contact-icon"}"><img${add_attribute("src", calendar, 0)} height="${"24px"}" width="${"24px"}" class="${"welcome-book-icon"}"></span>
				BOOK NOW
			</a></button></div>

	<span class="${"welcome"}"><picture><source${add_attribute("srcset", splash, 0)} type="${"image/webp"}">
			<img${add_attribute("src", splash, 0)} alt="${"Welcome"}"></picture></span></section>`;
});
export { Routes as default, prerender };
