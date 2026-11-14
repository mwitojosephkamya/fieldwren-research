import { images } from "@/config/images";

export type Mode = "remote" | "onsite";

export type ServiceItem = { name: string; mode: Mode };

export type Division = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  image: { id: number; alt: string };
  whoFor: string[];
  deliverables: string[];
  turnaround: string;
  items: ServiceItem[];
  note?: string;
};

const remote = (name: string): ServiceItem => ({ name, mode: "remote" });
const onsite = (name: string): ServiceItem => ({ name, mode: "onsite" });

export const modeLabels: Record<Mode, { label: string; detail: string }> = {
  remote: { label: "Remote", detail: "Delivered online, from anywhere" },
  onsite: { label: "On site", detail: "Needs a visit to your study site" },
};

export const divisions: Division[] = [
  {
    slug: "research-support",
    name: "Research and academic support",
    short: "Coaching and technical help from first idea to final defence.",
    summary:
      "Guidance for students, researchers and institutions at any stage of a study. We coach, explain and check. You stay the author of your own work.",
    image: images.research,
    whoFor: [
      "Undergraduate and postgraduate students",
      "Independent researchers",
      "Universities and research groups",
    ],
    deliverables: [
      "Written feedback and worked examples",
      "Tools and templates built for your study",
      "Cleaned datasets and analysis output",
      "Edited and formatted documents",
    ],
    turnaround: "Most tasks take 2 to 7 days. Urgent work can be arranged.",
    items: [
      remote("Research topic refinement"),
      remote("Proposal development coaching"),
      remote("Research methodology guidance"),
      remote("Literature review guidance"),
      remote("Questionnaire and data collection tool design"),
      remote("KoboToolbox and ODK form development"),
      remote("Data collection planning"),
      remote("Ethics application preparation"),
      remote("Research report editing"),
      remote("Academic formatting"),
      remote("Referencing and citation support"),
      remote("Dissertation and thesis coaching"),
      remote("Research publication preparation"),
      remote("Presentation and defence preparation"),
    ],
    note:
      "Academic integrity comes first. We do not write your thesis, invent findings or help anyone pass off work as their own.",
  },
  {
    slug: "data-collection",
    name: "Survey and field data collection",
    short: "Trained teams, tested tools and clean data from the field.",
    summary:
      "We plan and run digital surveys, from recruiting and training enumerators to supervising fieldwork and checking data quality.",
    image: images.collection,
    whoFor: [
      "Universities and research institutions",
      "NGOs and programmes running household or facility surveys",
      "Independent researchers who need a field team",
    ],
    deliverables: [
      "Programmed and tested digital forms",
      "Trained field team",
      "Daily data quality checks",
      "Clean, documented dataset",
    ],
    turnaround: "Agreed in the quote, based on sample size and locations",
    items: [
      remote("Questionnaire development"),
      onsite("Enumerator recruitment and coordination"),
      onsite("Field team training"),
      onsite("KoboToolbox data collection"),
      onsite("ODK data collection"),
      onsite("Digital survey implementation"),
      onsite("Field supervision"),
      remote("Data quality assurance"),
      remote("Data validation"),
      remote("Field data management"),
      onsite("Research logistics and coordination"),
    ],
  },
  {
    slug: "data-analytics",
    name: "Data analysis and statistics",
    short: "Analysis in the tool that suits your project.",
    summary:
      "Statistical analysis, qualitative coding and clear reporting, using the software your project or institution already works with.",
    image: images.analysis,
    whoFor: [
      "Students and researchers",
      "Organisations with survey or programme data",
      "Teams that want results they can reuse",
    ],
    deliverables: [
      "Analysis output with a plain-language explanation",
      "Tables and charts ready for your report",
      "Reproducible scripts where the tool allows",
    ],
    turnaround: "Typically 3 to 10 days after we receive clean data",
    items: [
      remote("Data cleaning and transformation"),
      remote("Descriptive and inferential statistics"),
      remote("Regression analysis and statistical modelling"),
      remote("Qualitative data analysis"),
      remote("Statistical interpretation"),
      remote("Data visualisation"),
      remote("Results presentation"),
    ],
  },
  {
    slug: "monitoring-evaluation",
    name: "Monitoring, evaluation and learning",
    short: "Evidence that shows what a programme achieved, and why.",
    summary:
      "Frameworks, tools and reports that help programmes track progress, meet donor requirements and learn from results.",
    image: images.evaluation,
    whoFor: [
      "NGOs and community organisations",
      "Social enterprises and cooperatives",
      "Donor-funded and government programmes",
    ],
    deliverables: [
      "Monitoring and evaluation framework and indicator sheet",
      "Data collection tools",
      "Baseline, midterm or endline report",
      "Summary briefs for decision makers",
    ],
    turnaround: "Agreed in the quote, usually 2 to 8 weeks",
    items: [
      remote("Monitoring and evaluation framework development"),
      remote("Logical frameworks"),
      remote("Theory of change development"),
      remote("Indicator development"),
      onsite("Baseline surveys"),
      onsite("Midterm evaluations"),
      onsite("Endline evaluations"),
      remote("Routine monitoring tools"),
      remote("Data quality assessments"),
      remote("Programme performance assessments"),
      remote("Monitoring and evaluation reports"),
      remote("Impact assessment support"),
    ],
  },
];

export const tools = [
  { name: "Microsoft Excel", fits: "Data cleaning, descriptive summaries, simple charts and templates for routine monitoring." },
  { name: "SPSS", fits: "Survey analysis, cross-tabulations and regression in the format many universities expect." },
  { name: "R and RStudio", fits: "Reproducible analysis, statistical modelling and clear graphics." },
  { name: "NVivo", fits: "Coding and organising interviews and focus group discussions." },
  { name: "KoboToolbox and ODK", fits: "Building and deploying mobile data collection forms, including offline fieldwork." },
];

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}
