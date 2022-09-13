<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Example Provisions</title>
	<meta name="description" content="" />
	<!--
<JsonLd
  schema={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://example.com/article'
    },
    headline: 'Article headline',
    image: [
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg'
    ],
    datePublished: '2015-02-05T08:00:00+08:00',
    dateModified: '2015-02-05T09:20:00+08:00',
    author: {
      '@type': 'Person',
      name: 'Taylor Buley'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neutral Mediation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.jpg'
      }
    }
  }}
/>
	<MetaTags
	  title="Using More of Config"
		titleTemplate = '%s | Neutral Mediation'
	  description="This example uses more of the available config options."
	  canonical="https://www.canonical.ie/"
	  openGraph={{
	    url: 'https://www.url.ie/a',
	    title: 'Open Graph Title',
	    description: 'Open Graph Description',
	    images: [
	      {
	        url: 'https://www.example.ie/og-image-01.jpg',
	        width: 800,
	        height: 600,
	        alt: 'Og Image Alt'
	      },
	      {
	        url: 'https://www.example.ie/og-image-02.jpg',
	        width: 900,
	        height: 800,
	        alt: 'Og Image Alt Second'
	      },
	      { url: 'https://www.example.ie/og-image-03.jpg' },
	      { url: 'https://www.example.ie/og-image-04.jpg' }
	    ],
	    site_name: 'SiteName'
	  }}
	  twitter={{
	    handle: '@handle',
	    site: '@site',
	    cardType: 'summary_large_image',
	    title: 'Using More of Config',
	    description: 'This example uses more of the available config options.',
	    image: 'https://www.example.ie/twitter-image.jpg',
	    imageAlt: 'Twitter image alt'
	  }}
	  facebook={{
	    appId: '235420558425239'
	  }}
	/>
	-->
</svelte:head>

