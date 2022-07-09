import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-75d4f4f2.js";
import { h as headshot } from "../../chunks/headshot-fd603b8e.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var neutrals_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Neutrals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Neutrals</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1d1t0zz">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Neutrals</h1>
	
	<h3>Neutral Bio</h3>

	<figure class="${"headshot"}"><img${add_attribute("src", headshot, 0)} alt="${"Headshot of Taylor Buley."}">
		<p><strong>Taylor Buley</strong>, <em>Neutral</em></p></figure>

	<p>Taylor studied human choice and behavior in the Ivy League and has an undergraduate degree in Philosophy, Politics &amp; Economics from Penn. He received a master\u2019s degree in Communications from Stanford and studies at Pepperdine University\u2019s Caruso School of Law, pursuing a master\u2019s degree in Dispute Resolution.</p>

	<p>He&#39;s been proselytizing peacemaking through peer mediation since 1998. He&#39;s a life coach with certification in CBT, REBT and forgiveness. He&#39;s also a meditation and breathing instructor. Read his <a href="${"/resume"}">Resume</a> to see Taylor\u2019s professional background as a journalist and software developer and work as a technology executive at a mid-sized, multimillion-dollar media company.</p>

	<p>Taylor explains Neutral Mediation\u2019s practice and style in the mission and culture statements below. He also wants you to know about Neutral Mediation\u2019s approach to <a href="${"/ethics"}">ethics</a>, <a href="${"/pages/mediation/mediation-confidentiality"}">confidentiality</a> and <a href="${"/security"}">information security</a>. He outlines his <a href="${"/mediation"}">mediation</a>, <a href="${"/training"}">training</a>, <a href="${"/consulting"}">consulting</a> and <a href="${"/coaching"}">coaching</a> processes in detail.</p>

	<h4>More Information</h4>

	<ul><li><a href="${"/pages/mediation/who-mediators-are"}">Who Mediators Are</a></li>
		<li><a href="${"/pages/mediation/how-to-involve-a-neutral"}">How to Unvolve a Mediator</a></li>
		<li><a href="${"/pages/mediation/how-mediators-add-value"}">How Mediators Add Value</a></li>
		<li><a href="${"/pages/mediation/what-a-mediator-does"}">What a Mediator Does</a></li>
		<li><a href="${"/pages/mediation/how-mediators-add-value"}">Why a Mediator Is Worthwhile</a></li></ul>
</div>`;
});
export { Neutrals as default, hydrate, prerender, router };
