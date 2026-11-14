import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { ButtonLink, CtaBand, PageIntro, Section, SectionHead } from "@/components/ui";
import { images } from "@/config/images";
import { whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Training",
  description: "Hands-on research workshops for students, universities and organisations.",
};

const topics = [
  "Writing a research proposal",
  "Designing questionnaires and data collection tools",
  "KoboToolbox and ODK for field data collection",
  "Sampling and sample size",
  "Data cleaning and management in Excel",
  "Introduction to statistics with SPSS or R",
  "Qualitative data analysis with NVivo",
  "Presenting and defending your research",
  "Research ethics and informed consent",
  "Monitoring and evaluation basics",
];

const formats = [
  { t: "Open student workshops", d: "Half-day sessions open to individual students. Small groups so everyone gets help.", c: "Individual students" },
  { t: "Institutional workshops", d: "A tailored programme for your university, department or organisation, run at your venue or online.", c: "Universities and organisations" },
  { t: "One-on-one coaching", d: "Private sessions focused on your own proposal, data or report.", c: "Students and researchers" },
];

export default function TrainingPage() {
  return (
    <>
      <PageIntro eyebrow="Training" title="Learn research skills by doing them">
        Practical sessions built around real examples. Bring your own laptop and your own project if you have one.
      </PageIntro>
      <Section>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <SectionHead title="Workshop topics">Mix and match topics to suit your group.</SectionHead>
            <ul className="grid gap-3">
              {topics.map((t) => (
                <li key={t} className="card flex items-center gap-3 px-4 py-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-orange" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Photo image={images.training} width={1000} className="h-80 w-full rounded-xl md:sticky md:top-24 md:h-[28rem]" />
        </div>
      </Section>
      <Section tone="mist">
        <SectionHead eyebrow="Formats" title="Ways to learn with us" />
        <div className="grid gap-6 md:grid-cols-3">
          {formats.map((f) => (
            <div key={f.t} className="card p-6">
              <h3 className="text-xl">{f.t}</h3>
              <p className="mt-2 text-slate">{f.d}</p>
              <p className="mt-4 text-sm font-semibold text-blue">{f.c}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={whatsappLink("Hello Fieldwren Research, I would like to ask about training.")} variant="accent" external>
            Ask about training
          </ButtonLink>
          <ButtonLink href="/pricing" variant="outline">
            See workshop prices
          </ButtonLink>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
