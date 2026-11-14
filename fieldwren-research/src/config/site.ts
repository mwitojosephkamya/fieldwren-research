/**
 * Everything you are likely to edit lives in this file:
 * contact details, payment details, founder profile and prices.
 */

export const site = {
  name: "Fieldwren Research",
  shortName: "Fieldwren",
  tagline: "Research. Insights. Impact.",
  description:
    "Research support, survey and field data collection, data analysis and statistics, evaluation and research training for students, researchers, universities and organisations. Based in Uganda, working with clients worldwide.",
  // Replace with your real web address once you have one.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fieldwren.vercel.app",
  location: "Uganda",
};

export const contact = {
  // International format, digits only, no + sign. Used for the WhatsApp links.
  whatsappDigits: "256762664892",
  whatsappDisplay: "+256 762 664 892",
  phoneDisplay: "0762 664 892",
  phoneLink: "+256762664892",
  email: "josephkamyamwito@gmail.com",
};

export const payment = {
  depositPercent: 50,
  mobileMoney: {
    network: "MTN Mobile Money",
    number: "0762 664 892",
    accountName: "Mwito Joseph Kamya",
  },
};

export const founder = {
  name: "Mwito Joseph Kamya",
  role: "Founder and lead researcher",
  photo: "/founder.jpg" as string | null,
  summary:
    "Researcher trained in epidemiology, biostatistics and qualitative methods. Joseph has led his own quantitative study from design to analysis and defence, supported community data collection, and teaches clinical medicine students. He is certified in Good Clinical Practice, including research ethics, informed consent and confidentiality.",
  groups: [
    {
      title: "Education",
      items: [
        "Bachelor of Environmental Health Science, Mountains of the Moon University, Uganda (2023 to 2026). Programme completed, including the research dissertation; awaiting graduation.",
        "Short course in Epidemiology, Biostatistics and Qualitative Research, Mountains of the Moon University with Ghent University (2025).",
      ],
    },
    {
      title: "Experience",
      items: [
        "Led an independent quantitative research study from objectives to a five-chapter report, including bivariate and multivariable logistic regression, an ethics-ready proposal and a defence presentation.",
        "Tutor to Diploma in Clinical Medicine students, CHEMQUIP School of Health Sciences (January 2026 to present): course notes, slide presentations and question banks.",
        "Intern, Fort Portal City Council, Central Division (May to September 2025): fieldwork, documentation and reporting of findings following established procedures.",
        "Health outreach volunteer, Njeru Municipality (2024): supported data collection during community outreach.",
      ],
    },
    {
      title: "Training and certification",
      items: [
        "Good Clinical Practice certificate, NIDA Clinical Trials Network (March 2026).",
        "Ministry of Health Workshop on Event-Based Surveillance (August 2026).",
        "3rd MMU Annual Research Dissemination Conference (June 2026).",
        "Ongoing training in Python, machine learning and artificial intelligence for data analysis.",
      ],
    },
    {
      title: "Leadership",
      items: [
        "President, Public Health Students' Association (PUHESA), Mountains of the Moon University (2025).",
        "Organised a Scrabble tournament: planning, scheduling and logistics.",
      ],
    },
  ],
  // Stated at the level reached, so the site does not claim more than the CV does.
  tools: [
    { name: "KoboToolbox and ODK", level: "Data collection" },
    { name: "Microsoft Excel", level: "Working use" },
    { name: "R and RStudio", level: "Trained, introductory" },
    { name: "NVivo", level: "Trained, introductory" },
    { name: "SPSS", level: "Basic" },
    { name: "Python", level: "Developing" },
  ],
  languages: "English and Luganda (fluent), Lutooro (basic)",
};

export type Price = { service: string; price: string; note?: string };

export const researchPrices: Price[] = [
  { service: "Proposal development coaching", price: "UGX 100,000 – 400,000" },
  { service: "Questionnaire design", price: "UGX 50,000 – 150,000" },
  { service: "Kobo / ODK form setup", price: "UGX 100,000 – 300,000" },
  { service: "Data cleaning", price: "UGX 80,000 – 250,000" },
  { service: "Data analysis and interpretation", price: "UGX 150,000 – 500,000" },
  { service: "Editing", price: "UGX 2,000 – 5,000", note: "per page" },
  { service: "Formatting and referencing", price: "UGX 50,000 – 150,000" },
  { service: "One-on-one coaching", price: "UGX 20,000 – 50,000", note: "per hour" },
];

export const workshopPrices: Price[] = [
  {
    service: "Open student workshop",
    price: "UGX 20,000 – 50,000",
    note: "per person, half day",
  },
  {
    service: "Institutional workshop",
    price: "UGX 1,500,000 – 4,000,000",
    note: "per day, depends on group size, venue and materials",
  },
];

export const packages = [
  {
    name: "Research Starter",
    for: "Students beginning a study",
    includes: ["Topic refinement", "Proposal coaching", "Questionnaire design"],
  },
  {
    name: "Data Analysis",
    for: "Researchers with collected data",
    includes: ["Data cleaning", "Analysis in Excel, SPSS or R", "Interpretation of results"],
  },
  {
    name: "Research Excellence",
    for: "Thesis and publication stage",
    includes: ["Analysis support", "Report editing and formatting", "Defence preparation"],
  },
  {
    name: "Institutional Training",
    for: "Universities and organisations",
    includes: ["Tailored curriculum", "Hands-on sessions", "Materials and follow-up"],
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsappDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
