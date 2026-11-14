import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { ButtonLink, CtaBand, ModeBadge, PageIntro, Section } from "@/components/ui";
import { whatsappLink } from "@/config/site";
import { divisions, getDivision } from "@/content/services";

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDivision(slug);
  return d ? { title: d.name, description: d.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) notFound();

  return (
    <>
      <PageIntro eyebrow="Service" title={d.name}>
        {d.summary}
      </PageIntro>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Photo image={d.image} width={1200} className="mb-8 h-64 w-full rounded-xl sm:h-80" />
            <h2 className="text-2xl">What is included</h2>
            <ul className="mt-4 divide-y divide-line">
              {d.items.map((i) => (
                <li key={i.name} className="flex items-center justify-between gap-3 py-3">
                  <span>{i.name}</span>
                  <ModeBadge mode={i.mode} />
                </li>
              ))}
            </ul>
            {d.note && <p className="mt-6 rounded-lg bg-sky p-4 text-sm text-navy">{d.note}</p>}
          </div>
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg">Who it is for</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate">
                {d.whoFor.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg">What you receive</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate">
                {d.deliverables.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg">Turnaround</h3>
              <p className="mt-2 text-sm text-slate">{d.turnaround}</p>
              <div className="mt-4">
                <ButtonLink href={whatsappLink(`Hello Fieldwren Research, I would like a quote for: ${d.name}.`)} variant="accent" external>
                  Ask for a quote
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
