
export const courseDescriptions: { [key: string]: string } = {
  // Antonio's Framework
  "A Note to My Friends": "A welcoming \"field manual\" on how to think like a long-term compounder: embrace second-order thinking, stay emotionally calm through draw-downs, and hunt for asymmetric pay-offs rather than sure things.",
  "Introducing the Framework": "Step-by-step tour of the process Antonio used to find real-world multibaggers: sourcing ideas, stress-testing narratives, translating edge into numbers and sizing positions when probability meets price.",
  "Identifying Potential Multi-Baggers": "Teaches the contrast between early optionality (companies that can go 10-30×) and incumbent fragility (why market leaders often miss disruptive waves). You'll learn the qualitative \"tells\" for both.",
  "The Costco Algorithm": "Breaks down Costco's perpetual \"more value → lower real prices → reinvest savings\" cycle, then shows how that exact loop re-appears in Amazon, Tesla, Hims and even SaaS pricing strategies.",
  "Strengthening Moats and Growth": "Deep dive into network effects, process power and platform economics. Explains why some moats widen with scale and others erode, and how to measure each with second-level KPIs.",
  "The Nvidia/Palantir Algorithm": "Case study where decades of R&D (CUDA, Foundry) suddenly converge with a catalyst (AI boom, AIP) to unlock hyper-growth and sky-high operating leverage. Offers a repeatable screening template.",
  "Validating with KPIs": "Turns gut-feel into dashboards: choose \"traction\" metrics (users, usage), \"monetisation\" metrics (ARPU, take-rate) and \"durability\" metrics (cohort retention, LTV/CAC) that foreshadow the income-statement twelve months out.",
  "Front Running Financials": "Shows how narrative-driven analysts consistently beat spreadsheet-only analysts by pre-reading forthcoming revenue and margin shifts from product, pricing and hiring data. Includes a checklist to build your own \"earnings prediction log\".",
  "The Amazon and Spotify Algorithm": "Two worked examples: Amazon's \"Capex Ghost\" (spending peaks a year before bursting revenue) and Spotify's margin ladder (gross → contribution → operating). Trains you to link line items to strategy.",
  "Building a High Performing Portfolio": "Practical rules for sizing: concentrate when conviction × mispricing is extreme, dilute when uncertainty grows, and scalp winners only after underlying KPIs stall. Covers psychological safeguards against over-trading.",
  "Framework Summary": "Five-minute lightning review that chains mindset → qualitative filter → KPI tree → valuation → sizing into a single, printable checklist for daily reference.",
  "Valuation": "Replaces single-point DCFs with a Monte Carlo of forward free-cash-flow scenarios. You'll build a distribution curve, tag probabilities to each band and check whether market price fairly discounts the fat-tail upside.",
  "Managing a Watchlist": "Quarterly routine: refresh KPIs, assign conviction scores, record catalyst dates and cull \"zombie\" names. Ensures you're always ready to pounce when price dislocates from fundamentals.",
  "Framework Cheatsheet": "One-page visual of all algorithms, KPI categories, valuation levers and position-sizing limits—ideal for taping next to your monitor.",
  "Building an Audience": "How to translate research into persuasive public memos that attract capital, feedback and partnership opportunities. Covers narrative structure, data visualisation and publication cadence.",
  "Mistakes Worth $300K": "Autopsy of three six-figure missteps: thesis drift, premature selling and leverage misuse. Provides tangible guardrails you can copy.",
  "Managing Volatility": "Separates price noise from fundamental risk; quantifies the hidden tax of constant trading; and offers scripts for leaning into draw-downs when narrative and KPIs stay intact.",
  "Getting Help from Antonio": "Details on private Slack, office-hour cadence, portfolio review form and expected response times, so you always know how to access personalised guidance.",

  // Guided Deep Dives
  "Deep Dives Introduction": "Argues that writing 30–40 structured deep dives builds an \"edge library\" that compounds knowledge and returns for decades.",
  "Meta Deep Dive": "Evaluates Meta's ads-→AI-→commerce flywheel, Reality Labs optionality and cash-cow economics; includes KPI dashboard and valuation bands.",
  "Amazon Deep Dive": "Analyses the logistics moat, AWS/ads optionality and the Capex Ghost cycle; maps how each unit ties back to the Costco Algorithm.",
  "Palantir Deep Dive": "Dissects government beachhead, commercial expansion and the new AIP platform; stress-tests profitability trajectory under different deployment models.",
  "Spotify Deep Dive": "Breaks down two-sided creator-consumer network, podcast/audiobook verticals and gross-margin runway; sizes upside from marketplace fees.",
  "Hims Deep Dive": "Shows Costco-style price/quality loop in telehealth; tracks cohort retention and cash-conversion from subscriptions.",
  "Duolingo Deep Dive": "Maps viral growth loops, gamification retention and freemium economics; explores monetisation levers beyond ads.",
  "Finishing Off": "Wrap-up that sets a 12-month practice plan: quarterly KPI reviews, annual thesis rewrites and community check-ins to keep your process sharp.",

  // FAQ
  "Course Slides": "All slide decks live in \"Resources → Slides & Cheatsheets\" inside the dashboard; click the module's folder icon to download each PDF.",
  "Probabilistic Model": "A valuation tool that assigns probabilities to many FCF outcomes instead of betting on one deterministic future; helps capture fat-tail upside while capping downside.",
  "Simple Accounting": "Focus on three high-signal areas—revenue delta, margin trend and balance-sheet strength—so you avoid paralysis from GAAP minutiae.",
  "Network Economy": "When distribution costs drop near zero, value accrues to the node that aggregates users, data and transactions, creating winner-take-most dynamics.",
  "New Verticals": "Adjacent product lines that leverage an existing user base to lift ARPU with little extra acquisition cost (e.g., Spotify adding audiobooks).",
  "Flywheel": "A feedback loop where scale lowers unit cost or raises product value, attracting more users, which increases scale again—compounding advantage each turn.",
  "Inflection Point": "The moment operating leverage flips: revenue climbs faster than costs or churn falls below a critical threshold, priming a re-rating in the financials.",
  "Core Value Creation": "The fundamental equation—such as Δ subscribers × Δ ARPU—that converts inputs into free-cash-flow per share; the heartbeat of any KPI tree.",
  "Capital Allocation": "Management's skill in deploying every marginal dollar—into R&D, price cuts, acquisitions or buybacks—based on expected risk-adjusted return, not quarterly optics.",
  "Organizational Properties": "Leadership quality, operating cadence and structural incentives interact: strengths reinforce, weaknesses compound; score each to gauge durability.",
  "Ask a Question": "Open thread inside the course where Antonio answers custom queries during weekly office hours."
};

// Framework overview
export const frameworkOverview = "Antonio's Framework — Master module that outlines the entire investing workflow you'll use throughout the course: mindset, qualitative pattern-recognition, KPI design, probabilistic valuation and disciplined portfolio construction. It sets the vocabulary and mental models that every later class references.";

// Deep Dives overview
export const deepDivesOverview = "Guided Deep Dives — Hands-on case studies that apply the framework front-to-back on real companies.";

// FAQ overview
export const faqOverview = "Frequently Asked Questions (Ask me questions here) — 1–3 min micro-lessons answering recurrent doubts.";

// Helper function to get description by title (fuzzy match)
export const getDescriptionByTitle = (title: string): string => {
  // Try exact match first
  if (courseDescriptions[title]) {
    return courseDescriptions[title];
  }
  
  // Try fuzzy match
  const key = Object.keys(courseDescriptions).find(
    k => title.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(title.toLowerCase())
  );
  
  return key ? courseDescriptions[key] : "Detailed description coming soon.";
};
