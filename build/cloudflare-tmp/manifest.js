export const manifest = {
	appDir: "_app",
	assets: new Set(["FavIcon.png","Icon.png","Icon.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"start-d11db395.js","js":["start-d11db395.js","chunks/index-ebfde0cd.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			{
				type: 'endpoint',
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/sitemap.xml.js')
			},
			{
				type: 'endpoint',
				id: "random",
				pattern: /^\/random\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/random.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/","/about","/availability","/background","/cancellation","/coaching","/consulting","/contact","/cookies","/disclaimer","/documents","/ethics","/key","/mediation","/negotiation","/news","/press","/prices","/privacy","/recusal","/refunds","/resume","/security","/terms","/thanks","/training","/w9","/forms/arrogance","/forms/autopilot","/forms/coaching","/forms/collaboration","/forms/communication","/forms/conflict","/forms/courage","/forms/emotional","/forms/goals","/forms/honesty","/forms/layered","/forms/positive","/forms/role-reversal","/forms/root","/forms/self-assessment","/pages/quotes","/pages/coaching/acceptance","/pages/coaching/apology","/pages/coaching/benefits-of-conflict-coaching","/pages/coaching/breathwork","/pages/coaching/cbt","/pages/coaching/conflict-coaching-process","/pages/coaching/emotions","/pages/coaching/empathy","/pages/coaching/example-conflict-coaching-scenarios","/pages/coaching/forgiveness","/pages/coaching/gratitude","/pages/coaching/humility","/pages/coaching/limitations-of-conflict-coaching","/pages/coaching/meditation","/pages/coaching/mindset-assessment","/pages/coaching/pillars-of-conflict-coaching","/pages/coaching/rebt","/pages/coaching/relationships","/pages/coaching/what-is-conflict-coaching","/pages/mediation/benefits-of-mediation","/pages/mediation/example-mediation-provisions","/pages/mediation/example-mediation-scenarios","/pages/mediation/how-mediators-create-value","/pages/mediation/how-to-involve-a-neutral","/pages/mediation/limits-of-mediation","/pages/mediation/mediation-best-practices","/pages/mediation/mediation-confidentiality","/pages/mediation/mediation-law","/pages/mediation/mediation-process","/pages/mediation/pillars-of-mediation","/pages/mediation/what-a-mediator-does","/pages/mediation/what-mediation-is","/pages/mediation/who-mediators-are","/pages/mediation/why-a-mediator-is-worthwhile","/pages/negotiation/benefits-of-negotiation","/pages/negotiation/example-negotiation-scenarios","/pages/negotiation/limitations-of-negotiation","/pages/negotiation/pillars-of-negotiation","/pages/negotiation/what-is-negotiation","/pages/quotes/attitude","/pages/quotes/civics","/pages/quotes/coaching","/pages/quotes/emotion","/pages/quotes/forgiveness","/pages/quotes/hope","/pages/quotes/mediation","/pages/quotes/negotiation","/pages/quotes/reflection","/pages/quotes/storytelling","/sitemap.xml"]);
