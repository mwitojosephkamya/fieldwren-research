import type { Metadata } from "next";
import Link from "next/link";
import { SampleSizeCalculator } from "@/components/SampleSizeCalculator";
import { CtaBand, PageIntro, Section, SectionHead } from "@/components/ui";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free guides and tools for researchers and students.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Resources" title="Free guides and tools">
        Short, practical guides written for people doing real research.
      </PageIntro>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.slug} href={`/resources/${g.slug}`} className="card p-6 transition hover:border-blue hover:shadow-lg">
              <p className="text-xs font-semibold text-slate">{g.readTime}</p>
              <h2 className="mt-2 text-xl">{g.title}</h2>
              <p className="mt-2 text-slate">{g.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="mist">
        <SectionHead title="Sample size calculator" />
        <SampleSizeCalculator />
      </Section>
      <CtaBand />
    </>
  );
}
