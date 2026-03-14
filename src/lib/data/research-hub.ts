export type EvidenceLevel = "Early" | "Emerging" | "Moderate";

export type HeroStat = {
  label: string;
  value: string;
  detail: string;
};

export type SectionLink = {
  label: string;
  href: string;
  description: string;
};

export type KeyFact = {
  label: string;
  value: string;
};

export type ProtocolStep = {
  title: string;
  summary: string;
};

export type TimelineMilestone = {
  timing: string;
  label: string;
  summary: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ResearchVendor = {
  slug: string;
  name: string;
  region: string;
  focus: string;
  summary: string;
  priceTier: string;
  labTesting: string;
  shipping: string;
  highlights: string[];
  warning: string;
};

export type ResearchUseCase = {
  slug: string;
  title: string;
  summary: string;
  quickAnswer: string;
  evidenceLevel: EvidenceLevel;
  typicalProtocol: string;
  reviewWindow: string;
  peptideSlugs: string[];
  vendorSlugs: string[];
  focusAreas: string[];
  mechanism: string[];
  evidenceNotes: string[];
  dosingPointers: string[];
  watchouts: string[];
  milestones: TimelineMilestone[];
};

export type DoseGuide = {
  startingDose: string;
  commonRange: string;
  frequency: string;
  timing: string;
  route: string;
  cycleLength: string;
  protocolSteps: ProtocolStep[];
  notes: string[];
  sideEffects: string[];
  faq: FaqItem[];
};

export type ResearchPeptide = {
  slug: string;
  name: string;
  aliases: string[];
  category: string;
  evidenceLevel: EvidenceLevel;
  admin: string;
  typicalDose: string;
  cadence: string;
  cycleLength: string;
  summary: string;
  heroSummary: string;
  bestFor: string[];
  caution: string;
  keyFacts: KeyFact[];
  mechanism: string[];
  researchSummary: string[];
  notes: string[];
  vendorSlugs: string[];
  useCaseSlugs: string[];
  doseGuide: DoseGuide;
};

export const researchSectionLinks: SectionLink[] = [
  {
    label: "Overview",
    href: "/",
    description: "Landing page for the mock peptide research workspace.",
  },
  {
    label: "Peptides",
    href: "/peptides",
    description: "Profile templates with related dosing and use-case links.",
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    description: "Condition-oriented pages modeled after Peptibase.",
  },
  {
    label: "Vendors",
    href: "/vendors",
    description:
      "Fictional supplier cards for documentation and comparison flows.",
  },
];

export const researchHeroStats: HeroStat[] = [
  {
    label: "Peptides",
    value: "4",
    detail: "Profile pages with dosing and related use cases.",
  },
  {
    label: "Use Cases",
    value: "5",
    detail: "Condition-oriented templates and progress timelines.",
  },
  {
    label: "Vendors",
    value: "4",
    detail: "Fictional supplier cards for layout and filtering tests.",
  },
];

export const researchVendors: ResearchVendor[] = [
  {
    slug: "precision-peptide-co",
    name: "Precision Peptide Co.",
    region: "United States",
    focus: "Small-batch injectable and nasal peptide formats",
    summary:
      "Built for testing documentation-heavy layouts where every card emphasizes lot data, packaging controls, and archive samples.",
    priceTier: "$$$",
    labTesting: "Third-party UPLC/MS attached to each lot page.",
    shipping: "Priority cold-pack shipping with a two-day fulfillment target.",
    highlights: [
      "Lot-specific COA pages",
      "Tamper-evident vials",
      "Archive sample retention",
    ],
    warning:
      "Use this mock vendor block to evaluate documentation quality, not to endorse a supplier.",
  },
  {
    slug: "northstar-biologics",
    name: "Northstar Biologics",
    region: "Canada",
    focus: "Cosmetic peptides, copper peptides, and topical systems",
    summary:
      "Useful for testing topical and cosmetic content paths where the primary comparison axis is formulation stability.",
    priceTier: "$$",
    labTesting:
      "Identity confirmation, trace metal panel, and sterility statement.",
    shipping: "Ambient and chilled options with customs-ready paperwork.",
    highlights: [
      "Topical base compatibility notes",
      "Packaging shelf-life matrix",
      "Regional warehousing",
    ],
    warning:
      "Mock data only. Replace with verified suppliers before using in a real product.",
  },
  {
    slug: "sequence-labs-direct",
    name: "Sequence Labs Direct",
    region: "Europe",
    focus: "Nootropic peptides and intranasal delivery systems",
    summary:
      "Designed for cognitive-product layouts where cadence, device format, and storage handling all matter.",
    priceTier: "$$",
    labTesting: "Purity certificate and microbial screening on each release.",
    shipping: "Refrigerated shipping for heat-sensitive SKUs across EU and UK.",
    highlights: [
      "Metered nasal delivery",
      "Storage deviation alerts",
      "SKU-level traceability",
    ],
    warning: "This is fictional supplier content for UI testing.",
  },
  {
    slug: "summit-research-supply",
    name: "Summit Research Supply",
    region: "Asia-Pacific",
    focus:
      "Broader catalog for stacks, recovery blends, and educational bundles",
    summary:
      "This mock supplier helps test mixed catalogs where a user moves from a use case into a multi-product comparison flow.",
    priceTier: "$",
    labTesting: "Batch-level purity and residual solvent note.",
    shipping: "Economy and express options with regional stock rotation.",
    highlights: [
      "Bundle-friendly catalog",
      "Regional restock notes",
      "Educational inserts",
    ],
    warning:
      "Keep this fictional in the test workspace unless you later swap in audited vendor data.",
  },
];

export const researchUseCases: ResearchUseCase[] = [
  {
    slug: "soft-tissue-repair",
    title: "Soft Tissue Repair",
    summary:
      "A condition-style page for recovery, load management, and post-training discomfort that mirrors the Peptibase use-case pattern.",
    quickAnswer:
      "This mock template frames soft tissue repair around recovery pacing, inflammation management, and gradual return-to-load tracking.",
    evidenceLevel: "Early",
    typicalProtocol: "2-4 week checkpoint model",
    reviewWindow: "Daily notes, weekly review",
    peptideSlugs: ["bpc-157", "ghk-cu"],
    vendorSlugs: ["precision-peptide-co", "summit-research-supply"],
    focusAreas: [
      "Load tolerance",
      "Localized comfort",
      "Return-to-training pacing",
    ],
    mechanism: [
      "The page structure focuses on blood-flow support, collagen signaling, and cleaner symptom logging rather than hard efficacy claims.",
      "The intended UX shows how a research user might track pain, swelling, and range-of-motion changes alongside protocol changes.",
    ],
    evidenceNotes: [
      "Use cautious language and keep claims tied to early preclinical or anecdotal research summaries.",
      "This template works best when paired with a visible timeline and escalation note if symptoms worsen.",
    ],
    dosingPointers: [
      "Model a low starting dose and a narrow review loop before increasing frequency.",
      "Show location, training load, and sleep quality in the same protocol journal.",
    ],
    watchouts: [
      "Avoid positioning the template as a replacement for rehab or acute injury care.",
      "Keep tissue-specific pain, swelling, and functionality monitoring visible near the fold.",
    ],
    milestones: [
      {
        timing: "Days 1-3",
        label: "Baseline capture",
        summary:
          "Log discomfort, training load, and sleep before changing the protocol.",
      },
      {
        timing: "Week 1",
        label: "Consistency check",
        summary:
          "Review whether tolerance, timing, and recovery notes are stable.",
      },
      {
        timing: "Week 2+",
        label: "Return-to-load review",
        summary:
          "Decide whether to maintain, taper, or stop the protocol based on symptom drift.",
      },
    ],
  },
  {
    slug: "gut-barrier-support",
    title: "Gut Barrier Support",
    summary:
      "A mock GI-support page focused on comfort tracking, food-response notes, and slower protocol changes.",
    quickAnswer:
      "This use-case template is organized around digestion, comfort, and meal-linked response tracking instead of cure language.",
    evidenceLevel: "Early",
    typicalProtocol: "14-day symptom journal",
    reviewWindow: "Meal-by-meal logging",
    peptideSlugs: ["bpc-157"],
    vendorSlugs: ["precision-peptide-co"],
    focusAreas: ["GI comfort", "Meal response", "Consistency of routine"],
    mechanism: [
      "The layout highlights how users might document bloating, discomfort, and consistency of symptoms alongside hydration and meal timing.",
      "It intentionally keeps the copy descriptive and educational so the page remains safe as a test asset.",
    ],
    evidenceNotes: [
      "Lead with symptom journaling and escalation language for persistent abdominal pain or concerning symptoms.",
      "This template is useful for validating long-form dosing, FAQ, and disclaimer components.",
    ],
    dosingPointers: [
      "Introduce changes one at a time so the journal stays readable.",
      "Keep hydration and meal composition in the same note stream as protocol timing.",
    ],
    watchouts: [
      "Do not present this mock workflow as treatment for GI disease.",
      "Any persistent severe symptoms should route users away from the flow and toward care.",
    ],
    milestones: [
      {
        timing: "Days 1-2",
        label: "Meal baseline",
        summary: "Establish current comfort levels before making changes.",
      },
      {
        timing: "Days 3-7",
        label: "Pattern detection",
        summary:
          "Look for recurring triggers tied to food, timing, or sleep debt.",
      },
      {
        timing: "Week 2",
        label: "Protocol audit",
        summary:
          "Decide whether the mock plan is clear enough to continue or needs simplification.",
      },
    ],
  },
  {
    slug: "focus-and-attention",
    title: "Focus And Attention",
    summary:
      "A cognition-oriented template with nasal administration, work-session timing, and task-specific note taking.",
    quickAnswer:
      "This page is designed to test a nootropic use-case flow where onset timing, session context, and sleep quality all shape the recommendation UI.",
    evidenceLevel: "Emerging",
    typicalProtocol: "Workday cadence with rest days",
    reviewWindow: "Per session and weekly",
    peptideSlugs: ["semax"],
    vendorSlugs: ["sequence-labs-direct"],
    focusAreas: [
      "Task initiation",
      "Attention stability",
      "Stress load management",
    ],
    mechanism: [
      "The mock content centers on alertness and resilience framing, while avoiding hard promises about productivity outcomes.",
      "This gives you a reusable pattern for use cases that care about onset, session timing, and off-days.",
    ],
    evidenceNotes: [
      "Pair any positive framing with reminders that sleep and total workload still dominate cognitive performance.",
      "Highlight session-by-session scoring so the template feels operational instead of promotional.",
    ],
    dosingPointers: [
      "Model use near a defined work block rather than at random times.",
      "Use off-days to keep the content visually distinct from daily wellness stacks.",
    ],
    watchouts: [
      "Avoid scheduling late in the day if sleep is already unstable.",
      "Make irritability, headaches, and jitteriness easy to log.",
    ],
    milestones: [
      {
        timing: "First session",
        label: "Onset check",
        summary:
          "Track clarity, pace, and any nasal irritation inside a single session note.",
      },
      {
        timing: "Week 1",
        label: "Cadence review",
        summary: "Compare focus gains against sleep drift and stress load.",
      },
      {
        timing: "Week 2",
        label: "Utility decision",
        summary:
          "Keep, taper, or drop the mock protocol based on signal quality.",
      },
    ],
  },
  {
    slug: "collagen-support",
    title: "Collagen Support",
    summary:
      "A skin-health template built for topical and cosmetic peptide content with before-and-after checkpoint blocks.",
    quickAnswer:
      "This use-case page frames collagen support as a slow-burn protocol where skin texture, recovery, and photo check-ins matter more than daily sensation.",
    evidenceLevel: "Emerging",
    typicalProtocol: "4-8 week cosmetic review",
    reviewWindow: "Weekly photo and texture notes",
    peptideSlugs: ["ghk-cu"],
    vendorSlugs: ["northstar-biologics"],
    focusAreas: [
      "Texture consistency",
      "Recovery appearance",
      "Topical routine adherence",
    ],
    mechanism: [
      "The structure focuses on connective-tissue signaling, routine adherence, and how to present slower feedback loops elegantly.",
      "It is a good fit for testing long-form panels that include notes, watchouts, and milestone cards.",
    ],
    evidenceNotes: [
      "Use cosmetic positioning and keep the copy away from disease treatment language.",
      "Show the need for consistent lighting, photos, and routine notes for credible comparisons.",
    ],
    dosingPointers: [
      "Keep the application order explicit so the page can support routine builders later.",
      "Use weekly checkpoints instead of daily optimism because visual change is slower.",
    ],
    watchouts: [
      "Patch-test language and irritation tracking should remain prominent.",
      "The page should not imply wound-care replacement or guaranteed aesthetic outcomes.",
    ],
    milestones: [
      {
        timing: "Week 1",
        label: "Routine lock-in",
        summary:
          "Confirm the application order and tolerance before comparing results.",
      },
      {
        timing: "Weeks 2-4",
        label: "Texture review",
        summary:
          "Capture lighting-controlled photos and note irritation or dryness.",
      },
      {
        timing: "Weeks 6-8",
        label: "Visible trend",
        summary:
          "Compare skin tone and recovery against the original baseline.",
      },
    ],
  },
  {
    slug: "libido-support",
    title: "Libido Support",
    summary:
      "An event-driven use-case page where timing, anticipation, and side-effect handling matter more than daily protocol loops.",
    quickAnswer:
      "This layout models libido support as an event-based protocol with clear onset timing, hydration reminders, and explicit watchouts.",
    evidenceLevel: "Emerging",
    typicalProtocol: "As-needed event window",
    reviewWindow: "Session-by-session",
    peptideSlugs: ["pt-141"],
    vendorSlugs: ["precision-peptide-co", "sequence-labs-direct"],
    focusAreas: ["Onset timing", "Desire support", "Event planning"],
    mechanism: [
      "The page emphasizes event timing, dose spacing, and expected side-effect monitoring without overselling outcomes.",
      "It is useful for UI states that need a short protocol with a high-visibility caution block.",
    ],
    evidenceNotes: [
      "Make hydration, nausea tracking, and spacing rules part of the primary layout.",
      "Keep the copy explicit that this is a mock template for interaction design.",
    ],
    dosingPointers: [
      "Model early testing in a low-pressure environment so timing can be understood first.",
      "Keep dose spacing and max-frequency warnings visible near the primary CTA.",
    ],
    watchouts: [
      "Prominent nausea, flushing, and blood-pressure-related watchouts are mandatory in this template.",
      "Do not present it as suitable for everyone or for uncontrolled self-treatment.",
    ],
    milestones: [
      {
        timing: "First use",
        label: "Onset mapping",
        summary:
          "Test timing and tolerance before relying on the event window.",
      },
      {
        timing: "Second session",
        label: "Spacing decision",
        summary:
          "Adjust timing only if the first mock session produced clean notes.",
      },
      {
        timing: "Ongoing",
        label: "Frequency control",
        summary:
          "Keep event-based usage infrequent and track side effects honestly.",
      },
    ],
  },
];

export const researchPeptides: ResearchPeptide[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    aliases: ["Body Protection Compound 157"],
    category: "Recovery and GI research",
    evidenceLevel: "Early",
    admin: "SubQ or capsule template",
    typicalDose: "250-500 mcg",
    cadence: "1-2 times daily",
    cycleLength: "2-4 weeks",
    summary:
      "A high-interest profile page for recovery, gut comfort, and structured symptom journaling.",
    heroSummary:
      "Use this mock page to test how peptide profiles, vendors, dosing, and related use cases fit into a single research-oriented layout.",
    bestFor: [
      "Soft tissue repair",
      "Gut barrier support",
      "Recovery workflows",
    ],
    caution:
      "Mock content only. The protocol numbers here exist to test layout density and should not be treated as medical guidance.",
    keyFacts: [
      { label: "Route", value: "SubQ or oral" },
      { label: "Typical range", value: "250-500 mcg" },
      { label: "Cadence", value: "Daily or split dose" },
      { label: "Review window", value: "7-14 days" },
    ],
    mechanism: [
      "The structure highlights healing and GI-comfort narratives while avoiding definitive efficacy claims.",
      "It works well for testing pages where a user needs quick facts, route details, and related use cases in one scan.",
    ],
    researchSummary: [
      "Most of the useful UI work here is around journaling: location of discomfort, response to load, and changes in sleep or digestion.",
      "The page is intentionally written in research language so it can be reused for early-signal compounds without overcommitting.",
    ],
    notes: [
      "Pair this template with symptom heatmaps or injury-location tags if you later expand the workspace.",
      "This peptide profile is the clearest example of how the vendor and use-case cards cross-link.",
    ],
    vendorSlugs: ["precision-peptide-co", "summit-research-supply"],
    useCaseSlugs: ["soft-tissue-repair", "gut-barrier-support"],
    doseGuide: {
      startingDose: "250 mcg",
      commonRange: "250-500 mcg",
      frequency: "Once or twice daily",
      timing: "Often modeled away from training blocks for cleaner notes",
      route:
        "SubQ is the most common mock layout; oral works for GI-specific variants",
      cycleLength: "2-4 weeks before reassessment",
      protocolSteps: [
        {
          title: "Start at the floor",
          summary:
            "Begin with the smallest mock dose so your baseline and tolerance notes stay clean.",
        },
        {
          title: "Track one change at a time",
          summary:
            "Avoid changing sleep, training load, and protocol timing all at once.",
        },
        {
          title: "Review at day seven",
          summary:
            "Use a fixed checkpoint to decide whether the plan needs to be simplified.",
        },
      ],
      notes: [
        "Morning and evening spacing works best when you want separate response notes.",
        "If the page leans GI-focused, keep meals and hydration in the protocol log.",
        "Visualize pain level and tissue load together so the user can read the trend quickly.",
      ],
      sideEffects: [
        "Injection-site irritation",
        "Headache",
        "Digestive changes",
        "Protocol creep from chasing faster results",
      ],
      faq: [
        {
          question: "Why show both oral and SubQ routes?",
          answer:
            "Because the test workspace needs route comparisons, alternative UI states, and different journaling prompts.",
        },
        {
          question: "Why is the dosing language so cautious?",
          answer:
            "The goal is a realistic structure for layout testing without turning the page into clinical advice.",
        },
      ],
    },
  },
  {
    slug: "semax",
    name: "Semax",
    aliases: ["ACTH(4-10) analogue"],
    category: "Cognitive and nootropic research",
    evidenceLevel: "Emerging",
    admin: "Intranasal template",
    typicalDose: "300-600 mcg",
    cadence: "1-2 work blocks daily",
    cycleLength: "5 days on, 2 off",
    summary:
      "A cognition profile with onset timing, work-session context, and rest-day handling built into the page design.",
    heroSummary:
      "This profile is optimized for focus use cases where delivery format and timing are core parts of the UX.",
    bestFor: [
      "Focus and attention",
      "Task initiation",
      "Stress-resilient work blocks",
    ],
    caution:
      "Use this as a mock information architecture for a cognitive peptide, not as a source of treatment recommendations.",
    keyFacts: [
      { label: "Route", value: "Nasal" },
      { label: "Typical range", value: "300-600 mcg" },
      { label: "Cadence", value: "Before work sessions" },
      { label: "Review window", value: "Per session" },
    ],
    mechanism: [
      "The test content is built around focus, alertness, and how quickly a user perceives the session start.",
      "That makes this page a good template for work-session scoring, onset timing, and rest-day UI states.",
    ],
    researchSummary: [
      "The most important content block is not the dose itself but the observation model: task type, sleep debt, stress load, and any rebound effects.",
      "This keeps the experience analytical instead of hype-driven and mirrors how Peptibase use-case pages feel operational.",
    ],
    notes: [
      "If you later add calculators, Semax is the clearest candidate for a per-session planner.",
      "Keep nasal storage and device handling close to the fold on mobile.",
    ],
    vendorSlugs: ["sequence-labs-direct"],
    useCaseSlugs: ["focus-and-attention"],
    doseGuide: {
      startingDose: "300 mcg",
      commonRange: "300-600 mcg",
      frequency: "One to two planned work sessions",
      timing: "Often placed 15-30 minutes before a defined deep-work block",
      route: "Intranasal with a metered device for consistency in mock flows",
      cycleLength: "5 on / 2 off cadence",
      protocolSteps: [
        {
          title: "Choose a specific session",
          summary:
            "Tie the mock protocol to one repeatable work block instead of using it randomly.",
        },
        {
          title: "Keep sleep visible",
          summary:
            "Show sleep duration and stress load next to any perceived focus gain.",
        },
        {
          title: "Schedule rest days",
          summary:
            "Off-days make the cadence easier to understand and easier to validate visually.",
        },
      ],
      notes: [
        "Morning or early afternoon windows keep sleep disruption easier to avoid.",
        "Attach a work-session score so the user can compare protocol changes against useful output.",
        "Reserve enough space on mobile for timing and device instructions.",
      ],
      sideEffects: [
        "Nasal irritation",
        "Headache",
        "Restlessness",
        "Later-day sleep drift",
      ],
      faq: [
        {
          question: "Why not present this as a daily wellness supplement?",
          answer:
            "Because the strongest layout pattern here is session-based use with planned rest days, not a generic daily stack.",
        },
        {
          question: "What should the page emphasize most?",
          answer:
            "Onset timing, work context, and sleep response. Those are the highest-signal elements in this template.",
        },
      ],
    },
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    aliases: ["Copper peptide"],
    category: "Skin and cosmetic research",
    evidenceLevel: "Emerging",
    admin: "Topical or SubQ template",
    typicalDose: "1-2 mg equivalent",
    cadence: "Daily routine",
    cycleLength: "4-8 weeks",
    summary:
      "A collagen-oriented profile designed for before-and-after content blocks, photo reviews, and topical routine ordering.",
    heroSummary:
      "This profile is built for slower-burn cosmetic results, making it useful for milestone cards and documentation-heavy routines.",
    bestFor: ["Collagen support", "Skin recovery", "Routine consistency"],
    caution:
      "This page is a design asset for cosmetic peptide flows and should stay framed as mock educational content.",
    keyFacts: [
      { label: "Route", value: "Topical or SubQ" },
      { label: "Typical range", value: "1-2 mg eq." },
      { label: "Cadence", value: "Daily" },
      { label: "Review window", value: "Weekly photos" },
    ],
    mechanism: [
      "The profile highlights slower connective-tissue and texture changes, which justifies richer milestone UI.",
      "It is useful for validating sections that need to compare topical compatibility, irritation, and routine adherence.",
    ],
    researchSummary: [
      "This page should feel deliberate and visual: weekly photos, texture notes, and consistent lighting are more important than daily sensation.",
      "That makes it a good counterpart to faster-onset pages like Semax or PT-141.",
    ],
    notes: [
      "If you later build image-based checkpoints, this profile should be your first integration target.",
      "Topical routine ordering is the key product question for this page family.",
    ],
    vendorSlugs: ["northstar-biologics", "summit-research-supply"],
    useCaseSlugs: ["collagen-support", "soft-tissue-repair"],
    doseGuide: {
      startingDose: "Low-end daily application",
      commonRange: "1-2 mg equivalent",
      frequency: "Once daily",
      timing: "Placed inside a fixed morning or evening routine",
      route:
        "Topical first for cosmetic flows; SubQ is a secondary mock route for cross-page testing",
      cycleLength: "4-8 weeks with weekly documentation",
      protocolSteps: [
        {
          title: "Lock the routine order",
          summary:
            "Keep cleanser, serum, and moisturizer order fixed before comparing results.",
        },
        {
          title: "Use weekly checkpoints",
          summary:
            "Slow-burn cosmetic changes read better with the same camera angle and lighting.",
        },
        {
          title: "Watch for irritation",
          summary:
            "Patch-test cues should stay near the primary protocol notes.",
        },
      ],
      notes: [
        "Topical compatibility notes are core UX for this page type.",
        "Photo reminders and consistent lighting help the user compare trends instead of guessing.",
        "This is the best template for before-and-after card components.",
      ],
      sideEffects: [
        "Skin irritation",
        "Dryness",
        "Redness",
        "Overly dense routines that hide signal quality",
      ],
      faq: [
        {
          question: "Why use weekly photos instead of daily feedback?",
          answer:
            "Because the visible changes are slower, and daily impressions create more noise than signal in the test content.",
        },
        {
          question: "Should this page prefer topical or injectable copy?",
          answer:
            "Topical should be primary if the goal is a cosmetic or skincare-oriented experience.",
        },
      ],
    },
  },
  {
    slug: "pt-141",
    name: "PT-141",
    aliases: ["Bremelanotide"],
    category: "Event-based libido research",
    evidenceLevel: "Emerging",
    admin: "SubQ or nasal template",
    typicalDose: "1-2 mg",
    cadence: "As needed",
    cycleLength: "Event window",
    summary:
      "An event-driven page for onset timing, side-effect visibility, and spacing rules.",
    heroSummary:
      "This profile is useful when you need a shorter protocol page with prominent watchouts and an as-needed cadence.",
    bestFor: ["Libido support", "Event planning", "Onset mapping"],
    caution:
      "Because this template is event-based and side effects matter, the mock design keeps its caution blocks unusually prominent.",
    keyFacts: [
      { label: "Route", value: "SubQ or nasal" },
      { label: "Typical range", value: "1-2 mg" },
      { label: "Cadence", value: "As needed" },
      { label: "Review window", value: "Per event" },
    ],
    mechanism: [
      "The profile emphasizes timing, anticipatory planning, and explicit note-taking around side effects.",
      "This gives you a clean example of a page where the caution block must compete successfully with the primary CTA.",
    ],
    researchSummary: [
      "The strongest UX choice is to treat this as an event workflow rather than a daily stack.",
      "That means timing guidance, spacing rules, and hydration reminders deserve prime layout real estate.",
    ],
    notes: [
      "PT-141 is the best candidate for testing watchouts-before-action UI patterns.",
      "If you add structured checklists later, use this page to validate pre-event reminders.",
    ],
    vendorSlugs: ["precision-peptide-co", "sequence-labs-direct"],
    useCaseSlugs: ["libido-support"],
    doseGuide: {
      startingDose: "1 mg",
      commonRange: "1-2 mg",
      frequency: "Single event use",
      timing: "Often modeled several hours ahead of the target event",
      route:
        "SubQ is the default mock route; nasal exists to support alternate layout states",
      cycleLength: "Event-based with generous spacing",
      protocolSteps: [
        {
          title: "Map onset first",
          summary:
            "Run the first mock session without pressure so timing and tolerability are understood.",
        },
        {
          title: "Keep hydration and food notes",
          summary:
            "Those notes make nausea and flushing easier to interpret later.",
        },
        {
          title: "Respect spacing rules",
          summary:
            "Use obvious UI cues to keep frequency conservative and event-driven.",
        },
      ],
      notes: [
        "Event-based timing belongs at the top of the page because it is the primary decision variable.",
        "The mock workflow should show max-frequency warnings in the same visual block as the dose.",
        "This template benefits from pre-event checklists and hydration reminders.",
      ],
      sideEffects: [
        "Nausea",
        "Flushing",
        "Headache",
        "Blood-pressure related discomfort",
      ],
      faq: [
        {
          question: "What makes this page different from the others?",
          answer:
            "It is event-based, not daily, so the layout emphasizes timing and watchouts over habit formation.",
        },
        {
          question: "Why keep the caution box so visible?",
          answer:
            "Because the side-effect burden is a central part of this test template and should never be visually secondary.",
        },
      ],
    },
  },
];

