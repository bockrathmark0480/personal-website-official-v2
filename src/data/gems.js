export const gems = [
  {
    id: 1, name: "Customer Meeting Prep", category: "Sales", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Generate comprehensive customer meeting preparation, research, and roleplay scenarios for frontline Senior Account Managers and their teams.",
    userInput: "Company name, meeting type (new logo or existing customer), meeting objectives",
    setup: "Connect to Artemis, LinkedIn Sales Navigator, Salesforce, and internal customer data sources",
    setupSteps: ["Connect to Artemis platform", "Link LinkedIn Sales Navigator account", "Integrate Salesforce credentials", "Configure internal data source access", "Test with sample company"],
    fullInstructions: "# Customer Meeting Prep GEM\n\n## Purpose\nThis GEM helps you thoroughly prepare for customer meetings by generating comprehensive research, talking points, and roleplay scenarios.\n\n## How to Use\n1. Provide Company Information\n2. Specify Meeting Type\n3. Set Objectives\n\n## Best Practices\n- Run this at least 24 hours before your meeting\n- Review and customize the output\n- Use roleplay scenarios to practice\n- Update notes after the meeting",
    icon: "📋", color: "from-red-600 to-red-700", tags: ["Meeting Prep", "Research", "Roleplay", "AI"], views: 892, likes: 124
  },
  {
    id: 2, name: "Real-Time Meeting Assistant", category: "Sales", difficulty: "Moderate", setupTime: "10-15 min",
    useCase: "AI-powered real-time sales assistant that listens during meetings, suggests responses to questions/objections, identifies sales triggers, and generates follow-up materials.",
    userInput: "Enable voice-to-text during meeting, company context, meeting participants",
    setup: "Grant microphone access, integrate with web search for company research, connect to quote building system",
    setupSteps: ["Grant microphone permissions in browser", "Enable web search integration", "Connect to quote building system", "Test voice-to-text functionality"],
    fullInstructions: "# Real-Time Meeting Assistant GEM\n\n## Purpose\nProvides live assistance during sales calls by listening to the conversation and offering real-time suggestions.\n\n## How It Works\n1. Meeting Setup\n2. Live Listening\n3. Smart Suggestions\n4. Automatic Follow-up",
    icon: "🎤", color: "from-blue-600 to-blue-700", tags: ["Real-Time", "Meeting AI", "Voice"], views: 1245, likes: 167
  },
  {
    id: 3, name: "Tailored Email Template", category: "Sales", difficulty: "Easy", setupTime: "5-10 min",
    useCase: "Generate personalized, industry-specific prospecting emails for different executive personas with strong CTAs.",
    userInput: "Target company, industry, executive persona, pain points",
    setup: "No special setup required - provide context and let AI generate personalized email",
    setupSteps: ["Identify target company and persona", "Gather industry insights", "Define key pain points", "Generate and customize email"],
    fullInstructions: "# Tailored Email Template GEM\n\n## Purpose\nQuickly create personalized prospecting emails that resonate with specific personas.\n\n## Best Practices\n- Research the company first\n- Customize for the specific persona\n- Include a clear, single CTA\n- A/B test different approaches",
    icon: "✉️", color: "from-green-600 to-green-700", tags: ["Email", "Prospecting", "Personalization"], views: 2156, likes: 289
  },
  {
    id: 4, name: "New Logo Quote & Email", category: "Sales", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Analyze Artemis screenshots to generate strategic quotes and personalized prospecting emails for new logos.",
    userInput: "Artemis screenshot, company information, desired solution",
    setup: "Access to Artemis platform, quote building templates, email frameworks",
    setupSteps: ["Upload Artemis screenshot", "Extract key account data", "Build strategic quote", "Generate personalized email", "Review and send"],
    fullInstructions: "# New Logo Quote & Email GEM\n\n## Purpose\nStreamline new logo prospecting by combining account intelligence with quote generation.\n\n## Process\n1. Analyze Artemis data\n2. Build competitive quote\n3. Craft personalized email\n4. Send coordinated outreach",
    icon: "💼", color: "from-purple-600 to-purple-700", tags: ["Quoting", "Artemis", "New Logo"], views: 1567, likes: 203
  },
  {
    id: 5, name: "Quote Building GEM", category: "Sales", difficulty: "Advanced", setupTime: "20-30 min",
    useCase: "Build accurate Verizon wireless quotes using PPA files with complex pricing rules and device categorization.",
    userInput: "PPA file, line requirements, device selections, service features",
    setup: "Upload PPA pricing file, configure product catalog, set margin rules",
    setupSteps: ["Upload current PPA file", "Configure product SKUs", "Set pricing rules", "Define device categories", "Test quote accuracy"],
    fullInstructions: "# Quote Building GEM\n\n## Purpose\nGenerate precise Verizon quotes with complex pricing logic.\n\n## Key Features\n- PPA file parsing\n- Automatic device categorization\n- Margin calculations\n- Multi-line discounts\n- Accessory bundling",
    icon: "💰", color: "from-yellow-600 to-yellow-700", tags: ["Quoting", "PPA", "Pricing"], views: 1834, likes: 241
  },
  {
    id: 6, name: "Full Scope Prospect", category: "Automation", difficulty: "Advanced", setupTime: "30-45 min",
    useCase: "Complete prospecting solution: research, multi-persona emails, interactive quotes, and presentation decks.",
    userInput: "Company name, target personas, solution scope",
    setup: "Integrate research APIs, email templates, quote builder, presentation generator",
    setupSteps: ["Configure research sources", "Set up email sequences", "Link quote builder", "Connect presentation tool", "Test end-to-end workflow"],
    fullInstructions: "# Full Scope Prospect GEM\n\n## Purpose\nEnd-to-end prospecting automation from research to presentation.\n\n## Deliverables\n- Company research summary\n- Multi-persona email sequence\n- Interactive quote\n- Custom presentation deck\n- Follow-up calendar",
    icon: "🎯", color: "from-indigo-600 to-indigo-700", tags: ["Prospecting", "Multi-Channel", "Decks"], views: 1423, likes: 178
  },
  {
    id: 7, name: "SAM Quote Building Tool v2", category: "Sales", difficulty: "Advanced", setupTime: "20-30 min",
    useCase: "Advanced quoting for Sr. Account Managers with Public Pricing, Project Defend, and Uplift quotes.",
    userInput: "Account details, quote type, pricing scenario",
    setup: "Access to public pricing, Salesforce data, current contracts",
    setupSteps: ["Select quote type", "Load account data", "Apply pricing logic", "Calculate discounts", "Generate proposal"],
    fullInstructions: "# SAM Quote Building Tool v2\n\n## Purpose\nSpecialized quoting for complex account scenarios.\n\n## Quote Types\n- Public Pricing\n- Project Defend\n- Uplift/Upsell\n- Contract Renewal\n- Competitive Displacement",
    icon: "📊", color: "from-cyan-600 to-cyan-700", tags: ["Quoting", "SAM", "Advanced"], views: 1089, likes: 145
  },
  {
    id: 8, name: "Headroom Quote Builder", category: "Sales", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Generate accurate sales quotes based on existing lines and potential growth opportunities from database.",
    userInput: "Account ID, current line count, growth targets",
    setup: "Connect to customer database, configure headroom calculations",
    setupSteps: ["Pull current account data", "Calculate headroom", "Project growth scenarios", "Build expansion quote", "Present recommendations"],
    fullInstructions: "# Headroom Quote Builder\n\n## Purpose\nIdentify and quote expansion opportunities in existing accounts.\n\n## Analysis\n- Current utilization\n- Growth patterns\n- Department expansion\n- Seasonal needs\n- Technology upgrades",
    icon: "📈", color: "from-teal-600 to-teal-700", tags: ["Headroom", "Growth", "Quoting"], views: 987, likes: 132
  },
  {
    id: 9, name: "Sequence GEM", category: "Automation", difficulty: "Moderate", setupTime: "20-25 min",
    useCase: "Research companies and generate strategic 4-email prospecting sequences with customized solutions.",
    userInput: "Company list, industry, solution focus",
    setup: "Configure email templates, timing intervals, tracking",
    setupSteps: ["Upload prospect list", "Research companies", "Generate email sequence", "Set timing cadence", "Activate tracking"],
    fullInstructions: "# Sequence GEM\n\n## Purpose\nCreate multi-touch email sequences with strategic messaging.\n\n## Email Sequence\n1. Introduction + Value Prop\n2. Case Study/Social Proof\n3. Address Common Objections\n4. Strong CTA + Urgency",
    icon: "📧", color: "from-pink-600 to-pink-700", tags: ["Sequences", "Multi-Touch", "Research"], views: 1678, likes: 221
  },
  {
    id: 10, name: "Onboarding Email GEM", category: "Sales", difficulty: "Easy", setupTime: "5-10 min",
    useCase: "Analyze job openings and draft targeted emails about providing Verizon smartphones for new hires.",
    userInput: "Company careers page, hiring volume",
    setup: "Monitor job postings, template library",
    setupSteps: ["Scan job postings", "Estimate hiring volume", "Calculate device needs", "Generate email", "Schedule send"],
    fullInstructions: "# Onboarding Email GEM\n\n## Purpose\nCapitalize on hiring momentum with device provisioning offers.\n\n## Targeting\n- Companies with 5+ open roles\n- Recent funding announcements\n- Office expansions\n- Department launches",
    icon: "👋", color: "from-orange-600 to-orange-700", tags: ["Onboarding", "HR Sales", "Email"], views: 756, likes: 98
  },
  {
    id: 11, name: "Interview Roleplay", category: "Integrations", difficulty: "Easy", setupTime: "5 min",
    useCase: "Simulate realistic Verizon B2B interview experiences across Director, Associate Director, and SAM levels.",
    userInput: "Target role, experience level, focus areas",
    setup: "Select role and begin simulation",
    setupSteps: ["Choose target role", "Set difficulty level", "Start interview", "Receive feedback", "Review improvement areas"],
    fullInstructions: "# Interview Roleplay GEM\n\n## Purpose\nPractice for Verizon B2B sales interviews with AI interviewer.\n\n## Interview Types\n- SAM Role\n- Associate Director\n- Director Level\n- Executive Positions",
    icon: "🎭", color: "from-violet-600 to-violet-700", tags: ["Career", "Interview", "Roleplay"], views: 2341, likes: 312
  },
  {
    id: 12, name: "DC GEM (PIP Generator)", category: "Integrations", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Generate complete Stage 1 Performance Improvement Plan documents for B2B Mid-Markets Sales Leaders.",
    userInput: "Employee information, performance issues, goals",
    setup: "HR system integration, PIP templates",
    setupSteps: ["Gather performance data", "Define improvement goals", "Set timeline", "Generate PIP document", "Schedule review meetings"],
    fullInstructions: "# DC GEM (PIP Generator)\n\n## Purpose\nStreamline PIP creation with structured, fair documentation.\n\n## Components\n- Performance issues\n- Specific goals\n- Timeline\n- Support resources\n- Review schedule",
    icon: "📋", color: "from-red-700 to-red-800", tags: ["Leadership", "PIP", "HR"], views: 623, likes: 84
  },
  {
    id: 13, name: "Apps Script Partner", category: "Automation", difficulty: "Advanced", setupTime: "Variable",
    useCase: "Expert Google Apps Script engineer delivering automation solutions for Sheets, Docs, Gmail, and Calendar.",
    userInput: "Automation requirements, Google Workspace scope",
    setup: "Google Workspace access, Apps Script authorization",
    setupSteps: ["Define automation scope", "Design workflow", "Build script", "Test thoroughly", "Deploy and monitor"],
    fullInstructions: "# Apps Script Partner GEM\n\n## Purpose\nCustom Google Workspace automation development.\n\n## Capabilities\n- Data processing\n- Email automation\n- Calendar management\n- Document generation\n- Integration workflows",
    icon: "⚙️", color: "from-gray-600 to-gray-700", tags: ["Apps Script", "Google", "Development"], views: 1456, likes: 189
  },
  {
    id: 14, name: "Idea Builder GEM", category: "AI Agents", difficulty: "Easy", setupTime: "5 min",
    useCase: "Daily automation strategist generating 3 AI/automation ideas every night targeting Verizon sales roles.",
    userInput: "Role focus, current pain points",
    setup: "Configure daily schedule, set focus areas",
    setupSteps: ["Set your role", "Define pain points", "Choose delivery time", "Activate daily generation"],
    fullInstructions: "# Idea Builder GEM\n\n## Purpose\nDaily AI-generated automation ideas for your role.\n\n## Delivery\n- 3 ideas per day\n- Actionable and specific\n- Prioritized by impact\n- Implementation guidance",
    icon: "💡", color: "from-yellow-500 to-yellow-600", tags: ["Ideas", "Innovation", "Daily"], views: 1834, likes: 245
  },
  {
    id: 15, name: "Builder Pro 2.0", category: "Automation", difficulty: "Expert", setupTime: "Variable",
    useCase: "Master SalesOps Architect for comprehensive B2B sales automation using Google Workspace and Zapier.",
    userInput: "Complete sales process, integration requirements",
    setup: "Full stack: Google Workspace, Zapier, Salesforce, data sources",
    setupSteps: ["Audit current process", "Design automation architecture", "Build integrations", "Test workflows", "Train team"],
    fullInstructions: "# Builder Pro 2.0 GEM\n\n## Purpose\nEnterprise-grade sales automation architecture.\n\n## Expertise Areas\n- Process optimization\n- System integration\n- Data workflows\n- Custom development\n- Change management",
    icon: "🏗️", color: "from-blue-700 to-blue-800", tags: ["SalesOps", "Architecture", "Pro"], views: 1267, likes: 171
  },
  {
    id: 16, name: "GEM Builder Assistant", category: "Automation", difficulty: "Advanced", setupTime: "Variable",
    useCase: "Expert systems architect for strategic automations and workflow tools using Google Workspace integrations.",
    userInput: "Automation concept, business requirements",
    setup: "Development environment, API access",
    setupSteps: ["Requirements gathering", "Architecture design", "Development", "Testing", "Deployment"],
    fullInstructions: "# GEM Builder Assistant\n\n## Purpose\nBuild custom automation GEMs for specific needs.\n\n## Process\n- Requirements analysis\n- Technical design\n- Development\n- Testing & QA\n- Documentation",
    icon: "🔧", color: "from-purple-700 to-purple-800", tags: ["Systems", "Workflows", "Architecture"], views: 945, likes: 127
  },
  {
    id: 17, name: "Prospect Table Filler", category: "Integrations", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Deep web research specialist finding quality company contact information for purchasing decision makers.",
    userInput: "Company list, target roles",
    setup: "Research API access, data validation",
    setupSteps: ["Upload company list", "Define target personas", "Execute research", "Validate data", "Export to CRM"],
    fullInstructions: "# Prospect Table Filler GEM\n\n## Purpose\nAutomate prospect research and contact discovery.\n\n## Data Points\n- Decision maker contacts\n- Direct phone/email\n- LinkedIn profiles\n- Company tech stack\n- Recent news",
    icon: "🔍", color: "from-green-700 to-green-800", tags: ["Research", "Contacts", "Web Scraping"], views: 1123, likes: 149
  },
  {
    id: 18, name: "Apptus Assistant", category: "Sales", difficulty: "Moderate", setupTime: "10-15 min",
    useCase: "Specialized guide for non-standard contract requests in Apttus/Salesforce (Uplift, Defend, Tiered Pricing).",
    userInput: "Contract type, special requirements",
    setup: "Apttus/Salesforce access, contract templates",
    setupSteps: ["Select contract type", "Configure special terms", "Build in Apttus", "Get approvals", "Execute contract"],
    fullInstructions: "# Apptus Assistant GEM\n\n## Purpose\nNavigate complex Apttus contract scenarios.\n\n## Specialties\n- Uplift contracts\n- Defend pricing\n- Tiered structures\n- Multi-year deals\n- Custom terms",
    icon: "📄", color: "from-indigo-700 to-indigo-800", tags: ["Apttus", "Contracts", "Salesforce"], views: 789, likes: 104
  },
  {
    id: 19, name: "Sales Activity Writer", category: "Automation", difficulty: "Easy", setupTime: "5 min",
    useCase: "Generate professional Salesforce activity summaries and follow-up action items from meeting notes.",
    userInput: "Meeting notes, attendees, outcomes",
    setup: "Salesforce API access",
    setupSteps: ["Input meeting notes", "AI generates summary", "Add action items", "Sync to Salesforce", "Set reminders"],
    fullInstructions: "# Sales Activity Writer GEM\n\n## Purpose\nAutomate Salesforce activity logging with AI.\n\n## Output\n- Professional summaries\n- Action items\n- Next steps\n- Auto-sync to CRM\n- Follow-up tasks",
    icon: "✍️", color: "from-cyan-700 to-cyan-800", tags: ["Salesforce", "Activities", "Notes"], views: 1512, likes: 198
  },
  {
    id: 20, name: "Webex-Salesforce Sync", category: "Integrations", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Automatically sync Webex meetings to Salesforce as activities with notes and next steps.",
    userInput: "OAuth setup",
    setup: "Webex and Salesforce integration",
    setupSteps: ["Connect Webex account", "Authorize Salesforce", "Configure sync rules", "Test sync", "Enable auto-logging"],
    fullInstructions: "# Webex-Salesforce Sync GEM\n\n## Purpose\nSeamless meeting-to-CRM workflow.\n\n## Features\n- Auto-logging\n- Recording links\n- Attendee tracking\n- Action items\n- Follow-up tasks",
    icon: "🔗", color: "from-teal-700 to-teal-800", tags: ["Webex", "Salesforce", "Sync"], views: 876, likes: 115
  },
  {
    id: 21, name: "Opportunity Analysis", category: "Analytics", difficulty: "Moderate", setupTime: "10-15 min",
    useCase: "Deep analysis of Salesforce opportunities with win probability, competitive threats, and recommendations.",
    userInput: "Opportunity ID or stage",
    setup: "Salesforce data access, historical win/loss data",
    setupSteps: ["Select opportunity", "AI analyzes factors", "Review predictions", "Get recommendations", "Execute strategy"],
    fullInstructions: "# Opportunity Analysis GEM\n\n## Purpose\nAI-powered opportunity intelligence.\n\n## Analysis\n- Win probability\n- Competitive threats\n- Deal risks\n- Resource needs\n- Strategic recommendations",
    icon: "🎯", color: "from-pink-700 to-pink-800", tags: ["Opportunities", "Analysis", "Forecasting"], views: 1389, likes: 182
  },
  {
    id: 22, name: "Territory Planner", category: "Analytics", difficulty: "Moderate", setupTime: "20-30 min",
    useCase: "Strategic territory planning with account prioritization, coverage gaps, and growth opportunities.",
    userInput: "Territory data, account list",
    setup: "CRM data, market research, goal setting",
    setupSteps: ["Import territory data", "Analyze accounts", "Identify gaps", "Prioritize targets", "Build plan"],
    fullInstructions: "# Territory Planner GEM\n\n## Purpose\nData-driven territory optimization.\n\n## Outputs\n- Account prioritization\n- Coverage analysis\n- Growth opportunities\n- Resource allocation\n- Action plan",
    icon: "🗺️", color: "from-orange-700 to-orange-800", tags: ["Territory", "Planning", "Strategy"], views: 1045, likes: 138
  },
  {
    id: 23, name: "Competitive Intel Agent", category: "AI Agents", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Monitor competitors and generate battlecards with positioning, objection handlers, and win strategies.",
    userInput: "Competitor names, monitored topics",
    setup: "Research sources, monitoring schedule",
    setupSteps: ["Define competitors", "Set monitoring topics", "Configure alerts", "Generate battlecards", "Regular updates"],
    fullInstructions: "# Competitive Intel Agent\n\n## Purpose\nAutomated competitive intelligence.\n\n## Deliverables\n- Daily competitor updates\n- Battlecards\n- Positioning guides\n- Objection handlers\n- Win strategies",
    icon: "🔎", color: "from-red-600 to-red-700", tags: ["Competitive", "Intelligence", "Monitoring"], views: 1678, likes: 224
  },
  {
    id: 24, name: "Commission Calculator", category: "Analytics", difficulty: "Moderate", setupTime: "10-15 min",
    useCase: "Calculate complex commission scenarios with accelerators, splits, and SPIFFs from comp plan documents.",
    userInput: "Comp plan, deal details",
    setup: "Upload comp plan document",
    setupSteps: ["Upload comp plan", "Input deal details", "Calculate commission", "Show breakdown", "Export report"],
    fullInstructions: "# Commission Calculator GEM\n\n## Purpose\nAccurate commission calculations.\n\n## Features\n- Multiple comp plans\n- Accelerators\n- Team splits\n- SPIFFs\n- Year-to-date tracking",
    icon: "💵", color: "from-green-600 to-green-700", tags: ["Commission", "Compensation", "Calculator"], views: 2234, likes: 298
  },
  {
    id: 25, name: "Pipeline Health Monitor", category: "Analytics", difficulty: "Easy", setupTime: "10 min",
    useCase: "Real-time pipeline analytics with velocity tracking, stage conversion, and early warning signals.",
    userInput: "Salesforce connection",
    setup: "Salesforce API, dashboard setup",
    setupSteps: ["Connect Salesforce", "Configure metrics", "Set thresholds", "Enable alerts", "Review dashboard"],
    fullInstructions: "# Pipeline Health Monitor\n\n## Purpose\nProactive pipeline management.\n\n## Metrics\n- Pipeline velocity\n- Stage conversion\n- Deal aging\n- Risk indicators\n- Forecast accuracy",
    icon: "📊", color: "from-blue-600 to-blue-700", tags: ["Pipeline", "Analytics", "Health"], views: 1567, likes: 209
  },
  {
    id: 26, name: "QBR Presentation Builder", category: "Automation", difficulty: "Moderate", setupTime: "20-30 min",
    useCase: "Generate executive-ready Quarterly Business Review presentations with data visualization and insights.",
    userInput: "Quarter data, key metrics, goals",
    setup: "Data sources, presentation templates",
    setupSteps: ["Collect quarter data", "Generate insights", "Build presentation", "Add visuals", "Executive summary"],
    fullInstructions: "# QBR Presentation Builder\n\n## Purpose\nAutomate QBR presentation creation.\n\n## Slides\n- Executive summary\n- Performance metrics\n- Key wins\n- Challenges\n- Next quarter plan",
    icon: "📈", color: "from-purple-600 to-purple-700", tags: ["QBR", "Presentations", "Executive"], views: 1123, likes: 147
  },
  {
    id: 27, name: "Account Research Agent", category: "AI Agents", difficulty: "Moderate", setupTime: "10-15 min",
    useCase: "Comprehensive account intelligence gathering from news, financials, tech stack, and social signals.",
    userInput: "Company name or domain",
    setup: "Research API access",
    setupSteps: ["Enter company", "Execute research", "Review findings", "Export report", "Schedule updates"],
    fullInstructions: "# Account Research Agent\n\n## Purpose\nDeep account intelligence automation.\n\n## Research Areas\n- Company news\n- Financial data\n- Tech stack\n- Leadership changes\n- Social signals",
    icon: "🔬", color: "from-indigo-600 to-indigo-700", tags: ["Research", "Accounts", "Intelligence"], views: 1945, likes: 261
  },
  {
    id: 28, name: "Sales Playbook Generator", category: "Automation", difficulty: "Advanced", setupTime: "30-45 min",
    useCase: "Create customized sales playbooks with messaging, objection handling, and best practices by segment.",
    userInput: "Target segment, product line",
    setup: "Best practices database, templates",
    setupSteps: ["Define segment", "Gather best practices", "Build playbook structure", "Add content", "Distribute to team"],
    fullInstructions: "# Sales Playbook Generator\n\n## Purpose\nCustomized playbooks for each segment.\n\n## Sections\n- Target profile\n- Value propositions\n- Messaging framework\n- Objection handling\n- Case studies",
    icon: "📘", color: "from-cyan-600 to-cyan-700", tags: ["Playbooks", "Enablement", "Messaging"], views: 1234, likes: 164
  },
  {
    id: 29, name: "Win/Loss Analysis", category: "Analytics", difficulty: "Moderate", setupTime: "15-20 min",
    useCase: "Analyze closed opportunities to identify patterns, competitive advantages, and improvement opportunities.",
    userInput: "Closed opportunities data",
    setup: "Historical opportunity data",
    setupSteps: ["Import closed deals", "Analyze patterns", "Identify factors", "Generate insights", "Action plan"],
    fullInstructions: "# Win/Loss Analysis GEM\n\n## Purpose\nLearn from every closed opportunity.\n\n## Analysis\n- Win factors\n- Loss reasons\n- Competitive intel\n- Process improvements\n- Training needs",
    icon: "⚖️", color: "from-teal-600 to-teal-700", tags: ["Win-Loss", "Analysis", "Insights"], views: 1456, likes: 192
  },
  {
    id: 30, name: "Renewal Risk Predictor", category: "AI Agents", difficulty: "Advanced", setupTime: "20-25 min",
    useCase: "ML-powered churn prediction with early warning signals and retention playbook recommendations.",
    userInput: "Customer account data",
    setup: "Historical churn data, ML model training",
    setupSteps: ["Train ML model", "Analyze accounts", "Predict risk", "Generate alerts", "Execute retention plays"],
    fullInstructions: "# Renewal Risk Predictor\n\n## Purpose\nPredict and prevent customer churn.\n\n## Features\n- Risk scoring\n- Early warnings\n- Churn factors\n- Retention playbooks\n- Success tracking",
    icon: "⚠️", color: "from-yellow-600 to-yellow-700", tags: ["Retention", "ML", "Risk"], views: 1678, likes: 223
  },
  {
    id: 31, name: "Executive Job Search Agent", category: "Integrations", difficulty: "Easy", setupTime: "5-10 min",
    useCase: "Autonomous GPT-4 agent that searches and scores Director+ level AI/automation job opportunities daily.",
    userInput: "Job preferences, target companies",
    setup: "Set job criteria, enable daily search",
    setupSteps: ["Define job criteria", "Set target companies", "Enable daily alerts", "Review matches", "Apply directly"],
    fullInstructions: "# Executive Job Search Agent\n\n## Purpose\nAutomated executive job search.\n\n## Features\n- Daily job searches\n- Intelligent scoring\n- Company research\n- Application tracking\n- Interview prep",
    icon: "🎯", color: "from-pink-600 to-pink-700", tags: ["Job Search", "Career", "Automation"], views: 2567, likes: 342
  }
];
