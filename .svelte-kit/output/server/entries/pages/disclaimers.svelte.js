import { c as create_ssr_component } from "../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var disclaimers_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Disclaimers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Disclaimers</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1ork1up">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Disclaimers</h1>
	<p>Neutral Mediation offers <a href="${"/mediation"}">mediation</a>, <a href="${"/negotiation"}">negotiation</a> and conflict <a href="${"/training"}">training</a>, <a href="${"/consulting"}">consulting</a> and <a href="${"/coaching"}">coaching</a>. It does <em>not</em> in any way offer any legal advice or therapy.</p>
		<p>In fact, while Neutral Mediation works with a fastidious understanding of human behavior and American dispute resolution law, it believes in the possibility of a idyllic world that has no need for therapists and lawyers. Neutral Mediation does not want to take the place of a lawyer or doctor, professionals that are necessary in certain situations to stem and heal the trauma of conflict; rather, it wants to reduce the demand for these professionals&#39; services by solving the conflict that creates this trauma in the first place.
	</p>
	<h3><em>Not</em> a Lawyer</h3>
	<p>Our neutrals are not licensed to practice law nor want to be lawyers. They are fully-capable and willing to conduct arbitrations, but would only do so from the perspective of a dispute resolution expert and not a legal expert. <strong>No aspect of coaching, training, consulting, neogotiation or mediation should be construed as legal advice.</strong></p>
	<h3><em>Not</em> a Therapist</h3>
	<p>Therapy is not in the scope of coaching, mediation, consulting or training. Neutral Mediation&#39;s services are not meant for people coping with depression, or any other mental issues -- individuals seeking mental help should consult a therapist. A dispute resolution professional can reduce and respond to trauma but a therapist is the correct professional for healing past trauma, coping with traumatic loss, abuse, addiction, violence or relationship tumult. A neutral cannot treat mental illness, clinical anxiety or depression. <strong>No aspect of coaching, training, consulting, neogotiation or mediation should be construed as theraputic advice.</strong></p>
</div>`;
});
export { Disclaimers as default, hydrate, prerender, router };
