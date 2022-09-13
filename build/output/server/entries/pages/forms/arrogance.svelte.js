import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-6061fae6.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Arrogance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<sveltekit:head><title>Arrogance Analysis Form</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content"}"><h1>Arrogance Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSfnkdH4riQPSLVuF5mRdaVqK5Tqhv4R5cmrwSr7HQHeSTZ3dw/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Arrogance as default, hydrate, prerender, router };
