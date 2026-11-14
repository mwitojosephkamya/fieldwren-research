import Link from "next/link";
import { Photo } from "@/components/Photo";
import { SampleSizeCalculator } from "@/components/SampleSizeCalculator";
import { ButtonLink, CtaBand, Section, SectionHead } from "@/components/ui";
import { images } from "@/config/images";
import { whatsappLink } from "@/config/site";
import { divisions, tools } from "@/content/services";
import { guides } from "@/content/guides";

const steps = [
  { t: "Tell us what you need", d: "Share your topic, data or project by WhatsApp or email." },
  { t: "Get a clear quote", d: "You receive scope, timeline and price before any work begins." },
  { t: "We do the work", d: "Regular updates, with questions answered along the way." },
  { t: "Review and finish", d: "You review the output, ask for changes and sign off." },
];

const why = [
  { t: "Methods you can defend", d: "Every choice is explained, so you can justify it to a supervisor, reviewer or donor." },
  { t: "Ethics first", d: "Informed consent, confidentiality and honest reporting are built into how we work." },
  { t: "Your tools, your data", d: "We work in the software you already use and hand over files you own." },
  { t: "Clear communication", d: "Plain language, agreed timelines and no surprises on price." },
];

export default function Home() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-navy">
        <Photo image={images.hero} width={1800} eager className="absolute inset-0 h-full w-full opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-blue/40" aria-hidden />
        <div className="container-x relative py-20 sm:py-28">
          <p className="eyebrow">Research. Insights. Impact.</p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl">Research support you can trust, from first idea to final report</h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Fieldwren Research helps students, researchers, universities and organisations design studies,
            collect good data, analyse it correctly and report it clearly. Based in Uganda, working with
            clients worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={whatsappLink("Hello Fieldwren Research, I would like to discuss a project.")} variant="accent" external>
              Start on WhatsApp
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost-light">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead eyebrow="What we do" title="Four areas of research work">
          Pick one service or combine several. Most work can be delivered online, and field work is available where you need it.
        </SectionHead>
        <div className="grid gap-6 sm:grid-cols-2">
          {divisions.map((d) => (
            <Link key={d.slug} href={`/services/${d.slug}`} className="card group overflow-hidden transition hover:border-blue hover:shadow-lg">
              <Photo image={d.image} width={800} className="h-44 w-full" />
              <div className="p-6">
                <h3 className="text-xl group-hover:text-blue">{d.name}</h3>
                <p className="mt-2 text-slate">{d.short}</p>
                <p className="mt-4 text-sm font-semibold text-blue">See what is included →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Photo image={images.training} width={1000} className="h-72 w-full rounded-xl sm:h-96" />
          <div>
            <p className="eyebrow">Training</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Research skills, taught hands-on</h2>
            <p className="mt-3 text-lg text-slate">
              Workshops for students and institutions on proposal writing, data collection, statistics and software.
              Participants work on real data with their own laptops.
            </p>
            <div className="mt-6">
              <ButtonLink href="/training">View training</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Why Fieldwren" title="How we work" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.t} className="card p-6">
              <div className="mb-4 h-1 w-10 rounded bg-orange" />
              <h3 className="text-lg">{w.t}</h3>
              <p className="mt-2 text-sm text-slate">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead eyebrow="Free tool" title="Sample size calculator">
          A quick way to check how many participants a survey needs. Read the guide for what the numbers mean.
        </SectionHead>
        <SampleSizeCalculator />
        <p className="mt-4 text-sm">
          <Link href="/resources/choosing-a-sample-size" className="font-semibold text-blue hover:underline">
            Read the sample size guide →
          </Link>
        </p>
      </Section>

      <Section>
        <SectionHead eyebrow="Tools" title="Software we work in" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="card p-5">
              <h3 className="text-lg">{t.name}</h3>
              <p className="mt-1 text-sm text-slate">{t.fits}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead eyebrow="Process" title="Simple from the first message" />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="card p-6">
              <span className="font-serif text-3xl font-semibold text-blue">{i + 1}</span>
              <h3 className="mt-2 text-lg">{s.t}</h3>
              <p className="mt-1 text-sm text-slate">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead eyebrow="Resources" title="Free guides for researchers" />
        <div className="grid gap-6 md:grid-cols-3">
          {guides.slice(0, 3).map((g) => (
            <Link key={g.slug} href={`/resources/${g.slug}`} className="card p-6 transition hover:border-blue hover:shadow-lg">
              <p className="text-xs font-semibold text-slate">{g.readTime}</p>
              <h3 className="mt-2 text-lg">{g.title}</h3>
              <p className="mt-2 text-sm text-slate">{g.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
