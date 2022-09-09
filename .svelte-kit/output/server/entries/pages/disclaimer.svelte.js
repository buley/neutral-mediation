import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var disclaimer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Disclaimer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Disclaimer</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-srs2yk">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Disclaimer</h1>
	<p>Neutral Mediation offers <a href="${"/mediation"}">mediation</a>, <a href="${"/negotiation"}">negotiation</a> and conflict <a href="${"/training"}">training</a>, <a href="${"/consulting"}">consulting</a> and <a href="${"/coaching"}">coaching</a>. It does <em>not</em> in any way offer legal advice or therapy.</p>
		<p>While Neutral Mediation works with a fastidious understanding of human behavior and American dispute resolution law, it believes in the possibility of an idyllic world that does not need therapists and lawyers. Neutral Mediation does not want to take the place of a lawyer, doctor, or other professional necessary in certain situations to stem and heal the trauma of conflict. Rather, it seeks to reduce the demand for these professionals&#39; services by solving the conflict that creates this trauma in the first place.
	</p>
	<h3><em>Not</em> a Lawyer</h3>
	<p>Our neutrals are not licensed to practice law nor want to be lawyers. They are capable and willing to conduct arbitration hearings, but would only do so from the perspective of a dispute resolution expert and not a legal expert. <strong>Customers should not construe any aspect or element of coaching, training, consulting, negotiation, or mediation as legal advice.</strong></p>
	<h3><em>Not</em> a Therapist</h3>
	<p>Therapy is not in the scope of coaching, mediation, consulting, or training. Neutral Mediation services are not for people coping with major depression, or any other mental issues -- individuals seeking mental help should consult a therapist. A dispute resolution professional can reduce and respond to trauma, however a therapist is a correct professional for healing past trauma, coping with traumatic loss, abuse, addiction, violence, or relationship tumult. A neutral cannot treat mental illness, clinical anxiety, or depression. <strong>Customers should not construe any aspect or element of coaching, training, consulting, negotiation, or mediation as therapeutic advice.</strong></p>
</div>`;
});
export { Disclaimer as default, hydrate, prerender, router };
