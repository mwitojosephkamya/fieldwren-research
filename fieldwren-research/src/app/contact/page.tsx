import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro, Section } from "@/components/ui";
import { contact, site, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Fieldwren Research by WhatsApp, phone or email.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's talk about your research">
        WhatsApp is the fastest way to reach us. Email works well for longer documents.
      </PageIntro>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="card block p-6 transition hover:border-blue">
              <p className="eyebrow">WhatsApp</p>
              <p className="mt-1 font-serif text-2xl font-semibold text-navy">{contact.whatsappDisplay}</p>
            </a>
            <a href={`tel:${contact.phoneLink}`} className="card block p-6 transition hover:border-blue">
              <p className="eyebrow">Phone</p>
              <p className="mt-1 font-serif text-2xl font-semibold text-navy">{contact.phoneDisplay}</p>
            </a>
            <a href={`mailto:${contact.email}`} className="card block p-6 transition hover:border-blue">
              <p className="eyebrow">Email</p>
              <p className="mt-1 break-all font-serif text-xl font-semibold text-navy">{contact.email}</p>
            </a>
            <div className="card p-6">
              <p className="eyebrow">Based in</p>
              <p className="mt-1 text-lg font-semibold">{site.location}</p>
              <p className="text-sm text-slate">Working with clients worldwide.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
