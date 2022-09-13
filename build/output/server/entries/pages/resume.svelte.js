import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-6061fae6.js";
var resume_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Resume</title>
	<meta name="${"description"}" content="${"Mediator resume"}">
	</sveltekit:head>

<div class="${"content svelte-cf77e8"}"><h1>Neutral Resume</h1>
		<div style="${"position:relative;padding-top:max(60%,326px);height:0;width:100%"}"><iframe allow="${"clipboard-write"}" sandbox="${"allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox"}" allowfullscreen="${"true"}" style="${"position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;"}" src="${"https://e.issuu.com/embed.html?d=taylorbuleycurrentresume&u=neutralmediation"}"></iframe></div>
</div>`;
});
export { Resume as default, hydrate, prerender, router };
