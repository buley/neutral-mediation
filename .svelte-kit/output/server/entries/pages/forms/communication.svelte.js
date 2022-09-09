import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Communication = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Communication Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-12hf4nh">`, ""}

<div class="${"content"}"><h1>Communication Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSdmyejcc746eZ6N4WT_k1HnQjbM3aKC_SCO-eH_GXCN3pM0uQ/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Communication as default, hydrate, prerender, router };
