import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-6061fae6.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Courage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<sveltekit:head><title>Courage Analysis Form</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content"}"><h1>Courage Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSdmCJq6fYGEBbyal_UCYB166bKPBEqovGDlXEv9x72UmeFzfg/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Courage as default, hydrate, prerender, router };