export function getPeptideBySlug(slug: string) {
  return researchPeptides.find((peptide) => peptide.slug === slug);
}

export function getUseCaseBySlug(slug: string) {
  return researchUseCases.find((useCase) => useCase.slug === slug);
}

export function getVendorBySlug(slug: string) {
  return researchVendors.find((vendor) => vendor.slug === slug);
}

export function getUseCasesForPeptide(slug: string) {
  return researchUseCases.filter((useCase) =>
    useCase.peptideSlugs.includes(slug),
  );
}

export function getVendorsBySlugs(slugs: string[]) {
  const uniqueSlugs = [...new Set(slugs)];
  return uniqueSlugs
    .map((slug) => getVendorBySlug(slug))
    .filter((vendor): vendor is ResearchVendor => Boolean(vendor));
}

export function getVendorsForPeptide(slug: string) {
  const peptide = getPeptideBySlug(slug);
  return peptide ? getVendorsBySlugs(peptide.vendorSlugs) : [];
}

export function getPeptidesForUseCase(slug: string) {
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) {
    return [];
  }

  return useCase.peptideSlugs
    .map((peptideSlug) => getPeptideBySlug(peptideSlug))
    .filter((peptide): peptide is ResearchPeptide => Boolean(peptide));
}

export function getVendorsForUseCase(slug: string) {
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) {
    return [];
  }

  return getVendorsBySlugs(useCase.vendorSlugs);
}

export function getPeptideNames(slugs: string[]) {
  return slugs
    .map((slug) => getPeptideBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}
