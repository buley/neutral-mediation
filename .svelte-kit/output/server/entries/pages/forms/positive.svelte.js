import { c as create_ssr_component } from "../../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Positive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Positive Conflict Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-5vfsr4">`, ""}

<div class="${"content"}"><h1>Positive Conflict Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSeepa2YNEypg9GpGJgKKgs-2vmvRXsM9Rt3S_8-N2eEviq0Ng/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Positive as default, hydrate, prerender, router };
