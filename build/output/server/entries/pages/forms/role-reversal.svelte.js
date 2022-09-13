import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-6061fae6.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Role_reversal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<sveltekit:head><title>Role-Reversal Analysis Form</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content"}"><h1>Role-Reversal Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSdWDz79qLHjK9R6ts0y4SQ4IoO3wFllXH1vBn_AzVWeSUJedw/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Role_reversal as default, hydrate, prerender, router };
