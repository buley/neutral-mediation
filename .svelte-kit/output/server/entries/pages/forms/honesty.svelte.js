import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Honesty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Honesty Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-702gqz">`, ""}

<div class="${"content"}"><h1>Honesty Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSc0iKMi_JTV_SPz59HCZ_XbCLoJuu5SOs6Y29AOnmzVmmw_Dw/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Honesty as default, hydrate, prerender, router };
