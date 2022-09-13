import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-6061fae6.js";
var recusal_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Recusal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Recusal</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content svelte-cf77e8"}"><h3>Recusal</h3>
	<p>Neutral Mediation reserves the right to recuse itself from an engagement at any time, for any reason, and, in that case, will issue refunds per the <a href="${"/refunds"}">refunds policy</a>.
	</p>
	<p>For all mediation and consultancy services, Neutral Mediation will disclose any potential conflicts of interest.
	</p>
</div>`;
});
export { Recusal as default, hydrate, prerender, router };
