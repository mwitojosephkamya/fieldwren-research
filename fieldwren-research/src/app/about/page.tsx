/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CtaBand, PageIntro, Section } from "@/components/ui";
import { founder, site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} and its founder, ${founder.name}.`,
};

const principles = [
  ["Honest work", "We coach, explain and check. We never fabricate data or write work for you to pass off as your own."],
  ["Ethical research", "Consent, confidentiality and respect for participants come before convenience."],
  ["Clear reporting", "Findings are written in plain language, with limitations stated openly."],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="A small research practice built on careful method">
        {site.name} supports people who need good evidence, from students finishing a dissertation to
        organisations measuring their programmes.
      </PageIntro>
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            {founder.photo && (
              <img src={founder.photo} alt={founder.name} className="w-full max-w-xs rounded-xl object-cover" />
            )}
            <h2 className="mt-5 text-2xl">{founder.name}</h2>
            <p className="text-blue">{founder.role}</p>
            <p className="mt-2 text-sm text-slate">Languages: {founder.languages}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-slate">{founder.summary}</p>
            <div className="mt-8 space-y-8">
              {founder.groups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-xl">{g.title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="text-xl">Tools</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {founder.tools.map((t) => (
                    <li key={t.name} className="card flex justify-between px-4 py-2 text-sm">
                      <span className="font-semibold">{t.name}</span>
                      <span className="text-slate">{t.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <h2 className="mb-8 text-3xl">Our principles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map(([t, d]) => (
            <div key={t} className="card p-6">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-slate">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
