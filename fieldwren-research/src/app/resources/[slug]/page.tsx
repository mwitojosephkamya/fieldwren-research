import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageIntro, Section } from "@/components/ui";
import { getGuide, guides } from "@/content/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  return g ? { title: g.title, description: g.summary } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  return (
    <>
      <PageIntro eyebrow={`Guide · ${g.readTime}`} title={g.title} />
      <Section>
        <article className="mx-auto max-w-2xl space-y-6">
          {g.body.map((b, i) => (
            <div key={i}>
              {b.heading && <h2 className="mb-3 text-2xl">{b.heading}</h2>}
              {b.paragraphs?.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-slate">
                  {p}
                </p>
              ))}
              {b.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-slate">
                  {b.bullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="pt-4">
            <Link href="/resources" className="font-semibold text-blue hover:underline">
              ← All resources
            </Link>
          </p>
        </article>
      </Section>
      <CtaBand />
    </>
  );
}
