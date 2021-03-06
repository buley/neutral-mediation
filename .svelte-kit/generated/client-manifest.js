export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/availability.svelte"),
	() => import("../../src/routes/background.svelte"),
	() => import("../../src/routes/cancellation.svelte"),
	() => import("../../src/routes/coaching.svelte"),
	() => import("../../src/routes/consulting.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/cookies.svelte"),
	() => import("../../src/routes/disclaimer.svelte"),
	() => import("../../src/routes/documents.svelte"),
	() => import("../../src/routes/ethics.svelte"),
	() => import("../../src/routes/forms/autopilot.svelte"),
	() => import("../../src/routes/forms/coaching.svelte"),
	() => import("../../src/routes/forms/collaboration.svelte"),
	() => import("../../src/routes/forms/communication.svelte"),
	() => import("../../src/routes/forms/conflict.svelte"),
	() => import("../../src/routes/forms/courage.svelte"),
	() => import("../../src/routes/forms/goals.svelte"),
	() => import("../../src/routes/forms/positive.svelte"),
	() => import("../../src/routes/forms/self-assessment.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/key.svelte"),
	() => import("../../src/routes/mediation.svelte"),
	() => import("../../src/routes/negotiation.svelte"),
	() => import("../../src/routes/news.svelte"),
	() => import("../../src/routes/pages/coaching/acceptance.svelte"),
	() => import("../../src/routes/pages/coaching/apology.svelte"),
	() => import("../../src/routes/pages/coaching/benefits-of-conflict-coaching.svelte"),
	() => import("../../src/routes/pages/coaching/breathwork.svelte"),
	() => import("../../src/routes/pages/coaching/cbt.svelte"),
	() => import("../../src/routes/pages/coaching/conflict-coaching-process.svelte"),
	() => import("../../src/routes/pages/coaching/emotions.svelte"),
	() => import("../../src/routes/pages/coaching/empathy.svelte"),
	() => import("../../src/routes/pages/coaching/example-conflict-coaching-scenarios.svelte"),
	() => import("../../src/routes/pages/coaching/forgiveness.svelte"),
	() => import("../../src/routes/pages/coaching/gratitude.svelte"),
	() => import("../../src/routes/pages/coaching/humility.svelte"),
	() => import("../../src/routes/pages/coaching/limitations-of-conflict-coaching.svelte"),
	() => import("../../src/routes/pages/coaching/meditation.svelte"),
	() => import("../../src/routes/pages/coaching/mindset-assessment.svelte"),
	() => import("../../src/routes/pages/coaching/pillars-of-conflict-coaching.svelte"),
	() => import("../../src/routes/pages/coaching/rebt.svelte"),
	() => import("../../src/routes/pages/coaching/relationships.svelte"),
	() => import("../../src/routes/pages/coaching/what-is-conflict-coaching.svelte"),
	() => import("../../src/routes/pages/mediation/benefits-of-mediation.svelte"),
	() => import("../../src/routes/pages/mediation/example-mediation-provisions.svelte"),
	() => import("../../src/routes/pages/mediation/example-mediation-scenarios.svelte"),
	() => import("../../src/routes/pages/mediation/how-mediators-add-value.svelte"),
	() => import("../../src/routes/pages/mediation/how-to-involve-a-neutral.svelte"),
	() => import("../../src/routes/pages/mediation/limits-of-mediation.svelte"),
	() => import("../../src/routes/pages/mediation/mediation-best-practices.svelte"),
	() => import("../../src/routes/pages/mediation/mediation-confidentiality.svelte"),
	() => import("../../src/routes/pages/mediation/mediation-law.svelte"),
	() => import("../../src/routes/pages/mediation/mediation-process.svelte"),
	() => import("../../src/routes/pages/mediation/pillars-of-mediation.svelte"),
	() => import("../../src/routes/pages/mediation/what-a-mediator-does.svelte"),
	() => import("../../src/routes/pages/mediation/what-mediation-is.svelte"),
	() => import("../../src/routes/pages/mediation/who-mediators-are.svelte"),
	() => import("../../src/routes/pages/mediation/why-a-medator-is-worthwhile.svelte"),
	() => import("../../src/routes/pages/negotiation/benefits-of-negotiation.svelte"),
	() => import("../../src/routes/pages/negotiation/example-negotiation-scenarios.svelte"),
	() => import("../../src/routes/pages/negotiation/limitations-of-negotiation.svelte"),
	() => import("../../src/routes/pages/negotiation/pillars-of-negotiation.svelte"),
	() => import("../../src/routes/pages/negotiation/what-is-negotiation.svelte"),
	() => import("../../src/routes/pages/quotes.svelte"),
	() => import("../../src/routes/press.svelte"),
	() => import("../../src/routes/prices.svelte"),
	() => import("../../src/routes/privacy.svelte"),
	() => import("../../src/routes/recusal.svelte"),
	() => import("../../src/routes/refunds.svelte"),
	() => import("../../src/routes/resume.svelte"),
	() => import("../../src/routes/security.svelte"),
	() => import("../../src/routes/terms.svelte"),
	() => import("../../src/routes/thanks.svelte"),
	() => import("../../src/routes/training.svelte"),
	() => import("../../src/routes/w9.svelte")
];

