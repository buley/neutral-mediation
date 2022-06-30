import { c as create_ssr_component } from "../../chunks/index-645d40f0.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var cancellation_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Cancellation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Cancellation Policy</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1dyewx4">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Cancellation Policy</h3>
	<p>A session, training or can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement. A training or mediation session will not be considered fully scheduled until all parties complete the required paperwork and pay their participation fees, upon which a Mediation Engagement Letter is sent out and signed by all parties. A partially-scheduled meditation can similarly be rescheduled for a fee, up until seven calendar days before the engagement date. There are no refunds on canceled sessions and training except in the narrow circumstances defined in the <a href="${"/refunds"}">refund policy</a>.
	</p>
</div>`;
});
export { Cancellation as default, hydrate, prerender, router };
