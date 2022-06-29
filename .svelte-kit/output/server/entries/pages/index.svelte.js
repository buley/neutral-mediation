import { c as create_ssr_component } from "../../chunks/index-b1570763.js";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "section.svelte-81pi2k.svelte-81pi2k{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-81pi2k.svelte-81pi2k{width:100%}.welcome.svelte-81pi2k.svelte-81pi2k{display:block;position:relative;width:100%;min-height:400px;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-81pi2k img.svelte-81pi2k{position:absolute;object-fit:cover;width:100%;height:100%;top:0;display:block}")();
const css = {
  code: "section.svelte-81pi2k.svelte-81pi2k{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-81pi2k.svelte-81pi2k{width:100%}.welcome.svelte-81pi2k.svelte-81pi2k{display:block;position:relative;width:100%;min-height:400px;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-81pi2k img.svelte-81pi2k{position:absolute;object-fit:cover;width:100%;height:100%;top:0;display:block}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Neutral Mediation"}" data-svelte="svelte-nt1mln">`, ""}

<section class="${"svelte-81pi2k"}"><h1 class="${"svelte-81pi2k"}">The path forward starts here.</h1>

	<span class="${"welcome svelte-81pi2k"}"><picture><source srcset="${"anonymous-couple-talking.webp"}" type="${"image/webp"}">
			<img src="${"anonymous-couple-talking.webp"}" alt="${"Welcome"}" class="${"svelte-81pi2k"}"></picture></span>

</section>`;
});
export { Routes as default, prerender };
