import type { Metadata } from "next";
import { CtaBand, PageIntro, Section, SectionHead } from "@/components/ui";
import { packages, payment, researchPrices, workshopPrices, type Price } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Guide prices for research support and training. Final quotes depend on the scope of your project.",
};

function PriceTable({ rows }: { rows: Price[] }) {
  return (
    <div className="card divide-y divide-line">
      {rows.map((r) => (
        <div key={r.service} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">{r.service}</p>
            {r.note && <p className="text-sm text-slate">{r.note}</p>}
          </div>
          <p className="font-semibold text-blue">{r.price}</p>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageIntro eyebrow="Pricing" title="Clear guide prices">
        These ranges help you plan. You always get a written quote before work begins, based on scope and deadline.
      </PageIntro>
      <Section>
        <SectionHead title="Research support" />
        <PriceTable rows={researchPrices} />
      </Section>
      <Section tone="mist">
        <SectionHead title="Workshops" />
        <PriceTable rows={workshopPrices} />
      </Section>
      <Section>
        <SectionHead title="Packages" eyebrow="Bundles">
          Combine services at a bundled price. Ask us for a quote.
        </SectionHead>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <div key={p.name} className="card p-6">
              <h3 className="text-xl">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-blue">{p.for}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate">
                {p.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate">
          Larger projects usually start with a {payment.depositPercent}% deposit. See <a className="font-semibold text-blue underline" href="/how-to-pay">how to pay</a>.
        </p>
      </Section>
      <CtaBand title="Want an exact price?" text="Describe your project and we will send a written quote." />
    </>
  );
}
