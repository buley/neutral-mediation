import { c as create_ssr_component } from "../../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Courage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Courage Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1qlun61">`, ""}

<div class="${"content"}"><h1>Courage Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSdmCJq6fYGEBbyal_UCYB166bKPBEqovGDlXEv9x72UmeFzfg/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Courage as default, hydrate, prerender, router };
