import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-75d4f4f2.js";
import { h as headshot } from "../../chunks/headshot-fd603b8e.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var about_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About Neutral Mediation."}" data-svelte="svelte-1lyq1j4">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>About</h1>

	<h2>Our Practice</h2>

	<figure class="${"headshot"}"><img${add_attribute("src", headshot, 0)} alt="${"Headshot of Taylor Buley."}">
		<p><strong>Taylor Buley</strong>, <em>Neutral</em></p></figure>

	<p>Taylor Buley founded Neutral Mediation in 2021 in response to increasing acrimony in the public sphere. Doing business as Neutral Mediation, he practices as a third-party neutral and offers mediation, negotiation, consulting, training and coaching services that minimize the trauma, expense and time associated with solving complex conflict.</p>

	<h2>Our Values</h2>

	<h3>Mission Statement</h3>

	<p>Neutral Mediation believes that adults are capable of finding mutually workable solutions to their own problems when provided the opportunity for exploring creative options in a safe and constructive environment. Neutral Mediation investigates solutions to challenging workplace, family, and neighborhood problems using informal and collaborative mediation and negotiation that harnesses the transformational power of dispute resolution to find a compromise, heal hurt and move people forward.</p>

	<h3>Culture Statement</h3>

	<p>Neutral Mediation exists to create an informal and safe environment for people to hear and be heard while pursuing creative options and solutions to relationship problems. It views each conflict as an opportunity for practicing peace and seeks resolution beyond dispute with empathy, education and empowerment.</p>

	<p>Neutral Mediation values, above all else, ethics and personal integrity. It believes that a mediator with integrity should be neutral in name, word and deed. It believes in trusting others, too, to do what they say act in accordance with their stated values. It believes that with diversity comes the blessing of multiple viewpoints and an opportunity for commonality. </p>

	<p>Neutral Mediation is relentlessly welcoming of diverse opinions and backgrounds. It believes in face-to-face meetings and taking people at face value. It believes in using first names, good faith and eye contact.</p>

	<p>Neutral Mediation encourages people to be friendly and empathetic, honest and direct, trustworthy, energetic, prepared, composed, positive and civilized. It believes in brainstorming, open-minds and the strengthening of communication through listening and storytelling. It believes in the power of emotional vulnerability to transform disputes. It believes not just that a neutral\u2019s words matter and should be used only necessarily, but that her word matters and should be indefatigably trustworthy.</p>

	<p><em>Neutral Mediation\u2019s EIN is 87-2105551. <a href="${"/w9"}">Click here for a downloadable W-9</a>.</em></p>

	<h4>More Information</h4>

	<ul><li><a href="${"/news"}">News</a></li>
		<li><a href="${"/press"}">In The Press</a></li></ul>

</div>`;
});
export { About as default, hydrate, prerender, router };
