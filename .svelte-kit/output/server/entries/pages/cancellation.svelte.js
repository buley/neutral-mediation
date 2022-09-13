import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
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
  return `${$$result.head += `${$$result.title = `<title>Cancellation Policy</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-2v7fun">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Cancellation Policy</h3>
	<p>Schedules are tight and abrupt cancellations can come at the opportunity cost of solving other customers&#39; problems. A session or training can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement.
	</p>
	<p>Neutral Mediation does not consider a mediation session to be  scheduled until all parties complete the required paperwork and pay their participation fees, after which the neutral will send out, upon request, a Mediation Engagement Letter. Clients can reschedule a partially-scheduled meditation for a fee up until seven calendar days before the engagement date.
	</p>
	<p>Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and, in that case, will refund all payments. There are no refunds on canceled sessions and training except in the very narrow circumstances defined in the <a href="${"/refunds"}">refund policy</a>.
	</p>
</div>`;
});
export { Cancellation as default, hydrate, prerender, router };
