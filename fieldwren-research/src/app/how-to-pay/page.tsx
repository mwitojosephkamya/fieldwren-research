import type { Metadata } from "next";
import { CtaBand, PageIntro, Section } from "@/components/ui";
import { contact, payment } from "@/config/site";

export const metadata: Metadata = {
  title: "How to pay",
  description: "Pay by MTN Mobile Money after you receive and accept a written quote.",
};

export default function HowToPayPage() {
  const m = payment.mobileMoney;
  return (
    <>
      <PageIntro eyebrow="Payment" title="How to pay">
        There is no online checkout. You receive a quote, agree to it, then pay by mobile money.
      </PageIntro>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Steps</h2>
            <ol className="mt-5 space-y-4">
              {[
                "Tell us about your project and receive a written quote.",
                `Accept the quote. For larger projects, pay a ${payment.depositPercent}% deposit to begin.`,
                "Send the payment using the details on this page.",
                "Send us the transaction message or screenshot so we can confirm it.",
                "Receive your work. The balance is due on delivery.",
              ].map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">{m.network}</p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-slate">Number</dt>
                <dd className="font-serif text-3xl font-semibold text-navy">{m.number}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Registered name</dt>
                <dd className="text-lg font-semibold">{m.accountName}</dd>
              </div>
            </dl>
            <p className="mt-6 rounded-lg bg-sky p-4 text-sm text-navy">
              Check that the registered name shown on your phone matches before you confirm the payment. We
              will never ask you to pay to a different number without confirming with you first on{" "}
              {contact.whatsappDisplay}.
            </p>
          </div>
        </div>
      </Section>
      <CtaBand title="Questions about payment?" text="Message us before you send any money and we will confirm the details." />
    </>
  );
}
