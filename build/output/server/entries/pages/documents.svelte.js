import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-6061fae6.js";
var documents_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Documents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Document &amp; Forms</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content svelte-cf77e8"}"><h1>Forms &amp; Documents</h1>

	<h3>Client Forms</h3>

	<h4>Mediation</h4>
	<ul><li>Mediation Consultation Request Form</li></ul>

	<h4>Negotiation</h4>
	<ul><li>Negotiation Consultation Request Form</li></ul>

	<h4>Coaching</h4>
	<ul><li><a href="${"/forms/arrogance"}">Arrogance Analysis</a></li>
		<li><a href="${"/forms/autopilot"}">Autopilot Analysis</a></li>
		<li><a href="${"/forms/coaching"}">Coaching Analysis</a></li>
		<li><a href="${"/forms/collaboration"}">Collaboration Analysis</a></li>
		<li><a href="${"/forms/communication"}">Communication Analysis</a></li>
		<li><a href="${"/forms/conflict"}">Conflict Analysis</a></li>
		<li><a href="${"/forms/emotional"}">Emotions Analysis</a></li>
		<li><a href="${"/forms/goals"}">Goals Analysis</a></li>
		<li><a href="${"/forms/honesty"}">Honesty Analysis</a></li>
		<li><a href="${"/forms/layered"}">Layered Conflict Analysis</a></li>
		<li><a href="${"/forms/positive"}">Positive Conflict Analysis</a></li>
		<li><a href="${"/forms/role-reversal"}">Role-Reversal Analysis</a></li>
		<li><a href="${"/forms/root"}">Root Emotional Analysis</a></li>
		<li><a href="${"/forms/self-assessment"}">Self-Assessment</a></li></ul>
	<h3>Questionnaires</h3>
	<ul><li>Mediation Consultation Participant Questionnaire</li>
		<li>Mediation Participant Questionnaire</li></ul>

	<h3>Legal Documents</h3>
	<ul><li>Mediation Agreement</li>
		<li>Confidentiality Agreement</li>
		<li>Settlement Agreement</li></ul>

	<h3>Assessments</h3>
	<ul><li>Mindset Assessment</li></ul>

	<h3>Examples</h3>
	<ul><li>Example Mediation Engagement Letter</li>
		<li>Example Mediation Provisions</li></ul>

</div>`;
});
export { Documents as default, hydrate, prerender, router };
