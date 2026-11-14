import Link from "next/link";
import type { ReactNode } from "react";
import { contact, whatsappLink } from "@/config/site";
import type { Mode } from "@/content/services";
import { modeLabels } from "@/content/services";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark bg-navy">
      <div className="container-x py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-blue-100">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "plain",
  className = "",
}: {
  children: ReactNode;
  tone?: "plain" | "mist";
  className?: string;
}) {
  return (
    <section className={`${tone === "mist" ? "bg-mist" : "bg-white"} ${className}`}>
      <div className="container-x py-14 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-lg text-slate">{children}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "light" | "ghost-light";
  external?: boolean;
}) {
  const cls = `btn btn-${variant}`;
  if (external)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ModeBadge({ mode }: { mode: Mode }) {
  const m = modeLabels[mode];
  return (
    <span
      title={m.detail}
      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
        mode === "remote" ? "bg-sky text-blue-dark" : "bg-orange/15 text-orange-dark"
      }`}
    >
      {m.label}
    </span>
  );
}

export function CtaBand({
  title = "Tell us about your project",
  text = "Send a short message on WhatsApp or email. You will get a clear answer and a quote, with no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="on-dark bg-blue">
      <div className="container-x flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl">{title}</h2>
          <p className="mt-2 text-blue-50">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={whatsappLink("Hello Fieldwren Research, I would like to discuss a project.")}
            variant="accent"
            external
          >
            WhatsApp us
          </ButtonLink>
          <ButtonLink href={`mailto:${contact.email}`} variant="ghost-light" external>
            Send an email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
