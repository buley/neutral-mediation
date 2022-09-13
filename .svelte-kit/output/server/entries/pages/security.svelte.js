import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var security_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Security = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Information Security</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1ns2bu3">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Information Security</h3>
	<p>We actively seek to ensure the confidentiality of our practice by using modern and trusted technologies that encrypt and authenticate correspondence. </p>
	<p>All website traffic on neutrals.io is served through secure HTTP connections encrypted and using SSL.</p>
	<p>Neutral Mediation uses Google to encrypt its email and video communications. We mitigate the possibility of email spoofing by using DKIM to certify correspondence. We authenticate our domain using SPF and DMARC records, too, so when an email appears to come from https://neutrals.io there are multiple ways to verify its provenance. </p>
	<p>Upon request and, with collaboration between neutral and participant, any non-streaming correspondence can be encrypted using GPG. The public key <a href="${"https://neutrals.io/key/"}">is published online</a>.</p>
</div>`;
});
export { Security as default, hydrate, prerender, router };
