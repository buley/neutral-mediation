import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-f900b887.js";
import { h as headshot } from "../../chunks/headshot-fd603b8e.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var background_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Background</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1v10rxq">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Background</h1>
	
	<h3>Bio</h3>

	<figure class="${"headshot"}"><img${add_attribute("src", headshot, 0)} alt="${"Headshot of Taylor Buley."}">
		<p><strong>Taylor Buley</strong></p></figure>

	<p>At Penn, Taylor studied human choice and behavior and earned an undergraduate degree in Philosophy, Politics &amp; Economics. At Stanford, he received a master\u2019s degree in Communications. At Pepperdine&#39;s Caruso School of Law, he studies dispute resolution.</p>

	<p>Taylor started coaching peers in mediation at age 14. He is a certified life coach with training in Cognitive Behavioral Theory (CBT) and Rational Emotional Behavioral Theory (REBT). Taylor teaches meditation and breathing practice. He specializes in apologies, de-escalation, empathy, and forgiveness.</p>

	<p>Neutral Mediation\u2019s practice and style are expressed in its <a href="${"/about"}">mission</a> and <a href="${"/about"}">culture statements</a>. See also its approach to <a href="${"/ethics"}">ethics</a>, <a href="${"/pages/mediation/mediation-confidentiality"}">confidentiality</a> and <a href="${"/security"}">information security</a>. He outlines his <a href="${"/mediation"}">mediation</a>, <a href="${"/negotiation"}">negotiation</a>, <a href="${"/training"}">training</a>, <a href="${"/consulting"}">consulting</a> and <a href="${"/coaching"}">conflict coaching</a> processes in detail.</p>

	<p>Taylor has worked for the White House Council of Economic Advisors, reason magazine, The Wall Street Journal, and was a staff writer at Forbes Magazine. His work has been featured on MSNBC, CNN, and C-SPAN and in the New York Times Magazine. Today he works as a media technology executive. Read his <a href="${"/resume"}">resume</a> to see Taylor\u2019s full history as an executive, board member and volunteer.</p>

	<h4>More Information</h4>

	<ul><li><a href="${"/pages/mediation/who-mediators-are"}">Who Mediators Are</a></li>
		
		<li><a href="${"/pages/mediation/how-mediators-create-value"}">How Mediators Create Value</a></li>
		<li><a href="${"/pages/mediation/what-a-mediator-does"}">What a Mediator Does</a></li>
		<li><a href="${"/pages/mediation/why-a-mediator-is-worthwhile"}">Why a Mediator Is Worthwhile</a></li></ul>
</div>`;
});
export { Background as default, hydrate, prerender, router };