<div class="content">
	<h1>Example Provisions</h1>
	<h2>Mediation Provisions</h2>
	
	<h3>Simple</h3>

	<p>In the event any controversy arising under this agreement is not resolved through negotiations between the parties, the parties agree to participate in a nonbinding mediation administered by Neutral Mediation (https://neutrals.io). This mediation must be conducted and completed before any party may commence a civil action or arbitration. Each side shall split the fees equally unless otherwise agreed upon by the parties in writing. If the parties cannot agree on a Mediator within 45 days of requesting a hearing, Neutral Mediation will provide a Mediator based on substantive and procedural knowledge, availability and location. The mediation shall be completed within 90 days of the selection of the Mediator unless otherwise agreed upon by the parties in writing. The mediation will be conducted per, and governed by, <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1115.&amp;lawCode=EVID">California Evidence Code Sections 1115-1128</a>.</p>

	<h3>General Law</h3>

	<p>1. <em>Agreement to Mediate</em>: In the event of any controversy, claim or dispute arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this Agreement (“Dispute”), we agree to submit any such Dispute to mediation administered by Neutral Mediation  (https://neutrals.io).</p>

	<p>2. <em>Initiating Mediation</em>: Any party to this agreement may demand mediation at any time by serving a written demand in person or by mail to the opposing party with a copy of the demand and of this dispute resolution agreement to Neutral Mediation.</p>

	<p>3. <em>Enforcement</em>: The parties agree that the mediation provisions of this Agreement may be enforced in the same manner as an arbitration agreement, by petitioning any court having jurisdiction for the appointment of a mediator in the same manner as a petition for the appointment of an arbitrator. Further, the parties agree that the court may award reasonable attorneys’ fees and costs to the prevailing party in any proceeding to enforce this mediation agreement.</p>

	<p>4. <em>Fees and Costs</em>: The fees and costs of the mediator shall, in the absence of an agreement to be contrary, be borne equally by all parties.</p>

	<p>5. <em>Confidentiality of Proceedings</em>: The mediation process is to be considered a settlement negotiation for all state and federal rules protecting disclosures made during such conferences from later discovery or use in evidence.</p>

	<p>The parties hereto agree that the provisions of <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=703.5.&amp;lawCode=EVID">California Evidence Code §§703.5</a> and <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1115.&amp;lawCode=EVID">1115</a>, et seq. shall apply to any mediation conducted hereunder.</p>

	<p>The entire mediation procedure is confidential, and no official record shall be made except to memorialize a settlement record. All statements, admissions, writings, promises and offers made during the mediation by any party or a party’s agent, employee, or attorney are confidential and, where appropriate, are to be considered work product and privileged. Likewise, all conduct, views and opinions, oral or written, made for, during, or under the mediation or mediation consultant by any person (including any party, party’s agent, employee, attorney, mediator or other nonparties) are confidential and privileged. Such conduct, statements, admissions, writings, promises, offers, views and opinions shall not be subject to discovery or be admissible for any purpose, including impeachment, in any litigation or other proceeding involving the parties; provided, however, that evidence otherwise admissible or subject to discovery is not excluded from discovery or admission in evidence simply as a result of it having been used in connection with this settlement process.</p>

	<p>6. <em>Settlement</em> <em>Enforceability</em>: If enforcement of any settlement agreement reached during mediation becomes necessary, it may be enforced per <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=664.6.&amp;lawCode=CCP">Code of Civil Procedure section 664.6</a>.Notwithstanding the mediation confidentiality provisions outlined in <a href="https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=EVID&amp;division=9.&amp;chapter=2.&amp;article">Evidence Code sections 1115-1128</a> and the confidentiality agreement of the parties, the settlement agreement may be introduced and admitted as evidence for this purpose. The prevailing party in any proceeding to enforce this settlement agreement shall be entitled to recover reasonable attorneys’ fees and costs.</p>

	<h3>Employee Law</h3>

	<p>Upon written notice of any dispute that arises out of or relates to an employee’s employment with [Company] (the “Dispute”), the parties shall attempt to resolve it promptly by negotiation between the parties who have authority to settle the Dispute. This process should be completed within 30 days (“Negotiation”).<br><br>If the Dispute cannot be settled through Negotiation, the parties agree first to try in good faith to settle the Dispute by mediation with Neutral Mediation (https://neutrals.io) lasting at least four hours, with payments split equally between participants, before resorting to arbitration, litigation or some other dispute resolution procedure. The process shall be confidential based on terms acceptable to the mediator.</p>

	<h3>Insurance Law</h3>

	<p>In the event of a dispute in connection with this Policy, the Insurer and the Insured (individually “party” and collectively “parties”) shall, in the first instance, try to resolve such dispute through mediation. The mediation will be commenced by either party providing written notice to the other party requesting such mediation (“the Mediation Request”). The parties will use the services of Neutral Mediation (https://neutrals.io), within 30 days. If there can be no such agreement, each party will submit a list of five mediator choices to the other, rank ordered by preference. The mediator will then be selected based on a further discussion unless an individual is on both lists and then that person would be preferred. If the process does not result in the selection of the mediator, then the parties agree to let the named provider select the mediator. Subject to a mutual agreement of the parties, the mediation will be held at a location within 100 miles of where the insured resides, not later than 60 days after the date of the Mediation Request and shall last for at least a one-day session. Any settlement agreement reached during mediation and fully executed by all parties, however, will be binding on all parties.</p>

	<p>If the Mediation does not resolve the dispute within 60 days of the first mediation session or when the mediator declares an impasse, the parties agree that the Coverage Dispute shall be resolved by final and binding arbitration per the Commercial Rules of JAMS before a single Arbitrator, unless the amount of coverage in dispute exceeds five million dollars, in which case the parties may choose to have the arbitration before a panel of three arbitrators chosen under the rules of <strong><em><strong>__</strong></em></strong>. The arbitration panel will all be neutral. The arbitration will be held within 100 miles of where the insured resides or at an agreed-upon location in the United States. The arbitrator[s] may award the prevailing party costs and/or attorneys’ fees for the Arbitration. Any State’s law invalidating this paragraph shall not affect the validity of the first paragraph herein. The parties understand that arbitration is final and binding and that they are waiving their rights to other resolution processes (such as court action or administrative proceedings).</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
