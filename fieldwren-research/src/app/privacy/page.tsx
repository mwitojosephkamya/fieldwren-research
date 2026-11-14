import type { Metadata } from "next";
import { PageIntro, Section } from "@/components/ui";
import { contact, site } from "@/config/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy policy" />
      <Section>
        <div className="mx-auto max-w-2xl space-y-5 text-slate">
          <p>This is a plain-language draft and should be reviewed before you rely on it.</p>
          <h2 className="text-2xl">What we collect</h2>
          <p>
            This website does not use accounts and does not store what you type in the contact form. When you
            contact {site.name} by WhatsApp, phone or email, we receive the details you choose to send.
          </p>
          <h2 className="text-2xl">How we use it</h2>
          <p>We use your details only to answer your enquiry, prepare a quote and deliver agreed work.</p>
          <h2 className="text-2xl">Your research data</h2>
          <p>
            Data you share with us is kept confidential, used only for the agreed work, and deleted or returned
            when the work ends, unless we agree otherwise in writing.
          </p>
          <h2 className="text-2xl">Contact</h2>
          <p>
            Questions about privacy: <a className="font-semibold text-blue underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