export const dictionary = {
	"": [[0, 22], [1]],
	"about": [[0, 2], [1]],
	"availability": [[0, 3], [1]],
	"background": [[0, 4], [1]],
	"cancellation": [[0, 5], [1]],
	"coaching": [[0, 6], [1]],
	"consulting": [[0, 7], [1]],
	"contact": [[0, 8], [1]],
	"cookies": [[0, 9], [1]],
	"disclaimer": [[0, 10], [1]],
	"documents": [[0, 11], [1]],
	"ethics": [[0, 12], [1]],
	"key": [[0, 23], [1]],
	"mediation": [[0, 24], [1]],
	"negotiation": [[0, 25], [1]],
	"news": [[0, 26], [1]],
	"press": [[0, 67], [1]],
	"prices": [[0, 68], [1]],
	"privacy": [[0, 69], [1]],
	"recusal": [[0, 70], [1]],
	"refunds": [[0, 71], [1]],
	"resume": [[0, 72], [1]],
	"security": [[0, 73], [1]],
	"terms": [[0, 74], [1]],
	"thanks": [[0, 75], [1]],
	"training": [[0, 76], [1]],
	"w9": [[0, 77], [1]],
	"forms/autopilot": [[0, 13], [1]],
	"forms/coaching": [[0, 14], [1]],
	"forms/collaboration": [[0, 15], [1]],
	"forms/communication": [[0, 16], [1]],
	"forms/conflict": [[0, 17], [1]],
	"forms/courage": [[0, 18], [1]],
	"forms/goals": [[0, 19], [1]],
	"forms/positive": [[0, 20], [1]],
	"forms/self-assessment": [[0, 21], [1]],
	"pages/quotes": [[0, 66], [1]],
	"pages/coaching/acceptance": [[0, 27], [1]],
	"pages/coaching/apology": [[0, 28], [1]],
	"pages/coaching/benefits-of-conflict-coaching": [[0, 29], [1]],
	"pages/coaching/breathwork": [[0, 30], [1]],
	"pages/coaching/cbt": [[0, 31], [1]],
	"pages/coaching/conflict-coaching-process": [[0, 32], [1]],
	"pages/coaching/emotions": [[0, 33], [1]],
	"pages/coaching/empathy": [[0, 34], [1]],
	"pages/coaching/example-conflict-coaching-scenarios": [[0, 35], [1]],
	"pages/coaching/forgiveness": [[0, 36], [1]],
	"pages/coaching/gratitude": [[0, 37], [1]],
	"pages/coaching/humility": [[0, 38], [1]],
	"pages/coaching/limitations-of-conflict-coaching": [[0, 39], [1]],
	"pages/coaching/meditation": [[0, 40], [1]],
	"pages/coaching/mindset-assessment": [[0, 41], [1]],
	"pages/coaching/pillars-of-conflict-coaching": [[0, 42], [1]],
	"pages/coaching/rebt": [[0, 43], [1]],
	"pages/coaching/relationships": [[0, 44], [1]],
	"pages/coaching/what-is-conflict-coaching": [[0, 45], [1]],
	"pages/mediation/benefits-of-mediation": [[0, 46], [1]],
	"pages/mediation/example-mediation-provisions": [[0, 47], [1]],
	"pages/mediation/example-mediation-scenarios": [[0, 48], [1]],
	"pages/mediation/how-mediators-add-value": [[0, 49], [1]],
	"pages/mediation/how-to-involve-a-neutral": [[0, 50], [1]],
	"pages/mediation/limits-of-mediation": [[0, 51], [1]],
	"pages/mediation/mediation-best-practices": [[0, 52], [1]],
	"pages/mediation/mediation-confidentiality": [[0, 53], [1]],
	"pages/mediation/mediation-law": [[0, 54], [1]],
	"pages/mediation/mediation-process": [[0, 55], [1]],
	"pages/mediation/pillars-of-mediation": [[0, 56], [1]],
	"pages/mediation/what-a-mediator-does": [[0, 57], [1]],
	"pages/mediation/what-mediation-is": [[0, 58], [1]],
	"pages/mediation/who-mediators-are": [[0, 59], [1]],
	"pages/mediation/why-a-medator-is-worthwhile": [[0, 60], [1]],
	"pages/negotiation/benefits-of-negotiation": [[0, 61], [1]],
	"pages/negotiation/example-negotiation-scenarios": [[0, 62], [1]],
	"pages/negotiation/limitations-of-negotiation": [[0, 63], [1]],
	"pages/negotiation/pillars-of-negotiation": [[0, 64], [1]],
	"pages/negotiation/what-is-negotiation": [[0, 65], [1]]
};