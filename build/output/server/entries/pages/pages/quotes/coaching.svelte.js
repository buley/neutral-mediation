import { c as create_ssr_component } from "../../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../../chunks/env-6061fae6.js";
var coaching_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Coaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Useful Coaching Quotes</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content svelte-cf77e8"}"><h1>Useful Coaching Quotes</h1>
	<ul class="${"centered-list"}"><li><a href="${"/pages/quotes/attitude"}">Useful Attitude Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/emotion"}">Useful Emotion Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/forgiveness"}">Useful Forgiveness Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/hope"}">Useful Hope Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/civics"}">Useful Civics Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/reflection"}">Useful Reflection Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/storytelling"}">Useful Storytelling Coaching Quotes</a></li></ul>
</div>`;
});
export { Coaching as default, hydrate, prerender, router };
