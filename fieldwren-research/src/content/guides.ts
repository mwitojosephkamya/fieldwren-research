export type Guide = {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  body: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "choosing-a-sample-size",
    title: "How many participants do you need? A plain guide to sample size",
    summary:
      "What sample size means, the numbers behind it, and the mistakes that make a study too small to answer its question.",
    readTime: "5 min read",
    body: [
      {
        paragraphs: [
          "Sample size is the number of people (or households, or records) you include in your study. Too few and your results are too uncertain to trust. Far more than you need wastes time and money.",
        ],
      },
      {
        heading: "The four numbers that decide it",
        bullets: [
          "Confidence level: how sure you want to be. 95% is the usual choice.",
          "Margin of error: how close to the true value you need to be, such as plus or minus 5 percentage points.",
          "Expected proportion: your best guess of the percentage you are measuring. If you have no idea, use 50%, which gives the largest, safest sample.",
          "Population size: only matters when your population is small. For large populations it hardly changes the answer.",
        ],
      },
      {
        heading: "The basic formula",
        paragraphs: [
          "For estimating a percentage, the sample size is n = z² × p × (1 − p) ÷ e², where z is 1.96 for 95% confidence, p is the expected proportion and e is the margin of error. With 95% confidence, a 5% margin and p = 50%, that gives about 385 people. Our free calculator on the home page does this for you and adjusts for small populations and non-response.",
        ],
      },
      {
        heading: "Mistakes to avoid",
        bullets: [
          "Forgetting non-response. If 10% of people will not take part, invite about 10% more than you need.",
          "Using this formula for every study. It suits surveys estimating a percentage. Comparing groups, testing a relationship or running a trial needs different calculations.",
          "Ignoring clustering. Sampling whole villages, schools or clinics usually needs a larger sample than simple random sampling.",
          "Choosing a sample size because it feels right, then adding the justification afterwards.",
        ],
      },
      {
        paragraphs: [
          "Your proposal should state how you calculated the sample size and why. If your design is more complex than a simple survey, ask someone to check the calculation before you collect data, not after.",
        ],
      },
    ],
  },
  {
    slug: "research-proposal-checklist",
    title: "A checklist for a strong research proposal",
    summary:
      "The parts every proposal needs, and the questions reviewers and supervisors ask about each one.",
    readTime: "4 min read",
    body: [
      {
        paragraphs: [
          "A proposal is a plan that someone else must be able to follow and judge. Reviewers are looking for a clear question, a method that can answer it and a realistic plan. Use this list to check your draft.",
        ],
      },
      {
        heading: "The core of the proposal",
        bullets: [
          "Problem statement: what is the problem, who is affected, and what is not yet known? Back it with recent evidence.",
          "Research question and objectives: one clear question, and objectives you can actually measure.",
          "Literature review: what is already known, what is missing, and how your study fills the gap.",
          "Methods: design, study area, population, sampling and sample size, tools, variables and data collection procedure.",
          "Analysis plan: how each objective will be analysed, and which statistical tests you will use and why.",
        ],
      },
      {
        heading: "The parts that are often weak",
        bullets: [
          "Ethical considerations: approval, informed consent, confidentiality and how participants are protected.",
          "Data management: who has access, how it is stored and when it is deleted.",
          "Limitations: honest, specific and with a plan to reduce them.",
          "Work plan and budget: realistic dates and costs.",
        ],
      },
      {
        heading: "A final read-through",
        paragraphs: [
          "Check that every objective has a matching method and a matching analysis. If an objective has no way of being measured or analysed, either the objective or the method needs to change.",
        ],
      },
    ],
  },
  {
    slug: "choosing-an-analysis-tool",
    title: "Choosing an analysis tool: Excel, SPSS or R",
    summary:
      "A plain-language comparison to help you decide which software fits your study, your skills and your supervisor.",
    readTime: "4 min read",
    body: [
      {
        paragraphs: [
          "There is no single best tool. The right choice depends on your data, what your institution expects and how much time you have to learn.",
        ],
      },
      {
        heading: "Start with what your supervisor or institution uses",
        paragraphs: [
          "If your department works in a particular package, using the same one makes it easier to get feedback and to compare your output with earlier work. Ask before you start.",
        ],
      },
      {
        heading: "When each tool is a good fit",
        bullets: [
          "Excel: small datasets, cleaning, quick summaries and charts. Fine for descriptive work, limited for complex models.",
          "SPSS: menu-driven, so it is quick to learn. Common in health and social science theses.",
          "R: free and powerful, with a steeper learning curve. Excellent when you want reproducible reports and high-quality graphics.",
        ],
      },
      {
        heading: "Two habits that matter more than the tool",
        bullets: [
          "Keep an untouched copy of your raw data and do all cleaning on a second copy.",
          "Write down every cleaning and recoding decision so you can explain it in your methods section.",
        ],
      },
    ],
  },
  {
    slug: "kobo-form-checklist",
    title: "Ten checks before you send a Kobo form to the field",
    summary:
      "A short checklist that prevents the most common digital data collection problems.",
    readTime: "4 min read",
    body: [
      {
        paragraphs: [
          "Fixing a form after data collection has started is slow and can leave you with inconsistent data. These checks take about an hour and save days.",
        ],
      },
      {
        bullets: [
          "Read every question aloud. If an enumerator stumbles, a respondent will too.",
          "Mark essential questions as required, and leave optional ones optional.",
          "Add constraints, such as sensible ranges for age, so typing errors are caught on the spot.",
          "Use skip logic so respondents only see questions that apply to them.",
          "Keep choice lists consistent, and include options such as other, do not know and refused where appropriate.",
          "Give every record a unique identifier and decide how enumerators will assign it.",
          "Test the translation with a native speaker, not only with the English version.",
          "Test the form on the actual phones the team will use, including with no network.",
          "Run a small pilot, then review the exported data before the main survey.",
          "Decide where the data will be stored, who can access it, and how personal information is protected.",
        ],
      },
      {
        paragraphs: [
          "When you change a form after deployment, record the date and the change. Different versions of a form can produce different column structures in your export.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
