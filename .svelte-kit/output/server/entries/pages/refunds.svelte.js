import { c as create_ssr_component } from "../../chunks/index-b1570763.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var refunds_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Refunds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Template</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1oj80vl">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Refund Policy</h3>
	<p>A training or mediation session will not be considered fully scheduled until all parties complete the required paperwork and pay their participation fees, upon which a Mediation Engagement Letter is sent out and signed by all parties. If mediation is requested only by one party, Neutral Mediation will use participant-provided contact addresses to market mediation and attempt to convene all relevant (and requested) decision-makers.
	</p>
	<p>A session, training or can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement. A partially-scheduled mediation can also be rescheduled to an available date for $175, at any time up until seven calendar days before the engagement date.
	</p>
	<p>Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and in that case will refund all payments. Pro-rated refunds are offered under conditions for recusal. Otherwise, there are no refunds for cancellation.
	</p>
</div>`;
});
export { Refunds as default, hydrate, prerender, router };
