import { c as create_ssr_component, v as validate_component } from "../../chunks/index-f900b887.js";
import { M as MetaTags } from "../../chunks/MetaTags-380877df.js";
import { d as dev, b as browser } from "../../chunks/env-6061fae6.js";
const JsonLd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let json;
  let { output = "head" } = $$props;
  let { schema = {} } = $$props;
  if ($$props.output === void 0 && $$bindings.output && output !== void 0)
    $$bindings.output(output);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  isValid = schema && typeof schema === "object";
  json = `${'<script type="application/ld+json">'}${JSON.stringify({
    "@context": "https://schema.org",
    ...schema
  })}${"<\/script>"}`;
  return `${$$result.head += `${isValid && output === "head" ? `<!-- HTML_TAG_START -->${json}<!-- HTML_TAG_END -->` : ``}`, ""}

${isValid && output === "body" ? `<!-- HTML_TAG_START -->${json}<!-- HTML_TAG_END -->` : ``}`;
});
var logo = "/_app/immutable/assets/Icon-22d46d26.png";
var mediation_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Mediation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Mediation</title>
	<meta name="${"description"}" content="${"Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral."}">
	${validate_component(JsonLd, "JsonLd").$$render($$result, {
    schema: {
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://neutrals.io/mediation"
      },
      headline: "Mediation",
      image: [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],
      datePublished: "2015-02-05T08:00:00+08:00",
      dateModified: "2015-02-05T09:20:00+08:00",
      author: { "@type": "Person", name: "Taylor Buley" },
      publisher: {
        "@type": "Organization",
        name: "Neutral Mediation",
        logo: { "@type": "ImageObject", url: "" }
      }
    }
  }, {}, {})}
	${validate_component(MetaTags, "MetaTags").$$render($$result, {
    title: "Mediation",
    titleTemplate: "%s | Neutral Mediation",
    description: "Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral.",
    canonical: "https://neutrals.io/mediation",
    openGraph: {
      url: "https://neutrals.io/mediation",
      title: "Open Graph Title",
      description: "Open Graph Description",
      images: [
        {
          url: { logo },
          width: 800,
          height: 600,
          alt: "Og Image Alt"
        }
      ],
      site_name: "Neutral Mediation"
    },
    twitter: {
      handle: "@NeutralCA",
      site: "@site",
      cardType: "summary_large_image",
      title: "Mediation",
      description: "Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral.",
      image: "",
      imageAlt: "Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral."
    },
    facebook: { appId: "235420558425239" }
  }, {}, {})}</sveltekit:head>

<div class="${"content svelte-cf77e8"}"><h1>Mediation</h1>

	<h2>Our Practice</h2>

	<p>Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral. <a href="${"/background"}">Read about our neutral here</a>. Optionally, a neutral can lead mediation services on-site at an organization or an agreed-upon location, per the <a href="${"/prices"}">travel policy</a>. <em>Mediation sessions start at $400 per participant.</em> For more information about lunch stipends for full-day mediation sessions, see our <a href="${"/prices"}">pricing page</a>. For individual-focused coaching sessions, see our <a href="${"/coaching"}">coaching page</a>. For neutral-led negotiation sessions, see our <a href="${"/negotiation"}">negotiation page</a>. For mediation and negotiation training, see our <a href="${"/training"}">training page</a>. For mediation, negotiation and conflict consulting for organizations, see our <a href="${"/consulting"}">consulting page</a>.
	</p>

	<h2>Our Value</h2>

	<p>Neutral Mediation helps customers move forward beyond emotional or complex conflict through confidential mediation sessions hosted virtually. Overcome indecision and end the trauma of conflict in as little as one session. Feel relieved and trust a professionally-trained neutral to create a safe environment to hear and be heard.
	</p><p></p><h2>Our Services</h2>

	<h3>Mediation Sessions</h3>

	<p>Neutral-led virtual mediation session for four or eight hours, optionally on-site at an organization. Mediation engagements typically concern engineering internal mediation processes as a form of risk management. <em>Four-hour, half-day mediation sessions cost $400 per participant. Eight-hour, full-day mediation sessions cost $750 per person.</em> <a href="${"https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/e22010b4-e7df-49d8-a1db-0355e57895eb"}">Click here to book a mediation session</a>.</p>

	<h3>Mediation Consulting</h3>

	<p>Neutral-led virtual mediation consulting session for one, four, or eight hours, optionally on-site at an organization. Mediation engagements typically involve community facilitation, collaborative discussion, or designing internal mediation processes for risk management. <em>Mediation consulting costs $175 per hour per participant.</em> <a href="${"https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/sbcc6e0750eb25cc175571dd6570a5adc80e1aa1e"}">Click here to book a consulting session</a>. For more information, see our <a href="${"/consulting"}">consulting page</a>.</p>

	<h3>Mediation Training</h3>

	<p>An eight-hour virtual training session on mediation, led by a neutral. Training is course-guided education. <em>Eight-hour mediation trainings for up to eight people cost $1,250 per participant.</em> <a href="${"https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/37f300fe-158e-4963-8dac-bf092187ab1a"}">Click here to book a mediation training session</a>. For more information on trainings, including course content, see our <a href="${"/training"}">training page</a>.
	</p>

	<h3>More Information</h3>

	<ul><li><a href="${"/pages/quotes/mediation"}">Mediation Quotes</a></li>
		<li><a href="${"/pages/mediation/what-mediation-is"}">What Mediation Is</a></li>
		<li><a href="${"/pages/mediation/benefits-of-mediation"}">Benefits of Mediation</a></li>
		<li><a href="${"/pages/mediation/mediation-confidentiality"}">Mediation Confidentiality</a></li>
		<li><a href="${"/pages/mediation/mediation-law"}">Mediation Law</a></li>
		<li><a href="${"/pages/mediation/example-mediation-scenarios"}">Example Mediation Scenarios</a></li>
		<li><a href="${"/pages/mediation/pillars-of-mediation"}">Pillars of Mediation</a></li>
		
		
		<li><a href="${"/pages/mediation/who-mediators-are"}">Who Mediators Are</a></li>
		
		<li><a href="${"/pages/mediation/how-mediators-create-value"}">How Mediators Create Value</a></li>
		
		</ul>

</div>`;
});
export { Mediation as default, hydrate, prerender, router };
