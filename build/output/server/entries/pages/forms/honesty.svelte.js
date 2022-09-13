import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-6061fae6.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Honesty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<sveltekit:head><title>Honesty Analysis Form</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content"}"><h1>Honesty Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSc0iKMi_JTV_SPz59HCZ_XbCLoJuu5SOs6Y29AOnmzVmmw_Dw/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Honesty as default, hydrate, prerender, router };
