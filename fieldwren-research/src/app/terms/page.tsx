import type { Metadata } from "next";
import { PageIntro, Section } from "@/components/ui";
import { payment, site } from "@/config/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of service" />
      <Section>
        <div className="mx-auto max-w-2xl space-y-5 text-slate">
          <p>This is a plain-language draft and should be reviewed before you rely on it.</p>
          <h2 className="text-2xl">Quotes and payment</h2>
          <p>
            Work begins after you accept a written quote. Larger projects start with a {payment.depositPercent}% deposit,
            with the balance due on delivery.
          </p>
          <h2 className="text-2xl">Academic integrity</h2>
          <p>
            {site.name} provides coaching, technical support, analysis and editing. We do not write assignments or
            theses for submission as your own work, and we do not fabricate or alter data.
          </p>
          <h2 className="text-2xl">Your responsibilities</h2>
          <p>
            You are responsible for the accuracy of the information you give us, for obtaining any ethical
            approvals your study needs, and for how you use our output.
          </p>
          <h2 className="text-2xl">Revisions</h2>
          <p>Each quote states how many rounds of revisions are included. Changes outside the agreed scope may be quoted separately.</p>
          <h2 className="text-2xl">Liability</h2>
          <p>We do our work with care but cannot guarantee any particular grade, approval or publication outcome.</p>
        </div>
      </Section>
    </>
  );
}
