import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { CtaBand, ModeBadge, PageIntro, Section } from "@/components/ui";
import { divisions } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Research support, survey and field data collection, data analysis and statistics, and monitoring and evaluation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Research services from design to reporting">
        Four areas of work. Each item is marked remote or on site, so you know what can be done online.
      </PageIntro>
      <Section>
        <div className="space-y-12">
          {divisions.map((d) => (
            <article key={d.slug} className="card grid overflow-hidden md:grid-cols-5">
              <Photo image={d.image} width={900} className="h-56 w-full md:col-span-2 md:h-full" />
              <div className="p-6 sm:p-8 md:col-span-3">
                <h2 className="text-2xl">{d.name}</h2>
                <p className="mt-2 text-slate">{d.summary}</p>
                <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                  {d.items.slice(0, 6).map((i) => (
                    <li key={i.name} className="flex items-start justify-between gap-2 border-b border-line pb-2">
                      <span>{i.name}</span>
                      <ModeBadge mode={i.mode} />
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${d.slug}`} className="btn btn-primary mt-6">
                  See the full list
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
